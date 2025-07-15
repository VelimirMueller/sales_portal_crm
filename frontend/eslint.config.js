// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      'no-unused-vars': 'off', // replaced by TS version
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
// This ESLint configuration is tailored for a React project using TypeScript.
// It extends the recommended rules from ESLint, TypeScript, and React Hooks,
// and includes specific settings for TypeScript and React. The configuration
// also ignores the 'dist' directory and customizes rules for unused variables
// and React component exports. The use of 'globals.browser' ensures that browser
// globals are recognized, and the configuration is set up to handle both JavaScript
// and TypeScript files with JSX support. The 'react-refresh' plugin is included
// to enable fast refresh during development, allowing for a better developer experience.
// The configuration is modular and can be extended or modified as needed for specific project requirements.