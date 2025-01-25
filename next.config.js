const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		dirs: ['app', 'components', 'data'],
	},
};

module.exports = withContentlayer(nextConfig);
