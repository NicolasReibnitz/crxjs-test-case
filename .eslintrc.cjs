const tsParser = require('@typescript-eslint/parser');
const espree = require('espree');

module.exports = {
	root: true,
	extends: ['@das.laboratory/eslint-config-interactive-next'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: {
			js: espree,
			ts: tsParser
		}
	},
	globals: {
		chrome: 'readonly'
	}
};
