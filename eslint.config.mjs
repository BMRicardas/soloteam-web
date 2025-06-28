import { defineConfig } from "eslint/config";
import { FlatCompat } from "@eslint/eslintrc";
import pluginNext from "@next/eslint-plugin-next";
import unicorn from "eslint-plugin-unicorn";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default defineConfig([
  ...compat.extends("next", "prettier"),
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      pluginNext,
      unicorn,
    },
    rules: {
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "function-declaration",
          unnamedComponents: "arrow-function",
        },
      ],
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
        },
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          checkProperties: true,
          checkVariables: true,
          replacements: {
            props: false, // Allow 'props' as a common abbreviation
            ref: false, // Allow 'ref' for React refs
            fn: false, // Allow 'fn' for function
            err: false, // Allow 'err' for error
          },
        },
      ],
    },
  },
  {
    files: [
      "src/app/**/{page,layout,not-found,error,global-error,route,template,default,loading}.tsx",
    ],
    rules: {
      ...unicorn.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,
      "react/function-component-definition": "off",
    },
  },
]);
