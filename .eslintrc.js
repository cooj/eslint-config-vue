module.exports = {
    extends: [
        '@antfu/eslint-config',
        '@unocss/eslint-config',
    ],
    rules: {
        // 保存代码时缩进4个空格
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'no-console': [
            'warn',
            {
                allow: [
                    'error',
                    'warn',
                ],
            },
        ],
        'curly': [
            'error',
            'multi-line',
            'consistent',
        ],
        'brace-style': 'off',
        'jsonc/indent': [
            'error',
            4,
        ],
        '@typescript-eslint/brace-style': [
            'error',
            '1tbs',
            // {
            //   "allowSingleLine": true
            // }
        ],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                variables: false,
            },
        ],
        'antfu/if-newline': 'off', // 允许if(a==1) return 1  这种单行的格式
        'antfu/top-level-function': 'off',
        'vue/component-tags-order': [
            'error',
            {
                order: [
                    //   [
                    //     "script",
                    //     "template"
                    //   ],
                    'template',
                    'script',
                    'style',
                ],
            },
        ],
        'vue/first-attribute-linebreak': [
            'warn',
            {
                multiline: 'beside',
            },
        ],
        'vue/html-closing-bracket-newline': [
            'warn',
            {
                multiline: 'never',
            },
        ],
        'vue/html-indent': [
            'warn',
            4,
            {
                alignAttributesVertically: false,
            },
        ],
        'vue/dot-location': 'off',
        'vue/comma-dangle': [
            'error',
            'only-multiline',
        ],
        'vue/object-curly-newline': [
            'warn',
            'never',
        ],
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                // "varsIgnorePattern": "^_",
                // "args": "after-used",
                // "argsIgnorePattern": "^_"
                argsIgnorePattern: '^',
            },
        ],
    },
}
