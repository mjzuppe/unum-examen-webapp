// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://unumexamen.com',
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  integrations: [react(), tailwind(),tailwind({
    applyBaseStyles: false,
  })],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/fonts.css";`,
        },
      },
    },
  },
});