/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	rules: [
		{
			test: /\.(glsl|vs|fs|vert|frag)$/,
			exclude: /node_modules/,
			use: ['raw-loader', 'glslify-loader'],
		},
	],
	images: {
		domains: ['media.giphy.com', 'giphy.com'],
	},
}

module.exports = nextConfig
