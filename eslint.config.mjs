import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", ".pnpm-store/**", "out/**", "dist/**"]
  },
  ...nextVitals,
  ...nextTypescript
];

export default eslintConfig;
