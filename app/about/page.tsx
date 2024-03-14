import { ResolvingMetadata } from 'next';

import Image from '@/components/Image';
import SocialIcon from '@/components/social-icons';

import { genMetadata } from '@/app/seo';
import siteMetadata from '@/data/siteMetadata';

export const generateMetadata = async (_: never, parent: ResolvingMetadata) =>
  genMetadata({
    title: 'About',
    description: '筆者の自己紹介ページです。',
    parent,
  });

const Page = () => (
  <div className="mx-auto max-w-lg">
    <h1 className="sr-only">About</h1>
    <div className="flex flex-col items-center">
      <Image
        alt="プロフィール画像：はっきりとした線で描かれたポップなイラスト。男性が前方を見上げて口角を上げている。空をイメージした青い背景。"
        className="size-48 rounded-full"
        height={192}
        src="/images/icon.webp"
        width={192}
      />
      <p className="mt-4 text-2xl font-bold leading-8 tracking-wide">{siteMetadata.author}</p>
      <ul className="flex space-x-3 pt-4">
        <li>
          <SocialIcon href={siteMetadata.github} kind="github" />
        </li>
        <li>
          <SocialIcon href={siteMetadata.twitter} kind="x" />
        </li>
        <li>
          <SocialIcon href={siteMetadata.zenn} kind="zenn" />
        </li>
      </ul>
    </div>
    <p className="pt-10">{siteMetadata.profile}</p>
  </div>
);

export default Page;
