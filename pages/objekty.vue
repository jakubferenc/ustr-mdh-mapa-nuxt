<template lang="pug">
 main


  .main-container(data-component="map-detail-view")

    //- +filter({
    //- "types": [1, 2, 3, 4, 5],
    //- "layers": {
    //-     "Památníky a muzea revolučního hnutí": {
    //-       "color": "hsl(0, 60%, 82%)",
    //-       "description": "Vrstva zobrazující instituce, jejichž výstavní, sbírkoví a popřípadě výzkumná činnost se zaměřovala na témata zapadající do celkového pojetí dějin revolučních tradic. Měla výraznou ambici toto svébytné pojetí dějin popularizovat jako celek na regionální či státní úrovni"
    //-     },
    //-     "Muzea a památníky spojené s klíčovou událostí či s konkrétním dějinným obdobím": {
    //-       "color": "hsl(30, 60%, 82%)",
    //-       "description": "Instituce zaměřené na konkrétní události důležité v příběhu dějin dělnického hnutí či dějin revolučních tradic. Událost je v tomto ohledu pojímána široce jako krátký akt jednání omezeného počtu osob, ale i přesně ohraničené dějinné období."
    //-     },
    //-     "Muzea a památníky spojené s jednotlivými osobnostmi": {
    //-       "color": "hsl(60, 60%, 82%)",
    //-       "description": "Instituce věnované životu konkrétní osobnosti, která byla dobově považována za důležitého aktéra dějin. Její život byl pro chod instituce klíčovým tématem a okolnosti dějin byly zmiňovány jen z hlediska kontextu"
    //-     },
    //-     "Podniková a tovární muzea": {
    //-       "color": "hsl(90, 60%, 82%)",
    //-       "description": "Vrstva zobrazující zvláštní expozice přímo v továrnách, nebo navázané na konkrétní podniky. Jejichž hlavním cílem bylo tematizovat a popularizovat dějiny továrny jako místa třídních bojů a budování socialismu, jejichž příběh je inherentně spjatý s revoluční tradicí"
    //-     },
    //-     "Výstavy marxistického výkladu československých dějin": {
    //-       "color":"hsl(120, 60%, 82%)",
    //-       "description": ""
    //-     }
    //-   },
    //- })

    .main-content(data-component="list-objects-container")

      .section.section-padding(data-component="section")

        h1.typo-section-title.is-section-title podívejte se na objekty sbírky mdh

        h2.typo-subtitle.is-section-title Zde bude text, který stručně a jasně poskytne shrnutí toho, co uživatelé na jednotlivých mapách najdou a co s nimi mohou dělat. Nejde o to zde popsat technické aspekty map, ale právě ony uživatelské úkony, jenž mohou být pro uživatele zajímavé.

        .list-in-section(data-component="list-objects")

          .cards-container

            //- - let objects = []

            //- each key in Object.keys(maps)

            //-   - let thisMapObjects = maps[key].features.filter(item => item.images.length > 0 && item.properties.description != '')
            //-   - thisMapObjects = thisMapObjects.map((item) => {item.mapSafeSlug = maps[key].safeSlug; item.mapSettings = maps[key].mapSettings; return item;})

            //-   - objects = [...objects, ...thisMapObjects]

            //- each object in objects

            //-   +object-card(object, {safeSlug: object.mapSafeSlug, mapSettings: object.mapSettings})

          a.button.button-more(href="#") Načíst další objekty (neaktivní)




      section.section.section-padding.alt-bg(data-component="section")


        <FooterAside />

</template>
<script>
export default {


    computed: {

    },

    data() {
      return {
        title: `Objekty`,

      }
    },

    head () {
      return {
        title: `${this.title} — ${this.$config.globalTitle}`,
        htmlAttrs: {
          class: ''
        }
      }
    }

}
</script>
