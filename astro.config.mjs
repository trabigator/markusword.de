import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.markusword.de',
  output: 'static',
  adapter: vercel()
});
