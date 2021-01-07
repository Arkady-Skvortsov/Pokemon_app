export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server', //SSR, "static" - usually websites

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'pockemon_app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/pockemon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  styleResources: {
    scss: ["~/components/styles/styles.scss"]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],
   
  //Не забыть про sass-loader and node-sass 
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-material-design-icons'
  ],

  loading: {
    color: "orange"
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  config: { //Firebase
    apiKey: "AIzaSyA6ZY_rBfl_zBbJKivL_hcTOFZkUFk3X-Y",
    authDomain: "pokemon-app-4d75d.firebaseapp.com",
    projectId: "pokemon-app-4d75d",
    storageBucket: "pokemon-app-4d75d.appspot.com",
    messagingSenderId: "39074412332",
    appId: "1:39074412332:web:cd8dcba7cb658ef7e2de89"
  }
}
