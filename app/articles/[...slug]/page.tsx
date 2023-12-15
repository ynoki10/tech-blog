import { compareDesc } from 'date-fns';
import { notFound } from 'next/navigation';

import Link from '@/components/Link';
import MDXRenderer from '@/components/MDXRenderer';

import siteMetadata from '@/data/siteMetadata';
import { Article, allArticles } from 'contentlayer/generated';

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const slug = decodeURI(params.slug.join('/'));
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
  const paths = allArticles.map((p) => ({ slug: p.slug.split('/') }));
  return paths;
};

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export default function Page({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'));
  const sortedArticles = allArticles.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  const postIndex = sortedArticles.findIndex((p) => p.slug === slug);
  const post = allArticles.find((p) => p.slug === slug) as Article;

  if (postIndex === -1) {
    return notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6">
      <div className="xl:divide-y xl:divide-gray-200">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">公開日</dt>
                <dd className="text-base font-medium leading-6 text-gray-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                </dd>
              </div>
            </dl>
            <div>
              <h1>{post.title}</h1>
            </div>
          </div>
        </header>
        <div className="divide-y divide-gray-200 pb-8">
          <div className="divide-y divide-gray-200 xl:col-span-3 xl:col-start-2 xl:pb-0">
            <div className="prose max-w-none pb-8 pt-10">
              <MDXRenderer code={post.body.code} />
            </div>
          </div>
          <footer className="xl:pt-10">
            <div className="pt-4 xl:pt-8">
              <Link
                href="/"
                className="text-primary-500 hover:text-primary-600"
                aria-label="Back to the blog"
              >
                &larr; Back to the blog
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}