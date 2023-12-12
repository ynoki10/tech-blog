import Link from 'next/link';

import SocialIcon from '@/components/social-icons';

import siteMetadata from '@/data/siteMetadata';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <ul className="mb-3 flex space-x-4">
          <li>
            <SocialIcon kind="github" href={siteMetadata.github} />
          </li>
          <li>
            <SocialIcon kind="twitter" href={siteMetadata.twitter} />
          </li>
        </ul>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  );
}
