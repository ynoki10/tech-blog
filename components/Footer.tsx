import SocialIcon from '@/components/social-icons';

import siteMetadata from '@/data/siteMetadata';

const Footer = () => (
	<footer className="mt-12 flex flex-col items-center border-t py-4 dark:border-gray-500">
		<ul className="flex space-x-4">
			<li>
				<SocialIcon href={siteMetadata.github} kind="github" />
			</li>
			<li>
				<SocialIcon href={siteMetadata.twitter} kind="x" />
			</li>
		</ul>
		<p className="mt-3 flex space-x-2 text-sm text-gray-500 dark:text-gray-300">
			<span>{siteMetadata.author}</span>
			<span>{`© ${new Date().getFullYear()}`}</span>
			<span>{siteMetadata.title}</span>
		</p>
	</footer>
);

export default Footer;
