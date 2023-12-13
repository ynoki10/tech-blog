import { format, parseISO } from 'date-fns';

import { allArticles } from 'contentlayer/generated';

export const generateStaticParams = () =>
  allArticles.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allArticles.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

export default function ArticleLayout({ params }: { params: { slug: string } }) {
  const article = allArticles.find((article) => article._raw.flattenedPath === params.slug);
  if (!article) throw new Error(`Article not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={article.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(article.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{article.title}</h1>
      </div>
      <div
        className="[&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: article.body.html }}
      />
    </article>
  );
}
