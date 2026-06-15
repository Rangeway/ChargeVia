import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chargevia.net',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  }
});
