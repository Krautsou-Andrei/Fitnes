import path from 'path';

import react from '@vitejs/plugin-react';
import svg from '@neodx/svg/vite';

import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
    return {
        base: command === 'serve' ? '/' : 'ClevertecFrontendLab/Krautsou-Andrei',
        plugins: [
            react(),
            svg({
                group: true,
                root: 'src/shared/ui/app-icon/assets',
                output: 'public/sprite',
                metadata: 'src/shared/ui/app-icon/sprite.h.ts',
                resetColors: {
                    exclude: [/^layout/, /^result/, /^review/],
                    replaceUnknown: 'var(--icon-color)',
                },
            }),
        ],
        server: {
            host: true,
            port: 3000,
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            },
        },
        resolve: {
            alias: {
                '@public': path.resolve(__dirname, 'public'),
                '@app': path.resolve(__dirname, 'src/app'),
                '@entities': path.resolve(__dirname, 'src/entities'),
                '@features': path.resolve(__dirname, 'src/features'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@widgets': path.resolve(__dirname, 'src/widgets'),
                '@shared': path.resolve(__dirname, 'src/shared'),
            },
        },
    };
});
