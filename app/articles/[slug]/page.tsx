import '@/css/prism.css';

import { compareDesc, format, parseISO } from 'date-fns';
import { ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import Link from '@/components/Link';
import MDXRenderer from '@/components/MDXRenderer';
import PageTitle from '@/components/PageTitle';
import Tag from '@/components/Tag';

import { genMetadata } from '@/app/seo';
import { TAGS } from '@/data/tags';
import { Article, allArticles } from 'contentlayer/generated';

export const generateMetadata = async (
  {
    params,
  }: {
    params: { slug: string };
  },
  parent: ResolvingMetadata,
) => {
  const slug = params.slug;
  const post = allArticles.find((post) => post.slug === slug);
  if (!post) return null;

  const publishedTime = post ? new Date(post.date).toISOString() : '';
  const modifiedTime = post ? new Date(post.lastmod || post.date).toISOString() : '';

  return genMetadata({
    title: post.title,
    description: post.summary,
    twitterCard: 'summary',
    ogPublishedTime: publishedTime,
    ogModifiedTime: modifiedTime,
    parent,
  });
};

export const generateStaticParams = () => {
  const paths = allArticles.filter((p) => !p.draft).map((p) => ({ slug: p.slug }));
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
    <article className="divide-y divide-gray-400 dark:divide-gray-500">
      <header className="space-y-1 pb-2 md:space-y-2 md:pb-4">
        <time
          className="text-sm font-medium leading-6 text-gray-500 md:text-base dark:text-gray-400"
          dateTime={post.date}
        >
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <PageTitle>{post.title}</PageTitle>
      </header>
      <div className="space-y-8 divide-y divide-gray-200 pt-8 dark:divide-gray-700">
        <div className="prose max-w-none dark:prose-invert">
          <MDXRenderer code={post.body.code} />
        </div>
        <footer className="space-y-8 pt-8">
          <div>
            {postTags && (
              <div>
                <h2 className="text-xl tracking-wide text-gray-900 dark:text-gray-200">Tags</h2>
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
            <Link
              className="text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
              href="/"
            >
              <span aria-hidden="true">&larr;</span> 記事一覧へ戻る
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
