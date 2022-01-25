// responsive
const gap = 32;
const tablet = 769;
const desktop = 960 + 2 * gap;
const widescreen = 1152 + 2 * gap;
const fullhd = 1344 + 2 * gap;
const mobile = tablet-1;

export default {
  globalTitle: 'Muzeum dělnického hnutí — Mapa',
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
      projectText: 'Tato sada interaktivních map je výsledkem bádání ve fondech tzv. muzea dělnického hnutí a v dalších archivních fondech. Jednotlivé mapy vizualizují dějinná témata, jež byla podstatná pro kulturní politiku v Československu v období 1948-1989. Kromě jednotlivých muzeí, památníků a artefaktů mapy zachycují i dynamiku našeho vzpomínání. Objevujte s námi místa paměti, na která postupně zapomínáme.',
      sectionTitle: 'Na jednotlivých interaktivních mapách najdete objekty, které lze třídit pomocí typu a kategorie. Můžete si zobrazit všechny objekty najednou, nebo si vytřídit ty, které chcete. Mapy dále pro uživatele nabízí tři způsoby pohledu na data. Lze si zobrazit pouze objekty, pouze mapu, anebo vše dohromady.',
      aboutText: 'Mapa vznikla v rámci projektu Ministerstva kultury ČR NAKI II (DG18P02OVV045) – Muzeum dělnického hnutí v&nbsp;21. století. Prezentace práce s&nbsp;muzejní sbírkou doby státního socialismu a&nbsp;způsoby užití jejího materiálu k&nbsp;potřebám odborné a široké veřejnosti.',
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
