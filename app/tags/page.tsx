import PageTitle from '@/components/PageTitle';
import Tag from '@/components/Tag';

import { genPageMetadata } from '@/app/seo';
import { TagsWithCount } from '@/data/tags';
import tagData from 'app/tag-data.json';

export const metadata = genPageMetadata({
  title: 'タグ一覧',
  description: 'ブログ内のタグ一覧を表示します。',
});

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
              <Tag slug={tag.slug} label={tag.label} />
              <span className="ml-2 inline-block">{`(${tag.count})`}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
