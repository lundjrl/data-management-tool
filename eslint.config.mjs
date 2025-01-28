import antfu from '@antfu/eslint-config'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import safeql from '@ts-safeql/eslint-plugin/config'
import parserTs from '@typescript-eslint/parser'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'

import globals from 'globals'

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

const typescriptRules = {
  'style/semi': ['error', 'never'],
  'style/brace-style': ['off'],
  '@stylistic/ts/explicit-module-boundary-types': 'off',
  '@stylistic/ts/no-use-before-define': 'off',
  'no-useless-constructor': ['error'],
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      vars: 'all',
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

const generalSettings = {
  settings: {
    'react': {
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
  name: 'jsx-a11y-config',
  languageOptions: {
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
    },
  },
  settings: generalSettings.settings,
}

const lintConfig = antfu({
  isInEditor: false,
  lessOpinionated: true,
  markdown: true,
  react: true,
  settings: {
    react: { version: 'detect' },
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
  },
  typescript: {
    parserOptions: {
      parser: parserTs,
      project: 'tsconfig.json',
      ecmaVersion: 'latest',
      ecmaFeatures: {
        jsx: true,
      },
    },
    overrides: {
      ...typescriptRules,
      ...importRules,
      ...baseRules,
      'style/indent': ['error', 2],
      'style/no-trailing-spaces': ['error', {}],
      'style/max-statements-per-line': ['error', { max: 2 }],
      'react-dom/no-unknown-property': 'off',
      'perfectionist/sort-imports': 'off',
    },
  },
  ignores: ['**/next-env.d.ts', '**/node_modules', '**/yarn**', '**/.next', 'bun.lockb'],
}, {
  name: 'typescript-config',
  files: ['**/*.ts', '**/*.tsx'],
  plugins: {
    '@stylistic/ts': stylisticTs,
    'simple-import-sort': simpleImportSort,
    'unused-imports': unusedImports,
  },
  languageOptions: {
    parserOptions: {
      parser: parserTs,
      project: 'tsconfig.json',
      ecmaVersion: 'latest',
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
}, jsxA11yConfig, safeql.configs.connections({
  databaseUrl: 'postgres://postgres:postgres@localhost:5432/safeql_basic_flat_config',
  targets: [{ tag: 'sql', transform: '{type}[]' }],
}))

export default lintConfig
