import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      meta: [
        {
          name: 'naive-ui-style'
        }
      ]
    }
  },
  ssr: false,

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_LANDING_API_URL,
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', iso: 'EN', name: 'English', file: 'en.ts' },
      { code: 'ru', iso: 'RU', name: 'Russian', file: 'ru.ts' },
      { code: 'de', iso: 'DE', name: 'Germany', file: 'de.ts' }
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  }
})
