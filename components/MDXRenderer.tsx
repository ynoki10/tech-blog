import { useMDXComponent } from 'next-contentlayer/hooks';

import Image from '@/components/Image';
import Link from '@/components/Link';

import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  Image,
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export default function MDXRenderer({ code }: { code: string }) {
  const Mdx = useMDXComponent(code);

  return <Mdx components={components} />;
}
