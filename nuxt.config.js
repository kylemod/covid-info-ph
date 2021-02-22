export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Covid Info PH',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'covid info', name: 'covid info ph', content: 'covid informations' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'eruda/eruda.js' },
      { src: 'eruda-dom/eruda-dom.js' },
      { src: 'eruda.init.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-tailwind.js',
    '~/plugins/vue-countdown.js',
    '~/plugins/fontawesome.js',
    { src: '~/plugins/vue-numerals.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  
  target: 'static',
  
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  },
  
  router: {
    linkExactActiveClass: 'nav-active'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
    '@nuxtjs/color-mode'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],
  
  axios: {},
  
  colorMode: {
    classSuffix: '',
    preference: 'light'
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  generate: {
    // choose to suit your project
    interval: 2000,
  }
}
