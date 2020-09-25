module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/prettier',
		'@vue/prettier/@typescript-eslint',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		//强制使用单引号
		quotes: ['warn', 'single'],
		//强制使用分号结尾
		semi: ['warn', 'always'],
		// 关闭冲突规则
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true,
				trailingComma: true,
				bracketSpacing: true,
				jsxBracketSameLine: true,
				printWidth: 80,
			},
		],
	},
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				mocha: true,
			},
		},
	],
};
