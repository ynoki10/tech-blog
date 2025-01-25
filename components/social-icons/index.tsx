import { Github, X, Zenn } from '@/components/social-icons/icons';

const components = {
	github: Github,
	x: X,
	zenn: Zenn,
};

type SocialIconProps = {
	kind: keyof typeof components;
	href: string | undefined;
	size?: number;
};

const SocialIcon = ({ kind, href }: SocialIconProps) => {
	if (!href) return null;

	const SocialSvg = components[kind];

	return (
		<a
			className="text-sm text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
			href={href}
			rel="noopener noreferrer"
			target="_blank"
		>
			<span className="sr-only">{kind}</span>
			<SocialSvg className={`size-6 fill-current`} />
		</a>
	);
};
export default SocialIcon;
