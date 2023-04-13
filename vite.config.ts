import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";
import { wrapperEnv } from "./src/utils/getEnv";
import viteCompression from "vite-plugin-compression";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  // 各个 .env 文件中自定义的环境参数合并后的对象
  const env = loadEnv(mode, process.cwd());
  // viteEnv 为处理后的环境对象
  const viteEnv = wrapperEnv(env);

  return {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
      host: "0.0.0.0",
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      proxy: {
        // "/api": {
        //   target: "http://172.16.1.44:35021/api/system/",
        //   rewrite: (path) => path.replace(/^\/api/, ""),
        // },
      },
    },
    plugins: [
      vue(),
      // gzip压缩 生产环境生成 .gz 文件
      viteEnv.VITE_BUILD_GZIP &&
        viteCompression({
          verbose: true,
          disable: false,
          threshold: 10240,
          algorithm: "gzip",
          ext: ".gz",
        }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // 生产环境去除 console 和 debugger
    esbuild: {
      drop: viteEnv.VITE_DROP_CONSOLE ? ["console", "debugger"] : [],
    },
  };
})
