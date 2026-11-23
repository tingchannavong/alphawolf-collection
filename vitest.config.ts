/// <reference types="vitest" />
import { getViteConfig } from "astro/config";
import { defineConfig } from "vitest/config";

export default defineConfig({
  ...getViteConfig({}),
  test: {
    environment: "happy-dom",
    include: ["src/**/*.{test,spec}.{ts,tsx}", "tests/**/*.{test,spec}.{ts,tsx}"],
  },
});