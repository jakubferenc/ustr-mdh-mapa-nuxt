// responsive
const gap = 32;
const tablet = 769;
const desktop = 960 + 2 * gap;
const widescreen = 1152 + 2 * gap;
const fullhd = 1344 + 2 * gap;
const mobile = tablet-1;

export default {
  globalTitle: 'MHD Mapa',
  appSlug: 'mdh-mapa',
  firebaseDatabase: {
    'rootObject': 'maps'
  },
  apiURL: undefined,
  appConfig: {
    mdh: {
      object: {
        types: {
          1: {
            "label": "Památníky",
            "slug": "pamatnik",
            "icon": "icon-object-pamatnik"
          },
          2: {
            "label": "Ulice",
            "slug": "ulice",
            "icon": "icon-object-ulice"
          },
          3: {
            "label": "Muzea",
            "slug": "muzeum",
            "icon": "icon-object-muzeum"
          },
          4: {
            "label": "Dokumenty",
            "slug": "dokument",
            "icon": "icon-object-dokument"
          },
          5: {
            "label": "Budovy",
            "slug": "budova",
            "icon": "icon-object-budova"
          },
          6: {
            "label": "Místa",
            "slug": "misto",
            "icon": "icon-object-misto"
          },
          7: {
            "label": "Umělecká díla",
            "slug": "artefakt",
            "icon": "icon-object-dokument"
          }
        }
      }
    },
    images: {
      object: {
        full: {
          width: 1920
        },
        thumbnail: {
          width: 218,
          height: 158
        },
        galleryThumbnail: {
          width: 743,
          height: 460
        }
      }
    },
    responsive: {
      desktop: 1024,
      widescreen: 1216
    },
    mapbox: {
      accessToken: "pk.eyJ1IjoiamFrdWJmZXJlbmMiLCJhIjoiY2tjbTNjbDI2MW01NzJ5czUzNGc0Y3FwNyJ9.bTpq3aGIwEIUqRkxlMOvCw"
    }
  },
  wordpressAPIURLWebsite: '',
  wordpressURLWebsite: '',
  netlifyURL: '',
  baseURL: '',
  responsive: {
    breakpoints: {
      mobile,
      tablet,
      desktop,
      widescreen,
      fullhd
    }
  }

};
