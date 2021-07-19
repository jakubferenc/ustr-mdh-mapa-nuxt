import axios from "axios";

const apiURL = undefined;

export default {
  /*env: {
    baseUrl: process.env.BASE_URL || 'https://localhost:8000'
  },
  server: {
    port: 8000,
    host: 'localhost',
    timing: false
  },*/


  publicRuntimeConfig: {
    apiURL: apiURL
  },
  render: {
    static: {
      setHeaders(res) {
        res.setHeader('X-Frame-Options', 'ALLOWALL');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      }
    }
  },
  generate: {
    async routes() {


    }
  },
  build: {
    loaders: {
      scss: { sourceMap: true },
      vue: { cacheBusting: false },
    }
  },
  buildModules: [
    "@nuxtjs/svg",
    '@nuxtjs/style-resources',
  ],
  globalName: 'databaze-poslancu',
  target: 'static', // default is 'server'
  ssr: true,
  components: true,
  publicRuntimeConfig: {
    globalTitle: 'Databáze poslanců.cz'
  },
  modules: ['@nuxtjs/proxy',  '@nuxtjs/axios', '@nuxtjs/sentry'],
  sentry: {
    dsn: 'https://c7d5d20c4f9448c58b992c3d0dcd284d@o621712.ingest.sentry.io/5870935', // Enter your project's DSN here
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    },
  },
  axios: {
    proxy: true
  },
  css: [

  ],
  styleResources: {
    sass: ['']
  },
  plugins: [
  ],
  proxy: {
  },
  head: {
    title: 'MDH Mapa',
    htmlAttrs: {
      lang: 'cs',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

};
