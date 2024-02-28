import { format, parseISO } from 'date-fns';

import Link from '@/components/Link';
import Tag from '@/components/Tag';

import { TAGS } from '@/data/tags';
import { Article } from 'contentlayer/generated';

export default function ArticleCard(post: Article) {
  const postTags = TAGS.filter((tag) => post.tags?.includes(tag.label));

  return (
    <article>
      <h2 className="text-lg md:text-xl">
        <Link
          className="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
          href={`/articles/${post.slug}`}
        >
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
      <time className="mt-1 block text-xs text-gray-600 dark:text-gray-400" dateTime={post.date}>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </article>
  );
}
