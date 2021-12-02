import axios from "axios";
import projectConfig from './project.config';
import apiFactory from "./utils/factories.js";

import firebase from 'firebase/app';
import 'firebase/database';

const dev = process.env.NODE_ENV !== 'production';

const config = {dev, ...projectConfig};

let firebaseApp = null;

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

  hooks: {
    generate: {
      // async done(builder) {
      //   const appModule = await import('./.nuxt/firebase/app.js')
      //   const { session } = await appModule.default(
      //     projectConfig.firebaseConfig.config,
      //     {
      //       res: null,
      //     }
      //   )
      //   try {
      //     session.database().goOffline()
      //   } catch (e) { }
      //   try {
      //     session.firestore().terminate()
      //   } catch (e) { }
      // },
    },
  },

  generate: {
    async routes() {

      let routes = [];

      try {

        firebaseApp = firebase.initializeApp(projectConfig.firebaseConfig.config);
        const db = firebaseApp.database();

        let mapsRes = await apiFactory.getAllMapsFactory(db); // @return object of objects, not array!

        const mapsRoutes = Object.keys(mapsRes).map(mapaSafeSlug => {

          const mapa = mapsRes[mapaSafeSlug];
          // load maps

          return {
            route: `/mapa/${mapa.slug}/`,
            payload: mapa // thanks to the payload, we are caching results for the subpage here
          };

        });

        const mapsRoutesDetail = Object.keys(mapsRes).map(mapaSafeSlug => {

          const mapa = mapsRes[mapaSafeSlug];
          // load maps

          return {
            route: `/mapa/${mapa.slug}/detail/`,
            payload: mapa // thanks to the payload, we are caching results for the subpage here
          };

        });

        routes = [...mapsRoutes, ...mapsRoutesDetail];


        return routes;



      } catch (err) {
        console.warn(err);
      }


    }
  },
  build: {
    loaders: {
      scss: { sourceMap: true },
      vue: { cacheBusting: false },
    }
  },
  buildModules: [
    ['@nuxtjs/firebase', projectConfig.firebaseConfig],
    // ['@nuxt/image', {
    //   // The screen sizes predefined by `@nuxt/image`:
    //   provider: 'cloudinary',
    //   screens: config.responsive.breakpoints,
    //   baseURL: 'https://res.cloudinary.com/assemblage-cz/image/upload/'
    // }],
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
  cloudinary: {
    cloudName: 'assemblage-cz',
    apiKey: '941334191397495',
    apiSecret: 'CqpgLculo-290li5M5k-5jASFrk',
    secure: false,
    useComponent: true,
    privateCDN: false,
  },
  modules: [
  ['@nuxtjs/cloudinary'],
  '@nuxtjs/sentry',
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
