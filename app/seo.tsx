import { Metadata, ResolvedMetadata } from 'next';

import siteMetadata from '@/data/siteMetadata';

type SEOProps = {
  title: string;
  description?: string;
  ogType?: 'article' | 'website';
  twitterCard?: 'summary' | 'summary_large_image';
  parent: Promise<ResolvedMetadata>;
  ogPublishedTime?: string;
  ogModifiedTime?: string;
};

export async function genMetadata({
  title,
  description,
  ogType = 'article',
  twitterCard = 'summary_large_image',
  parent,
  ogPublishedTime,
  ogModifiedTime,
}: SEOProps): Promise<Metadata> {
  const parentMetadata = await parent;

  const ogDescription = description
    ? `${description} | ${siteMetadata.title}`
    : siteMetadata.description;

  return {
    title,
    description: description || siteMetadata.description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: ogDescription,
      url: './',
      siteName: siteMetadata.title,
      locale: siteMetadata.locale,
      type: ogType,
      ...(parentMetadata.openGraph && { images: parentMetadata.openGraph?.images }),
      ...(ogPublishedTime && { publishedTime: ogPublishedTime }),
      ...(ogModifiedTime && { modifiedTime: ogModifiedTime }),
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: twitterCard,
      description: ogDescription,
      site: siteMetadata.twitterId,
      creator: siteMetadata.twitterId,
      ...(parentMetadata.twitter && { images: parentMetadata.twitter?.images }),
    },
  };
}
