export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pizza',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },


  server: {
    port: process.env.PORT,
    host: '0.0.0.0',
  },

  target: 'static',

  env: {
    baseUrl: process.env.BASE_URL,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "~/assets/sass/app.sass"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/smoothscroll',
    { src: '@/plugins/vclickoutside.js', mode: 'client' },
    { src: '@/plugins/yandexmap.js', mode: 'client' },
    { src: '@/plugins/vmask.js', mode: 'client' },
    { src: '@/plugins/datepicker.js', mode: 'client' },
    { src: '@/plugins/vswipe.js', mode: 'client' },
    { src: '@/plugins/utils/api.service.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'v-wave/nuxt',
    'vue-scrollto/nuxt',
    'vue-ssr-carousel/nuxt',
    'portal-vue/nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },
}
