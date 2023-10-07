module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{ts,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'module',
      },
    },
  ],
  'parser': '@typescript-eslint/parser', // Specifies the ESLint parser
  'parserOptions': {
    'ecmaVersion': 2020, // Allows for the parsing of modern ECMAScript features
    'sourceType': 'module', // Allows for the use of imports
    'ecmaFeatures': {
      'jsx': true, // Allows for the parsing of JSX
    },
  },
  'plugins': [
    'react',
    '@typescript-eslint', // TypeScript plugin
  ],
  'rules': {
    'max-len': ['error', 120],
    'camelcase': 'off',
  },
  'settings': {
    'react': {
      'version': 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
