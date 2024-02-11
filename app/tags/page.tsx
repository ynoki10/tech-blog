import { ResolvingMetadata } from 'next';

import PageTitle from '@/components/PageTitle';
import Tag from '@/components/Tag';

import { genMetadata } from '@/app/seo';
import tagData from '@/app/tag-data.json';
import { TagsWithCount } from '@/data/tags';

export const generateMetadata = async (_: never, parent: ResolvingMetadata) => {
  return genMetadata({
    title: 'タグ一覧',
    description: 'ブログ内のタグの一覧ページです。',
    parent,
  });
};

export default function Page() {
  const tags = tagData as TagsWithCount;
  const sortedTags = tags.filter((tag) => tag.count !== 0).sort((a, b) => b.count - a.count);
  return (
    <>
      <PageTitle>タグ一覧</PageTitle>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-8 md:gap-y-4">
        {sortedTags.map((tag) => {
          return (
            <li key={tag.slug}>
              <Tag label={tag.label} slug={tag.slug} />
              <span className="ml-2 inline-block">
                ({tag.count}
                <span className="sr-only">件の記事</span>)
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
