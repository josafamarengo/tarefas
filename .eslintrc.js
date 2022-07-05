export const env = {
  browser: true,
  es2021: true,
  node: true,
  jest: true
};
export const extendss = ['eslint:recommended', 'plugin:prettier/recommended', 'airbnb-base'];
export const parser = '@typescript-eslint/parser';
export const parserOptions = {
  project: 'tsconfig.json',
  tsconfigRootDir: __dirname,
  ecmaFeatures: {
    jsx: true
  },
  ecmaVersion: 12,
  sourceType: 'module'
};
export const plugins = ['react', '@typescript-eslint', 'prettier'];
export const rules = {
  'react/jsx-props-no-spreading': 'off',
  'react/react-in-jsx-scope': 'off',
  'prettier/prettier': 'error',
  'space-before-function-paren': 'off',
  'react/prop-types': 'off'
};
