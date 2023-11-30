module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['prefer-arrow-functions'],
	extends: ['standard-with-typescript', 'prettier'],

	rules: {
		// JS
		'default-case': 'off',
		curly: ['error', 'all'],
		'no-case-declarations': 'error',
		'arrow-body-style': ['error', 'always'],
		'object-curly-newline': [
			'error',
			{
				ObjectExpression: {
					multiline: true,
					minProperties: 1,
				},
				ObjectPattern: {
					multiline: true,
				},
				ImportDeclaration: {
					multiline: true,
				},
				ExportDeclaration: {
					multiline: true,
				},
			},
		],

		// TS
		'@typescript-eslint/return-await': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-dynamic-delete': 'off',
		'@typescript-eslint/strict-null-checks': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/restrict-plus-operands': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/no-unnecessary-type-assertion': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',

		// Libs
		// eslint-plugin-prefer-arrow-functions
		'prefer-arrow-functions/prefer-arrow-functions': [
			'error',
			{
				classPropertiesAllowed: false,
				disallowPrototype: false,
				returnStyle: 'unchanged',
				singleReturnOnly: false,
			},
		],
	},
};
