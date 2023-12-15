import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

import { allArticles, Article } from 'contentlayer/generated';

function ArticleCard(post: Article) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.path} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  );
}

export default function Home() {
  const posts = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="mx-auto max-w-3xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">よしのきのブログ</h1>
      {posts.map((article, idx) => (
        <ArticleCard key={idx} {...article} />
      ))}
    </div>
  );
}
