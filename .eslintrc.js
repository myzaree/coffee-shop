module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint'],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    "@typescript-eslint/camelcase": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "@typescript-eslint/no-shadow": "error",
    'prettier/prettier': 'error'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@layout', './src/layout'],
          ['@store', './src/store'],
          ['@constants', './src/constants']
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
      }
    }
  }
};