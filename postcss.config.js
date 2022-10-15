module.exports = {
	plugins: [
		'tailwindcss',
		'postcss',
		[
			'@fullhuman/postcss-purgecss',
			process.env.NODE_ENV === 'production'
				? {
						// the paths to all template files
						content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './styles/globals.css'],
						// function used to extract class names from the templates
						defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
				  }
				: false,
		],
	],
}
