import HeaderTitle from '@/components/HeaderTitle';
import Link from '@/components/Link';

import headerNavLinks from '@/data/headerNavLinks';

export default function Header() {
  return (
    <header className="border-b py-3 sm:py-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-x-4 px-4 sm:px-6">
        <HeaderTitle />
        <nav
          aria-label="ヘッダーナビゲーション"
          className="flex items-center space-x-4 leading-5 sm:space-x-6"
        >
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link className="font-medium text-gray-900" href={link.href} key={link.title}>
                {link.title}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}
