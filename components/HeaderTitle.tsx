'use client';

import { usePathname } from 'next/navigation';

import Link from '@/components/Link';

import siteMetadata from '@/data/siteMetadata';

export default function HeaderTitle() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const cssClasses = 'text-xl font-semibold md:text-2xl';

  return (
    <Link href="/">
      {isHome ? (
        <h1 className={cssClasses}>{siteMetadata.headerTitle}</h1>
      ) : (
        <p className={cssClasses}>{siteMetadata.headerTitle}</p>
      )}
    </Link>
  );
}
