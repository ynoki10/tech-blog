export const TAGS = [{ label: '雑記', slug: 'random-note' }] as const;

export type Tag = (typeof TAGS)[number];
export type TagWithCount = Tag & { count: number };

export type TagsWithCount = TagWithCount[];
