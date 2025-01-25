import Link from '@/components/Link';

interface Props {
	slug: string;
	label: string;
}

const Tag = ({ slug, label }: Props) => (
	<Link
		className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-400"
		href={`/tags/${slug}`}
	>
		{label}
	</Link>
);

export default Tag;
