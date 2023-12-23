import 'css/prism.css';

import { compareDesc, format, parseISO } from 'date-fns';
import { notFound } from 'next/navigation';

import Link from '@/components/Link';
import MDXRenderer from '@/components/MDXRenderer';
import PageTitle from '@/components/PageTitle';
import Tag from '@/components/Tag';

import siteMetadata from '@/data/siteMetadata';
import { TAGS } from '@/data/tags';
import { Article, allArticles } from 'contentlayer/generated';

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = allArticles.find((post) => post.slug === slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);
  const publishedAt = new Date(post.date).toISOString();
  const modifiedAt = new Date(post.lastmod || post.date).toISOString();

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'ja_JP',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description: post.summary,
    },
  };
};

export const generateStaticParams = () => {
  const paths = allArticles.map((p) => ({ slug: p.slug }));
  return paths;
};

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const sortedArticles = allArticles.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  const postIndex = sortedArticles.findIndex((p) => p.slug === slug);
  const post = allArticles.find((p) => p.slug === slug) as Article;
  const postTags = TAGS.filter((tag) => post.tags?.includes(tag.label));

  if (postIndex === -1) {
    return notFound();
  }

  return (
    <article className="divide-y divide-gray-400">
      <header className="space-y-1 pb-2 md:space-y-2 md:pb-4">
        <time
          dateTime={post.date}
          className="text-sm font-medium leading-6 text-gray-500 md:text-base"
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <PageTitle>{post.title}</PageTitle>
      </header>
      <div className="space-y-8 divide-y divide-gray-200 pt-8">
        <div className="prose max-w-none">
          <MDXRenderer code={post.body.code} />
        </div>
        <footer className="space-y-8 pt-8">
          <div>
            {postTags && (
              <div>
                <h2 className="text-xl tracking-wide text-gray-900">Tags</h2>
                <ul className="mt-2 flex flex-wrap gap-3">
                  {postTags.map((tag) => (
                    <li key={tag.slug}>
                      <Tag label={tag.label} slug={tag.slug} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <Link href="/" className="text-primary-500 hover:text-primary-600">
              <span aria-hidden="true">&larr;</span> 記事一覧へ戻る
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
