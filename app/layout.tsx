import Footer from '@/components/Footer';
import Header from '@/components/Header';

import siteMetadata from '@/data/siteMetadata';
import '@/css/tailwind.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    locale: siteMetadata.locale,
    type: 'website',
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    description: siteMetadata.description,
    site: siteMetadata.twitterId,
    creator: siteMetadata.twitterId,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`scroll-smooth`} lang="ja">
      <body className="break-words bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <div className="flex min-h-screen flex-col justify-between">
          <Header />
          <main className="mx-auto mb-auto w-full max-w-3xl px-4 pt-8 sm:px-6 sm:pt-12 md:pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
