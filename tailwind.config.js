/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'split-white-black': 'linear-gradient(to bottom, #2d3748 50% , white 50%);',
			},
		},
	},
	plugins: [],
}
