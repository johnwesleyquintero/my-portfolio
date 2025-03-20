import { FlatCompat } from "@eslint/eslintrc";
import astro from "eslint-plugin-astro";
import { defineConfig } from "eslint-define-config";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

const config = defineConfig([
  {
    files: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      astro,
    },
    rules: {
      "no-undef": "off",
    },
    // extends: ["eslint:recommended", "plugin:astro/recommended"],
  },
  {
    files: ["*.astro"],
    plugins: {
      astro,
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    extends: ["plugin:astro/recommended"],
  },
  {
    files: ["./src/**/*.{ts,tsx}"],
    parserOptions: {
      project: "./tsconfig.json",
    },
    ...compat.config({
      extends: ["plugin:@typescript-eslint/recommended"],
    }),
  },
]);

export default config;
