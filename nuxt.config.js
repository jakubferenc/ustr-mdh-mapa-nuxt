import axios from "axios";
// import apiFactory from './factories';
import projectConfig from './project.config';

const dev = process.env.NODE_ENV !== 'production';

const config = {dev, ...projectConfig};


export default {
  globalName: config.appSlug,
  target: 'static', // default is 'server'
  ssr: true,
  components: true,
  publicRuntimeConfig: {...config},
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
    ['@nuxt/image', {
      // The screen sizes predefined by `@nuxt/image`:
      provider: 'static',
      screens: config.responsive.breakpoints,
    }],
    "@nuxtjs/svg",
    ['@nuxtjs/style-resources', {
      // your settings here
      sass: [
        '~assets/scss/defs/_all.sass',
      ],
      scss: [],
      hoistUseStatements: true  // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
    }],
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
    '@/assets/scss/main.sass',
    { src: 'leaflet.markercluster/dist/MarkerCluster.css', lang: 'css' },
    { src: 'leaflet.markercluster/dist/MarkerCluster.Default.css', lang: 'css' }
  ],
  plugins: [
    { src: '~plugins/vue-leaflet.js', ssr: false },
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
    link: [{
      rel:'stylesheet',
      href:'//unpkg.com/leaflet/dist/leaflet.css'
    },
    {
      rel:'stylesheet',
      href:'//api.mapbox.com/mapbox-gl-js/v2.3.0/mapbox-gl.css'
    }],
  },

};
