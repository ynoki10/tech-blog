import { Github, Twitter } from './icons';

const components = {
  github: Github,
  twitter: Twitter,
};

type SocialIconProps = {
  kind: keyof typeof components;
  href: string | undefined;
  size?: number;
};

export default function SocialIcon({ kind, href }: SocialIconProps) {
  if (!href) return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className={`h-6 w-6 fill-current text-gray-700 hover:text-gray-600`} />
    </a>
  );
}
