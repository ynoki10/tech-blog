import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';
import { PluginAPI } from 'tailwindcss/types/config';

import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,tsx}', './data/**/*.mdx'],
	darkMode: ['selector', '.dark'],
	theme: {
		extend: {
			lineHeight: {
				11: '2.75rem',
				12: '3rem',
				13: '3.25rem',
				14: '3.5rem',
			},
			colors: {
				primary: colors.pink,
				gray: colors.gray,
			},
			typography: (theme: PluginAPI['theme']) => ({
				DEFAULT: {
					css: {
						a: {
							color: theme('colors.primary.500'),
							'&:hover': {
								color: theme('colors.primary.600'),
							},
							code: { color: theme('colors.primary.400') },
						},
						'h1,h2': {
							fontWeight: '700',
							letterSpacing: theme('letterSpacing.tight'),
						},
						h3: {
							fontWeight: '600',
						},
						code: {
							color: theme('colors.indigo.500'),
						},
					},
				},
				invert: {
					css: {
						a: {
							color: theme('colors.primary.500'),
							'&:hover': {
								color: theme('colors.primary.400'),
							},
							code: { color: theme('colors.primary.400') },
						},
						'h1,h2,h3,h4,h5,h6': {
							color: theme('colors.gray.100'),
						},
					},
				},
			}),
		},
	},
	plugins: [typography],
} satisfies Config;
