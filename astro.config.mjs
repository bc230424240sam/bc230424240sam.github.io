import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bc230424240sam.github.io',
  base: '/',
  output: 'static',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [sitemap()],
  devToolbar: {
    enabled: false
  },
  build: {
    format: 'file'
  }
});
