'use client';

import { usePathname } from 'next/navigation';

import Image from '@/components/Image';
import Link from '@/components/Link';

import siteMetadata from '@/data/siteMetadata';

export default function HeaderTitle() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const cssClasses = 'text-xl font-semibold md:text-2xl';

  return (
    <Link href="/" className="flex items-center">
      <Image src="/images/logo.webp" alt="" width={250} height={250} className="mr-2 h-8 w-8" />
      {isHome ? (
        <h1 className={cssClasses}>{siteMetadata.headerTitle}</h1>
      ) : (
        <p className={cssClasses}>{siteMetadata.headerTitle}</p>
      )}
    </Link>
  );
}
