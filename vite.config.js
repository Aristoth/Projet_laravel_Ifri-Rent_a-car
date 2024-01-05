// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel(),
    ],
    build: {
        outDir: 'public/build',
        manifest: true,
    },
});
