import { useMDXComponent } from 'next-contentlayer/hooks';

import Image from '@/components/Image';
import Link from '@/components/Link';

import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
	Image,
	a: ({ href, children, ...rest }) => (
		<Link href={href as string} {...rest}>
			{children}
		</Link>
	),
};

const MDXRenderer = ({ code }: { code: string }) => {
	const Mdx = useMDXComponent(code);

	return <Mdx components={components} />;
};

export default MDXRenderer;
