import { ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import ArticleCard from '@/components/ArticleCard';
import PageTitle from '@/components/PageTitle';

import { genMetadata } from '@/app/seo';
import { TAGS } from '@/data/tags';
import { allArticles } from 'contentlayer/generated';

export const generateMetadata = async (
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
) => {
  const slug = params.slug;
  const label = TAGS.find((tag) => tag.slug === slug)?.label;

  return genMetadata({
    title: label ? `${label}に関する記事` : 'タグが見つかりません',
    description: label ? `${label}に関する記事の一覧ページです。` : `タグが見つかりません。`,
    parent,
  });
};

export const generateStaticParams = () => {
  const paths = TAGS.map((t) => ({ slug: t.slug }));
  return paths;
};

export default function TagPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const tag = TAGS.find((tag) => tag.slug === slug);
  if (!tag) return notFound();

  const filteredPosts = allArticles.filter((post) => post.tags?.includes(tag.label));

  return (
    <>
      <PageTitle>{tag.label} に関する記事一覧</PageTitle>
      <ul className="space-y-8 pt-8 md:space-y-10">
        {filteredPosts.map((post) => (
          <li key={post._id}>
            <ArticleCard {...post} />
          </li>
        ))}
      </ul>
    </>
  );
}
