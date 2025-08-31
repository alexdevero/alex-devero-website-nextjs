import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys'
import { defineConfig, globalIgnores } from 'eslint/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  globalIgnores(['.next/']),
  {
    extends: fixupConfigRules(
      compat.extends(
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'next',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier'
      )
    ),

    plugins: {
      'typescript-sort-keys': typescriptSortKeys,
    },

    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],

      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-unused-vars': 'off',

      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../../*'],
              message: 'Please use absolute imports',
            },
            {
              group: ['vitest-preview'],
              message:
                "Please remove this import before committing changes as it shouldn't get to production",
            },
          ],
        },
      ],

      'react/no-multi-comp': [
        1,
        {
          ignoreStateless: false,
        },
      ],

      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/hook-use-state': 'error',
      'react/display-name': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-fragments': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-leaked-render': 'warn',
      'react/jsx-no-useless-fragment': 'error',

      'react/jsx-curly-brace-presence': [
        'warn',
        {
          props: 'never',
          children: 'never',
        },
      ],

      'react/no-array-index-key': 'warn',
      'react/no-unescaped-entities': 'error',
      'react/jsx-props-no-multi-spaces': 'error',
      'react/self-closing-comp': 'error',

      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: false,
          shorthandLast: true,
          multiline: 'ignore',
          ignoreCase: false,
          noSortAlphabetically: false,
          reservedFirst: true,
          locale: 'auto',
        },
      ],

      'react/no-unused-prop-types': 'error',
      'react/prop-types': 'off',
      'import/no-absolute-path': 'error',

      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],

      'no-debugger': 'error',

      'typescript-sort-keys/interface': [
        'warn',
        'asc',
        {
          caseSensitive: true,
          natural: true,
          requiredFirst: false,
        },
      ],

      'typescript-sort-keys/string-enum': [
        'warn',
        'asc',
        {
          natural: true,
        },
      ],
    },
  },
])
