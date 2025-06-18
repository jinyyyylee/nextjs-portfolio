import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
    // "plugin:prettier/recommended" // 필요시 주석 해제
  ),
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      // "prettier/prettier": "warn", // 필요시 주석 해제
    },
  },
];
