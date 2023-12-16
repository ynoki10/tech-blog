import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

import Tag from '@/components/Tag';

import { tags } from '@/data/tags';
import { allArticles, Article } from 'contentlayer/generated';

function ArticleCard(post: Article) {
  const postTags = tags.filter((tag) => post.tags?.includes(tag.label));

  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link href={post.path} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      {postTags && (
        <ul className="flex flex-wrap gap-3">
          {postTags.map((tag) => (
            <li key={tag.slug}>
              <Tag label={tag.label} slug={tag.slug} />
            </li>
          ))}
        </ul>
      )}
      <time dateTime={post.date} className="mb-2 mt-1 block text-xs text-gray-600">
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
      {posts.map((post, idx) => (
        <ArticleCard key={idx} {...post} />
      ))}
    </div>
  );
}
