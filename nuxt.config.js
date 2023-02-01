import readingTime from 'reading-time';

const mdAnchorLevel = [2, 3];

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kama\'s Blog',
    htmlAttrs: {
      lang: 'zh-Hant',
    },
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Kama\'s Blog' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/reikama/favicon.ico' }],
  },

  publicRuntimeConfig: {
    mdAnchorLevel,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/vue-backtotop.js', ssr: false },
    // { src: '~plugins/vue-isotope.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/moment',
    '@nuxtjs/vuetify',
  ],

  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
      regular: true,
    },
  },

  moment: {},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/content',
  ],
  
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.readingTime = readingTime(document.text);
      }
    },
  },

  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'zh-CHT', iso: 'zh-TW', file: 'zh-CHT.json'},
      { code: 'zh-CHS', iso: 'zh-CN', file: 'zh-CHS.json'},
      { code: 'en', iso: 'en-US', file: 'en-US.json'},
      { code: 'ja', iso: 'ja-JP', file: 'ja-JP.json'},
    ],
    defaultLocale: 'zh-CHT',
    vueI18n: {
      legacy: false,
      fallbackLocale: 'zh-CHT',
    },
    lazy: true,
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root',
    alwaysRedirect: true,
  },

  markdownit: {
    use: [
      ['markdown-it-anchor', {
        level: mdAnchorLevel,
      }],
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // loading: false,
};
