import { Metadata } from 'next';

import siteMetadata from '@/data/siteMetadata';

interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;
}

export function genPageMetadata({ title, description, image }: PageSEOProps): Metadata {
  return {
    title,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: 'ja_JP',
      type: 'article',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
  };
}
