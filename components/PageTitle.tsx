import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const PageTitle = ({ children }: Props) => (
	<h1 className="text-2xl font-extrabold leading-9 text-gray-900 sm:leading-10 md:text-3xl dark:text-gray-200">
		{children}
	</h1>
);

export default PageTitle;
