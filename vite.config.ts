import {resolve} from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/guide/build.html#library-mode

export default defineConfig({
    root: './',
    base: './',
    server: {
        open: true,
        port: 5555,
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.tsx'),
            name: 'ui-kit',
            fileName: 'ui-kit',
        },
        outDir: './dist/',
    },
    plugins: [dts()],
});