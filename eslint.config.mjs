import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import stylisticJsx from '@stylistic/eslint-plugin-jsx'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import safeql from '@ts-safeql/eslint-plugin/config'
import parserTs from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import _import from 'eslint-plugin-import'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tsEslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const a11yRules = {}

const baseRules = {
  'no-console': ['warn', { allow: ['error'] }],
  'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }], // Whitelist _ functions here.
  'no-unused-vars': ['off'],
  'no-use-before-define': 'off',
  '@ts-safeql/check-sql': [
    'error',
    {
      connections: [
        {
          connectionUrl: process.env.DATABASE_URL,
          // The migrations path:
          migrationsDir: './prisma/migrations',

          targets: [
            // This makes `prisma.$queryRaw` and `prisma.$executeRaw` commands linted

            { tag: 'prisma.+($queryRaw|$executeRaw)', transform: '{type}[]' },
          ],
        },
      ],
    },
  ],
}

const importRules = {
  ..._import.configs.recommended.rules,
  'import/no-deprecated': ['error'],
  'import/newline-after-import': ['error'],
  'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
  'import/no-extraneous-dependencies': ['error'],
  'import/no-named-as-default': ['off'],
  'unused-imports/no-unused-imports': ['error'],
  'sort-imports': 'off',
  'import/prefer-default-export': 'off',
  'import/no-cycle': 1,
  'import/extensions': 0,
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
  'simple-import-sort/exports': 'error',
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^react$', '^react', '^@react', '^react\\u0000$'], // react things first
        ['^@?\\w'], // packages
        ['~/.'],
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ['^@?\\w.*\\u0000$', '^[^.].*\\u0000$', '^\\..*\\u0000$'], // Package types then internal types.
      ],
    },
  ],
}

const reactRules = {
  'react/prop-types': 'off',
  'react/no-unknown-property': 'off',
}

const typescriptRules = {
  '@stylistic/ts/semi': ['error', 'never'],
  '@stylistic/ts/explicit-module-boundary-types': 'off',
  '@stylistic/ts/no-use-before-define': 'off',
  'no-useless-constructor': ['error'],
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'all',
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      ignoreRestSiblings: false,
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/no-misused-promises': 'off',
}

const jsxRules = {
  '@stylistic/jsx/jsx-indent': ['error', 2],
}

const generalSettings = {
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: true,
      alias: {
        map: [['~', './src/']],
        extensions: ['.ts', '.js', '.tsx'],
      },
      node: true,
    },
  },
}

const jsxA11yConfig = {
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  // ...jsxA11Y.flatConfigs.recommended,
  name: 'jsx-a11y-config',
  languageOptions: {
    ...jsxA11Y.flatConfigs.recommended.languageOptions,
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
    },
  },
  rules: {
    ...jsxRules,
  },
  settings: generalSettings.settings,
}

const mainConfig = [
  {
    name: 'ignores-config',
    ignores: ['**/next-env.d.ts', 'eslint.config.mjs', '**/node_modules', '**/yarn**', '**/.next', 'bun.lockb'],
  },
  ...fixupConfigRules(compat.extends('plugin:react/recommended', 'plugin:react/jsx-runtime')),
  _import.flatConfigs.recommended,
  jsxA11yConfig,
  stylistic.configs['disable-legacy'],
  {
    name: 'legacy-config',
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      '@stylistic': stylistic,
      '@stylistic/jsx': stylisticJsx,
    },
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      ...a11yRules,
      ...baseRules,
      ...importRules,
      ...reactRules,
    },
    settings: generalSettings.settings,
  },
  ...tsEslint.configs.recommendedTypeChecked,
  safeql.configs.connections({
    databaseUrl: 'postgres://postgres:postgres@localhost:5432/safeql_basic_flat_config',
    targets: [{ tag: 'sql', transform: '{type}[]' }],
  }),
  {
    name: 'typescript-config',
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@stylistic/ts': stylisticTs,
    },
    languageOptions: {
      parserOptions: {
        parser: parserTs,
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: { ...typescriptRules },
    settings: generalSettings.settings,
  },

  eslintConfigPrettier,
]

export default mainConfig
