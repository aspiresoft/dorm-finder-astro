import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://aspiresoft.github.io',
    base: '/dorm-finder-astro',
    integrations: [tailwind()],
});
