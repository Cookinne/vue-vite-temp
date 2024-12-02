import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import ElementPlus from 'unplugin-element-plus/vite';

const userConfig: UserConfig = {
  css: {
    postcss: {
      plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
    },
  },
  resolve: {
    alias: {
      '~views/': `${path.resolve(__dirname, './src/views')}/`,
      '~icons/logo/*': `${path.resolve(__dirname, './src/assets/logo')}/`,
      '~icons/svg/*': `${path.resolve(__dirname, './src/assets/svg')}/`,
      '~/': `${path.resolve(__dirname, './src')}/`,
    },
  },
  server: {
    host: '0.0.0.0',
    port: 9527,
    proxy: {
      '/api': {
        target: 'http://192.168.1.133:5090',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
    watch: {
      ignored: ['./config/*', './locales/*', './src/components.d.ts'],
    },
  },
  esbuild: {
    pure: ['console.log'],
  },
  optimizeDeps: {
    esbuildOptions: {
      // define: {
      //   global: 'globalThis',
      // },
      plugins: [],
    },
  },
  build: {
    outDir: 'dist-web',
    assetsDir: 'assets',
    sourcemap: process.env.NODE_ENV != 'production',
    manifest: true,
    chunkSizeWarningLimit: 768,
    rollupOptions: {
      plugins: [
        // NodeGlobalsPolyfillPlugin({
        //   process: true,
        //   buffer: true,
        // }),
      ],

      output: {
        manualChunks: {
          ethers: ['ethers'],
          vue: ['vue', 'vue-router'],
        },
      },
    },
  },

  plugins: [
    vue(),
    Icons({
      scale: 1.2,
      autoInstall: true,
      compiler: 'vue3',
      customCollections: {
        logo: FileSystemIconLoader('./src/assets/logo', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
        coin: FileSystemIconLoader('./src/assets/coins', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
        icon: FileSystemIconLoader('./src/assets/icon', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
        svg: FileSystemIconLoader('./src/assets/svg', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
      },
      iconCustomizer(collection, icon, props) {
        if (['logo', 'coin', 'icon'].includes(collection)) {
          props.class = 'icon h-6 w-6 inline align-text-bottom';
        }
      },
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'icon',
        }),
      ],
      dts: 'src/components.d.ts',
      dirs: ['src/views/components/'],
    }),
    ElementPlus(),
  ],
  define: {
    __APP_VERSION__: new Date().getTime(),
  },
};

export default defineConfig(({ command }) => {
  return userConfig;
});
