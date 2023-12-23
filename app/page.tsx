import { compareDesc } from 'date-fns';

import ArticleCard from '@/components/ArticleCard';

import { allArticles } from 'contentlayer/generated';

export default function Home() {
  const posts = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <ul className="space-y-8 md:space-y-10">
      {posts.map((post) => (
        <li key={post._id}>
          <ArticleCard {...post} />
        </li>
      ))}
    </ul>
  );
}
