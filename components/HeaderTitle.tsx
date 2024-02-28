'use client';

import { usePathname } from 'next/navigation';

import Image from '@/components/Image';
import Link from '@/components/Link';

import siteMetadata from '@/data/siteMetadata';

export default function HeaderTitle() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const cssClasses = 'text-xl font-semibold md:text-2xl dark:text-gray-200';

  return (
    <Link className="flex items-center" href="/">
      <Image
        alt=""
        className="-mb-1 mr-2 size-8"
        height={250}
        src="/images/logo.webp"
        width={250}
      />
      {isHome ? (
        <h1 className={cssClasses}>{siteMetadata.headerTitle}</h1>
      ) : (
        <p className={cssClasses}>{siteMetadata.headerTitle}</p>
      )}
    </Link>
  );
}
