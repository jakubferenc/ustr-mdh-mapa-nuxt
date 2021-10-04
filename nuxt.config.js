import axios from "axios";
// import apiFactory from './factories';
import projectConfig from './project.config';

const dev = process.env.NODE_ENV !== 'production';

const $config = {dev, ...projectConfig};


export default {
  globalName: $config.appSlug,
  target: 'static', // default is 'server'
  ssr: true,
  components: true,
  publicRuntimeConfig: {...$config},
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://localhost:3000'
  },
  router: {
    trailingSlash: true,
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
    '@nuxtjs/style-resources'
  ],
  modules: [
  '@nuxtjs/proxy',
  '@nuxtjs/axios',
  '@nuxtjs/sentry',
  ['@nuxtjs/firebase', {
    config: {
      apiKey: "AIzaSyCHGOJyI-2-uRgnE3ujd3OLb-Vi4DPCWa0",
      authDomain: "mdh-mapa-1605133107720.firebaseapp.com",
      databaseURL: "https://mdh-mapa-1605133107720-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "mdh-mapa-1605133107720",
      storageBucket: "mdh-mapa-1605133107720.appspot.com",
      messagingSenderId: "843288321214",
      appId: "1:843288321214:web:ae2deff05f6a3f83fdd2ef",
      measurementId: "G-483TW6WQCJ"
    },
    services: {
      database: true, // initializes Firebase real-time database
    }
  }],
  ],
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
    '@/assets/scss/main.sass'
  ],
  styleResources: {
    sass: ['~assets/scss/main.sass'],
    hoistUseStatements: true
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
