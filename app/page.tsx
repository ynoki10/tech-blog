import { compareDesc } from 'date-fns';

import ArticleCard from '@/components/ArticleCard';

import { allArticles } from 'contentlayer/generated';

export default function Home() {
  const posts = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="mx-auto max-w-3xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">よしのきのブログ</h1>
      {posts.map((post, idx) => (
        <ArticleCard key={idx} {...post} />
      ))}
    </div>
  );
}
