import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "@typescript-eslint/eslint-plugin" // Asegúrate de que @typescript-eslint esté instalado
import tsParser from "@typescript-eslint/parser" // Importa el parser para TypeScript

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      "plugin:@typescript-eslint/recommended", // Recomendaciones para TypeScript
      "plugin:react/recommended", // Recomendaciones para React
      "plugin:react-hooks/recommended", // Recomendaciones para React Hooks
    ],
    files: ["**/*.{ts,tsx}"],
    parser: tsParser, // Usa el parser de TypeScript
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true, // Habilita el soporte para JSX
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tseslint, // Plugin para TypeScript
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect", // Auto-detecta la versión de React
      },
    },
  },
)
