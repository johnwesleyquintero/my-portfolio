// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  output: "server",
  adapter: netlify(),
  publicDir: 'public',
  outDir: 'dist',
  server: {
    host: '0.0.0.0',
    port: 4321,
    open: true,
  }
});
