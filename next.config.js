module.exports = {
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	redirects: async () => [
		{
			source: '/:path*',
			has: [{ type: 'host', value: 'danielalgarranavarro.com' }],
			destination: 'https://www.danielalgarranavarro.com/:path*',
			permanent: true,
		},
	],
}
