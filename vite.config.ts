import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'

import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

import bodyParser from 'body-parser'
import mockServer from 'vite-plugin-mock-server'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/services/api', import.meta.url)),
      '@locales': fileURLToPath(new URL('./locales', import.meta.url))
    }
  },
  plugins: [
    vue(),
    mockServer({
      logLevel: 'info',
      mockRootDir: 'server-mock',
      middlewares: [bodyParser.json()]
    }),
    Components({
      dts: 'types/components.d.ts',
      resolvers: [NaiveUiResolver()]
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          '@vueuse/core': ['formatDate', 'useUrlSearchParams', 'useDebounceFn', 'useEventBus']
        },
        {
          '@iconify/vue': ['Icon']
        },
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
        }
      ],
      dts: 'types/auto-imports.d.ts',
      dirs: ['src/composables/**', 'src/stores/**', 'src/services/api/**'],
      vueTemplate: true
    }),
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: resolve(dirname(fileURLToPath(import.meta.url)), './locales/**')
    }),
    splitVendorChunkPlugin()
  ]
})
