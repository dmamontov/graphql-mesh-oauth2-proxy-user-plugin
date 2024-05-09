import globals from "globals";
import eslint from "@eslint/js";
import parserTs from "@typescript-eslint/parser";
import pluginTs from "@typescript-eslint/eslint-plugin";
import pluginLove from "eslint-config-love";
import pluginImport from "eslint-plugin-import";
import {configs as pluginSonar} from "eslint-plugin-sonar";
import pluginUnicorn from "eslint-plugin-unicorn";
import pluginPrettier from "eslint-plugin-prettier/recommended";

export default [
    {
        rules: eslint.configs.recommended.rules,
        ignores: ["node_modules/**/*", ".bob/**/*", "dist/**/*"],
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        ignores: ["node_modules/**/*", ".bob/**/*", "dist/**/*"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                ...globals.browser,
                ...globals.es2024,
                ...globals.node,
            },
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
            parser: parserTs,
        },
        plugins: {
            "@typescript-eslint": pluginTs,
            import: pluginImport,
            sonar: pluginSonar.recommended,
            unicorn: pluginUnicorn,
            ...pluginPrettier.plugins
        },
        settings: {
            "import/resolver": {
                typescript: true,
                node: true
            }
        },
        rules: {
            ...pluginTs.configs.recommended.rules,
            ...pluginLove.rules,
            ...pluginImport.configs.recommended.rules,
            ...pluginImport.configs.typescript.rules,
            ...pluginUnicorn.configs.recommended.rules,
            ...pluginPrettier.rules,
            "no-console": "error",
            "indent": "off",
            "no-eval": "off",
            "no-use-before-define": "off",
            "@typescript-eslint/restrict-plus-operands": "off",
            "@typescript-eslint/ban-types": "warn",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-use-before-define": "off",
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/ban-ts-ignore": "off",
            "@typescript-eslint/return-await": "error",
            "@typescript-eslint/naming-convention": "off",
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/prefer-nullish-coalescing": "off",
            "@typescript-eslint/strict-boolean-expressions": "off",
            "@typescript-eslint/no-unsafe-argument": "off",
            "@typescript-eslint/consistent-type-assertions": "off",
            "@typescript-eslint/no-for-in-array": "off",
            "@typescript-eslint/indent": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/no-implied-eval": "off",
            "import/no-nodejs-modules": "error",
            "import/no-extraneous-dependencies": [
                "error"
            ],
            "sonarjs/cognitive-complexity": "off",
            "unicorn/no-null": "off",
            "unicorn/prefer-code-point": "off",
            "unicorn/numeric-separators-style": "warn",
            "unicorn/prefer-export-from": "off",
            "unicorn/prevent-abbreviations": "off",
            "unicorn/consistent-function-scoping": [
                "error",
                {
                    "checkArrowFunctions": false
                }
            ],
            "unicorn/no-array-reduce": "off",
            "unicorn/filename-case": "off",
            "unicorn/explicit-length-check": "off",
            "unicorn/prefer-spread": "off",
            "unicorn/catch-error-name": "off",
            "unicorn/prefer-optional-catch-binding": "off",
            "unicorn/prefer-array-index-of": "off",
            "unicorn/prefer-array-some": "off",
            "unicorn/no-array-callback-reference": "off",
            "unicorn/no-array-for-each": "off",
            "unicorn/no-await-expression-member": "off",
            "unicorn/no-lonely-if": "off",
            "unicorn/no-useless-undefined": "off",
            "unicorn/prefer-ternary": "off",
            "unicorn/prefer-object-from-entries": "off",
            "unicorn/require-array-join-separator": "off",
            "unicorn/better-regex": "off",
            "unicorn/prefer-add-event-listener": "off",
            "unicorn/prefer-array-find": "off",
            "unicorn/prefer-date-now": "off",
            "unicorn/prefer-number-properties": "off",
            "unicorn/no-empty-file": "off",
            "unicorn/no-hex-escape": "off",
            "unicorn/escape-case": "off",
            "unicorn/prefer-string-slice": "off",
            "unicorn/prefer-dom-node-append": "off",
            "unicorn/prefer-query-selector": "off",
            "unicorn/prefer-dom-node-text-content": "off",
            "unicorn/no-abusive-eslint-disable": "off",
            "unicorn/consistent-destructuring": "off",
            "unicorn/no-object-as-default-parameter": "off",
            "unicorn/prefer-switch": "off",
            "unicorn/prefer-string-starts-ends-with": "off",
            "unicorn/no-array-push-push": "off",
        },
    },
];