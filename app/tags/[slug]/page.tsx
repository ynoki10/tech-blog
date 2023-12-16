import { notFound } from 'next/navigation';

import ArticleCard from '@/components/ArticleCard';

import { tags } from '@/data/tags';
import { genPageMetadata } from 'app/seo';
import { allArticles } from 'contentlayer/generated';

export function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const label = tags.find((tag) => tag.slug === slug)?.label;
  return genPageMetadata({
    title: label ? `${label}に関する記事` : 'タグが見つかりません',
    description: label ? `${label}に関する記事一覧です。` : `タグが見つかりません。`,
  });
}

export const generateStaticParams = () => {
  const paths = tags.map((t) => ({ slug: t.slug }));
  return paths;
};

export default function TagPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const tag = tags.find((tag) => tag.slug === slug);
  if (!tag) return notFound();

  const filteredPosts = allArticles.filter((post) => post.tags?.includes(tag.label));

  return (
    <div className="mx-auto max-w-3xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">{tag.label} に関する記事一覧</h1>
      {filteredPosts.map((post, idx) => (
        <ArticleCard key={idx} {...post} />
      ))}
    </div>
  );
}
