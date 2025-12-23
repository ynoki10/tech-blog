export const TAGS = [
	{ label: '雑記', slug: 'random-note' },
	{ label: '11ty', slug: '11ty' },
	{ label: 'Tips', slug: 'tips' },
	{ label: 'A11y', slug: 'a11y' },
	{ label: 'Splide', slug: 'splide' },
	{ label: 'WordPress', slug: 'wordpress' },
	{ label: 'Tailwind CSS', slug: 'tailwind' },
	{ label: 'TypeScript', slug: 'typescript' },
	{ label: 'アイデア', slug: 'idea' },
	{ label: 'Slack', slug: 'slack' },
	{ label: '読書メモ', slug: 'reading-notes' },
] as const;

export type Tag = (typeof TAGS)[number];
export type TagWithCount = Tag & { count: number };

export type TagsWithCount = TagWithCount[];
