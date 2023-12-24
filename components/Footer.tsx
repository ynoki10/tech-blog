import SocialIcon from '@/components/social-icons';

import siteMetadata from '@/data/siteMetadata';

export default function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center border-t py-4">
      <ul className="flex space-x-4">
        <li>
          <SocialIcon kind="github" href={siteMetadata.github} />
        </li>
        <li>
          <SocialIcon kind="twitter" href={siteMetadata.twitter} />
        </li>
      </ul>
      <p className="mt-3 flex space-x-2 text-sm text-gray-500">
        <span>{siteMetadata.author}</span>
        <span>{`© ${new Date().getFullYear()}`}</span>
        <span>{siteMetadata.title}</span>
      </p>
    </footer>
  );
}
