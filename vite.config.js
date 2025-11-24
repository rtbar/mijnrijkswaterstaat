import { defineConfig } from 'vite';

export default defineConfig({
    base: '/sinterklaas_chatbot/',
    build: {
        outDir: 'docs',
    },
    server: {
        host: true, // Listen on all local IPs
        port: 5173, // Try to stick to 5173
        strictPort: false, // But allow fallback if busy
    }
});

