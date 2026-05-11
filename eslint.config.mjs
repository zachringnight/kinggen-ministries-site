import nextConfig from "eslint-config-next";
import prettier from "eslint-config-prettier";

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      // Disable font warning for static export builds (next/font requires network access during build)
      "@next/next/no-page-custom-font": "off",
    },
  },
  prettier,
];

export default eslintConfig;
