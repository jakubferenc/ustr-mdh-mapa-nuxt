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
  firebaseConfig: {
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
  },
  firebaseDatabase: {
    'rootObject': 'maps'
  },
  apiURL: undefined,
  obsah: {
    mapy: {
      sectionTitle: 'Zde bude text, který stručně a jasně poskytne shrnutí toho, co uživatelé na jednotlivých mapách najdou a co s nimi mohou dělat. Nejde o to zde popsat technické aspekty map, ale právě ony uživatelské úkony, jenž mohou být pro uživatele zajímavé.',
    },
  },
  appConfig: {
    mdh: {
      object: {
        types: {
          1: {
            "label": "Památníky",
            "slug": "památníky",
            "safeSlug": "pamatnik",
            "icon": "icon-object-pamatnik",
            "component": "IconObjectPamatnik",
          },
          2: {
            "label": "Ulice",
            "slug": "ulice",
            "safeSlug": "ulice",
            "icon": "icon-object-ulice",
            "component": "IconObjectUlice",
          },
          3: {
            "label": "Muzea",
            "slug": "muzea",
            "safeSlug": "muzeum",
            "icon": "icon-object-muzeum",
            "component": "IconObjectMuzeum",
          },
          4: {
            "label": "Dokumenty",
            "slug": "dokumenty",
            "safeSlug": "dokument",
            "icon": "icon-object-dokument",
            "component": "IconObjectDokument",
          },
          5: {
            "label": "Budovy",
            "slug": "budovy",
            "safeSlug": "budova",
            "icon": "icon-object-budova",
            "component": "IconObjectBudova",
          },
          6: {
            "label": "Místa",
            "slug": "místa",
            "safeSlug": "misto",
            "icon": "icon-object-misto",
            "component": "IconObjectMisto",
          },
          7: {
            "label": "Umělecká díla",
            "slug": "umělecká díla",
            "safeSlug": "artefakt",
            "icon": "icon-object-dokument",
            "component": "IconObjectUmeleckeDilo",
          },
          8: {
            "label": "Události",
            "slug": "události",
            "safeSlug": "udalost",
            "icon": "icon-object-udalost",
            "component": "IconObjectUdalost",
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
      accessToken: "pk.eyJ1IjoiamFrdWJmZXJlbmMiLCJhIjoiY2tjbTNjbDI2MW01NzJ5czUzNGc0Y3FwNyJ9.bTpq3aGIwEIUqRkxlMOvCw",
      zoomNumberOnDetail: 16,
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