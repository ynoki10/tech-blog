export const tags = [
  { label: 'JavaScript', slug: 'javascript' },
  { label: 'TypeScript', slug: 'typescript' },
  { label: 'React', slug: 'react' },
  { label: 'Next.js', slug: 'nextjs' },
  { label: 'HTML', slug: 'html' },
  { label: 'CSS', slug: 'css' },
  { label: 'セキュリティ', slug: 'security' },
  { label: 'デザイン', slug: 'design' },
] as const;

export type Tag = (typeof tags)[number];
export type TagWithCount = Tag & { count: number };

export type TagsWithCount = TagWithCount[];
