'use client';

import { usePathname } from 'next/navigation';

import Image from '@/components/Image';
import Link from '@/components/Link';

import siteMetadata from '@/data/siteMetadata';

const HeaderTitle = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const cssClasses = 'md:text-lg lg:text-xl font-semibold md:text-2xl dark:text-gray-200';

  return (
    <Link className="flex items-center" href="/">
      <Image
        alt=""
        className="-mb-1 mr-1 size-8 md:mr-2"
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
};

export default HeaderTitle;
