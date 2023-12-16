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
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <PageTitle>タグ一覧</PageTitle>
        </div>
        <ul className="flex flex-wrap gap-6">
          {sortedTags.map((tag) => {
            return (
              <li key={tag.slug}>
                <Tag slug={tag.slug} label={tag.label} />
                {`(${tag.count})`}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
