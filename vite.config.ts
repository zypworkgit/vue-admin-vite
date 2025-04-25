import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";
import commonjs from 'vite-plugin-commonjs';
import requireTransform from 'vite-plugin-require-transform';
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
  resolve: {
    alias: {
      // 别名
      "@": path.resolve(__dirname, "src"), // 字符串的别名replace操作
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";` // 例如，添加全局变量
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://lianghj.top:8080/api/private/vi/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue({
      // template: {
      //   transformAssetUrls: {
      //     include: ['svg'] // 允许 SVG 作为组件导入
      //   }
      // }
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    commonjs(),
    requireTransform({ fileRegex: /\.js$|\.jsx$/ }),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
      logger: true,
      watchFiles: true, // 是否监听文件变化并实时重启服务
    }),
    createSvgIconsPlugin({
      // 配置选项
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')], // SVG 图标目录
      svgoOptions: true, // 启用 SVGO 压缩
    })
  ],
});
