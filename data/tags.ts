export const TAGS = [
  { label: '雑記', slug: 'random-note' },
  { label: '11ty', slug: '11ty' },
  { label: 'Tips', slug: 'tips' },
  { label: 'A11y', slug: 'a11y' },
  { label: 'Splide', slug: 'splide' },
] as const;

export type Tag = (typeof TAGS)[number];
export type TagWithCount = Tag & { count: number };

export type TagsWithCount = TagWithCount[];
