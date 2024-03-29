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
      async done(builder) {

        firebaseApp = firebaseApp || firebase.initializeApp(projectConfig.firebaseConfig.config);
        try {
          firebaseApp.database().goOffline();
        } catch (e) { }
      },
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
    html:{
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      },
    },
    loaders: {
      scss: { sourceMap: true },
      vue: { cacheBusting: false },
    }
  },
  buildModules: [
    ['@nuxtjs/firebase', projectConfig.firebaseConfig],
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
        content: 'Aplikace Mapa projektu Muzea dělnického hnutí'
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
