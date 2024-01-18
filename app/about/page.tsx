import Image from '@/components/Image';
import SocialIcon from '@/components/social-icons';

import { genPageMetadata } from '@/app/seo';
import siteMetadata from '@/data/siteMetadata';

export const metadata = genPageMetadata({ title: 'About' });

export default function Page() {
  return (
    <div className="mx-auto max-w-lg">
      <h1 className="sr-only">About</h1>
      <div className="flex flex-col items-center">
        <Image
          src="/images/icon.webp"
          alt="プロフィール画像：はっきりとした線で描かれたポップなイラスト。男性が前方を見上げて口角を上げている。空をイメージした青い背景。"
          width={192}
          height={192}
          className="h-48 w-48 rounded-full"
        />
        <p className="mt-4 text-2xl font-bold leading-8 tracking-tight">{siteMetadata.author}</p>
        <ul className="flex space-x-3 pt-4">
          <li>
            <SocialIcon kind="github" href={siteMetadata.github} />
          </li>
          <li>
            <SocialIcon kind="x" href={siteMetadata.twitter} />
          </li>
        </ul>
      </div>
      <p className="pt-10">{siteMetadata.profile}</p>
    </div>
  );
}
