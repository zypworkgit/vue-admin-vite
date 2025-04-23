import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";
import commonjs from 'vite-plugin-commonjs';
import requireTransform from 'vite-plugin-require-transform';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 别名
      "@": path.resolve(__dirname, "src"), // 字符串的别名replace操作
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    commonjs(),
    requireTransform({ fileRegex: /\.js$|\.jsx$/ })
  ],
});
