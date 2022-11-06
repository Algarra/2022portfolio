module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: ['plugin:react/recommended', 'standard', 'eslint-config-prettier', 'next/core-web-vitals', 'next/core-web-vitals'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react-hooks/exhaustive-deps': 'off',
	},
}
