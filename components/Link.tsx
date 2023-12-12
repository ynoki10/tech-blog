import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

import type { LinkProps } from 'next/link';

export default function CustomLink({
  href,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return <Link href={href} {...rest} />;
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
}
