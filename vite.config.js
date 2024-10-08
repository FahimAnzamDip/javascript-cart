import { defineConfig } from 'vite';

export default defineConfig({
    publicDir: 'public',
    root: './',
    build: {
        outDir: 'dist',
    },
    plugins: [],
    base: '/javascript-cart/',
});
