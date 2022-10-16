module.exports = {
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	redirects: async () => [
		{
			source: '/:path*',
			has: [{ type: 'host', value: 'www.danielalgarranavarro.com' }],
			destination: 'https://danielalgarranavarro.com/:path*',
			permanent: true,
		},
	],
}
