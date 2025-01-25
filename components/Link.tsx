import NextLink from 'next/link';
import { AnchorHTMLAttributes } from 'react';

import type { LinkProps } from 'next/link';

const Link = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
	const isInternalLink = href && href.startsWith('/');
	const isAnchorLink = href && href.startsWith('#');

	if (isInternalLink) {
		return <NextLink href={href} {...rest} />;
	}

	if (isAnchorLink) {
		return <a href={href} {...rest} />;
	}

	return <a href={href} rel="noopener noreferrer" target="_blank" {...rest} />;
};

export default Link;
