import Link from '@/components/Link';

interface Props {
  slug: string;
  label: string;
}

export default function Tag({ slug, label }: Props) {
  return (
    <Link
      href={`/tags/${slug}`}
      className="mr-1.5 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {label}
    </Link>
  );
}
