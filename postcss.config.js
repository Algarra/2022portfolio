module.exports = {
	plugins: [
		'tailwindcss',
		[
			'@fullhuman/postcss-purgecss',
			process.env.NODE_ENV === 'production'
				? {
						// the paths to all template files
						content: [
							'./pages/**/*.{js,jsx,ts,tsx}',
							'./components/**/*.{js,jsx,ts,tsx}',
							'!./pages/**/*.{test.tsx, test.js}',
							'!./components/**/*.{test.tsx, test.js}',
						],
						// function used to extract class names from the templates
						defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
				  }
				: false,
		],
	],
	webpack: (config, { webpack }) => {
		config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
		return config
	},
}
