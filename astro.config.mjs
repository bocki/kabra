import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  site: 'https://katherinabraschel.com',
  integrations: [tailwind(), alpinejs()],
  vite: {
    plugins: [yaml()]
  }
});