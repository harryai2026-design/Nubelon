import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://nubelon.com',
  base: '/Nubelon',
  i18n: { defaultLocale: 'en', locales: ['en', 'ar', 'zh'], routing: { prefixDefaultLocale: true } }
});
