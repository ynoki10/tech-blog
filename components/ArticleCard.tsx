import { format, parseISO } from 'date-fns';

import Link from '@/components/Link';
import Tag from '@/components/Tag';

import { TAGS } from '@/data/tags';
import { Article } from 'contentlayer/generated';

export default function ArticleCard(post: Article) {
  const postTags = TAGS.filter((tag) => post.tags?.includes(tag.label));

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
