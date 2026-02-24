// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap'
  ],
  devtools: {
    enabled: true
  },

  site: { 
    url: 'https://davidhrbacek.dev', 
    name: 'David Hrbáček' 
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    strategy: 'prefix_except_default', 
    defaultLocale: 'cs',
    locales: [
      {
        code: 'cs',
        iso: 'cs-CZ',
        name: 'Čeština',
        file: 'cs.json'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      }
    ],
    langDir: 'locales/', 
  }
})
