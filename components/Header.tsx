import ColorThemeSelector from '@/components/ColorThemeSelector';
import HeaderTitle from '@/components/HeaderTitle';
import Link from '@/components/Link';

import headerNavLinks from '@/data/headerNavLinks';

const Header = () => (
	<header className="border-b py-3 sm:py-4 dark:border-gray-500">
		<div className="mx-auto flex max-w-3xl items-center justify-between gap-x-4 px-4 sm:px-6">
			<HeaderTitle />
			<div className="flex items-center space-x-4 sm:space-x-6">
				<nav
					aria-label="ヘッダーナビゲーション"
					className="flex items-center space-x-3 leading-5 sm:space-x-5 md:space-x-6"
				>
					{headerNavLinks
						.filter((link) => link.href !== '/')
						.map((link) => (
							<Link
								className="text-sm font-medium text-gray-900 md:text-base dark:text-gray-100"
								href={link.href}
								key={link.title}
							>
								{link.title}
							</Link>
						))}
				</nav>
				<ColorThemeSelector />
			</div>
		</div>
	</header>
);

export default Header;
