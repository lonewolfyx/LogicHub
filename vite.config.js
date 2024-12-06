import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

// https://vite.dev/config/
export default defineConfig({
    define: {
        "process.env.IS_PREACT": JSON.stringify("true"),
    },
    plugins: [
        vue(),
        AutoImport({
            // resolvers: [ArcoResolver()],
            imports: [
                "vue",
                "pinia",
            ],
            dts: "auto-import/auto-imports.d.ts",
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        port: 2048,
        host: "0.0.0.0",
        open: true,
    },
});
