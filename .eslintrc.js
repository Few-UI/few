// https://eslint.orgc/docs/rules/
module.exports = {
    rules: {
        'array-bracket-spacing': [ 'error', 'always', { 'singleValue': true } ],
        // 'block-scoped-var': 2,
        'block-spacing': [ 'error', 'always' ],
        'brace-style': [ 'warn', '1tbs', { "allowSingleLine": true } ],
        'camelcase': 0,
        'capitalized-comments': 0,
        'class-methods-use-this': 2,
        'comma-dangle': [ 'error', 'never' ],
        'comma-spacing': [ 'error', { before: false, after: true } ],
        'comma-style': [ 'error', 'last' ],
        'complexity': [ 'warn', 25 ],
        // 'computed-property-spacing': [ 'warn', 'always' ],
        'consistent-this': [ 'warn', 'self' ],
        'curly': 2,
        'default-case': 0,
        'dot-location': [ 'error', 'property' ],
        'dot-notation': 2,
        'eol-last': 2,
        'eqeqeq': 2,
        'func-call-spacing': [ 'error', 'never' ],
        'func-name-matching': [ 'warn', 'always' ],
        // 'func-names': [ 'warn', 'never' ], // TODO should be error
        // 'func-style': [ 'warn', 'declaration' ],
        'guard-for-in': 0,
        // 'id-length': [ 'error', { 'min': 2, 'exceptions': [ 'i', 'j', 'x', _' ] } ],
        // 'id-match': [ 'error', 'regex' ], // TODO determine regex for variable & function names
        // 'indent': [ 'warn', 4 ], // TODO should be enabled & error if we have consistent formatter
        'jsx-quotes': [ 'error', 'prefer-single' ],
        // 'keyword-spacing': [ 'warn', { before: true, after: false, overrides: { else: { after: true }, return: { after: true } } } ],
        'line-comment-position': 0,
        // 'linebreak-style': [ 'warn', 'unix' ], // This causes issues with developers. Handled by DMS.
        'lines-around-comment': 0,
        'lines-around-directive': [ 'off', 'never' ],
        'max-depth': [ 'error', 10 ],
        'max-len': [ 'error', {
            code: 205,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreTrailingComments: true,
            ignoreUrls: true
        } ],
        'max-lines': [ 2, { max: 1000, skipComments: true, skipBlankLines: true } ],
        'max-nested-callbacks': [ 'error', 6 ],
        'max-params': 0,
        'max-statements': 0,
        'max-statements-per-line': [ 'error', { max: 2 } ],
        'multiline-ternary': 0,
        'new-cap': 1, // TODO should be error (2)
        'new-parens': 2,
        'newline-after-var': 0,
        'newline-before-return': 0,
        // 'newline-per-chained-call': 1, // TODO should be error (2)
        'no-alert': 2,
        'no-array-constructor': 2,
        'no-await-in-loop': 2,
        'no-bitwise': 1,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-compare-neg-zero': 2,
        'no-cond-assign': 2,
        'no-console': 1, // TODO should be error (2)
        'no-constant-condition': 2,
        'no-continue': 0,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-div-regex': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-else-return': 2,
        'no-empty': 2,
        'no-empty-character-class': 2,
        'no-empty-function': 1, // TODO should be error (2)
        'no-empty-pattern': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-ex-assign': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-label': 2,
        'no-extra-parens': 2,
        'no-extra-semi': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-func-assign': 2,
        'no-global-assign': 2,
        'no-implicit-coercion': 2,
        'no-implicit-globals': 1,
        'no-implied-eval': 2,
        'no-inline-comments': 0,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-invalid-this': 1,
        'no-irregular-whitespace': 2,
        'no-iterator': 2,
        'no-lonely-if': 0, // Reports false positives
        'no-multi-assign': 1,
        'no-multi-str': 2,
        'no-multiple-empty-lines': 2,
        'no-negated-condition': 0,
        'no-nested-ternary': 0,
        'no-new-object': 0,
        'no-obj-calls': 2,
        'no-plusplus': 0,
        'no-proto': 2,
        'no-prototype-builtins': 0,
        'no-redeclare': 1, // TODO should be error (2)
        'no-regex-spaces': 2,
        'no-restricted-globals': 2,
        'no-restricted-syntax': 2,
        'no-script-url': 2,
        'no-sequences': 1,
        'no-sparse-arrays': 2,
        'no-tabs': 2,
        'no-template-curly-in-string': 1,
        'no-trailing-spaces': [ 'error', { 'ignoreComments': true } ],
        'no-ternary': 0,
        'no-undef': 2,
        'no-underscore-dangle': 0,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 2,
        'no-unneeded-ternary': 2,
        'no-unused-vars': "off",
        '@typescript-eslint/no-unused-vars': [ 'warn', {
            'varsIgnorePattern': '^h$',
            'argsIgnorePattern': '^h$'
        } ],
        'no-useless-escape': 1,
        // 'no-use-before-define': [ 'warn', { functions: false, classes: true } ],
        'no-whitespace-before-property': 2,
        'no-with': 2,
        'nonblock-statement-body-position': [ 'error', 'below' ],
        // 'object-curly-newline': [ 'warn', { minProperties: 1 } ],
        'object-curly-spacing': [ 'error', 'always' ],
        'object-property-newline': 0,
        'one-var': [ 'warn', 'never' ], // TODO should be error
        'one-var-declaration-per-line': [ "error", "initializations" ],
        'operator-assignment': [ 'error', 'always' ],
        // 'operator-linebreak': [ 'warn', 'before' ],
        'padded-blocks': [ 'error', 'never' ],
        'quote-props': [ 'error', 'as-needed' ],
        'quotes': [ 'error', 'single' ],
        'require-jsdoc': 1, // TODO should be error (2)
        'require-yield': 2,
        'semi': [ 'error', 'always' ],
        'semi-spacing': 2,
        'sort-keys': 0,
        'sort-vars': 0,
        'space-before-blocks': [ 'error', 'always' ],
        'space-before-function-paren': [ 'warn', 'never' ],
        'space-in-parens': [ 'error', 'always' ],
        'space-infix-ops': 2,
        'space-unary-ops': 2,
        'spaced-comment': 0,
        'strict': 0, // TODO should be error (2)
        'template-tag-spacing': [ 'error', 'always' ],
        'unicode-bom': [ 'error', 'never' ],
        'use-isnan': 2,
        'valid-jsdoc': [ 'warn', { 'requireReturn': false, 'requireReturnType': false, 'requireParamType': false, 'requireParamDescription': true, 'requireReturnDescription': true } ],
        'valid-typeof': 2,
        'wrap-regex': 0,
        "react/display-name": [ 'warn', { "ignoreTranspilerName": true }],
        "react/react-in-jsx-scope": "off"
    },
    globals: {
        define: 'readonly'
    },
    env: {
        browser: true,
        amd: true,
        es6: true
    },
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        'allowImportExportEverywhere': true,
        ecmaFeatures: {
            jsx: true,
            impliedStrict: false
        }
    },
    settings: {
        jsdoc: {
            mode: 'typescript'
        },
        react: {
            version: "detect"
        }
    }
};
