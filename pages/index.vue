<template lang="pug">

  .page

    .hero-box.homepage.section-padding(data-component="hero-box")

      .title-container.columns

        .column.is-half-desktop
          h1.typo-main-title Aplikace MDH Mapa
          p.typo-subtitle Zde bude krátké a jasné představení aplikace,pro koho aplikace je určena a co uživatelé v aplikaci najdou. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

          a.button(href="about-us.html") Více o projektu


      .footer-container

        .columns.is-mutiline-mobile.is-desktop

          .footer-container-section.footer-container-section-goals.column.is-half-desktop
            h2.typo-hero-box-subtitle Cíl Aplikace

            .content
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          .footer-container-section.column.is-one-quarter-desktop
            h2.typo-hero-box-subtitle Funkcionality

            .content
              ul
                li Interaktivní prohlížení objektů v časovém i geografickém kontext
                li Tvorba vlastních map pomocí našich datových informací
                li Přehledný seznam map a objektů ze sbírky Muzea dělnického hnutí

          .footer-container-section.column.is-one-quarter-desktop
            h2.typo-hero-box-subtitle Autoři

            .content
              ul
                li Interaktivní prohlížení objektů v časovém i geografickém kontext
                li Tvorba vlastních map pomocí našich datových informací
                li Přehledný seznam map a objektů ze sbírky Muzea dělnického hnutí


      .background

    section.section.section-padding(data-component="section")

      h1.typo-section-title.is-section-title Interaktivní historie na mapách [{{maps.length}}]

      h2.typo-subtitle.is-section-title Zde bude text, který stručně a jasně poskytne shrnutí toho, co uživatelé na jednotlivých mapách najdou a co s nimi mohou dělat. Nejde o to zde popsat technické aspekty map, ale právě ony uživatelské úkony, jenž mohou být pro uživatele zajímavé.

      .list-in-section(data-component="list-map")

        .container-items.columns.is-multiline



          MapThumb(v-for="key in Object.keys(maps)" :key="key" :Name="maps[key].name" :Slug="key" :Modes="maps[key].modes.split(', ')")


          //- each key in Object.keys(maps)

          //-   - const {name, safeSlug, slug, thumbPhoto, mapSettings} = maps[key]

          //-   +list-map-item({
          //-     class: 'is-one-quarter-widescreen is-one-third-desktop is-half',
          //-     name,
          //-     thumbPhoto,
          //-     safeSlug,
          //-     slug,
          //-     mapSettings,
          //-   })

        a.button.button-more(href="list-maps.html") Všechny mapy


    section.section.section-padding.alt-bg(data-component="section")

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



        a.button.button-more(href="list-objects.html") Všechny objekty


      <FooterAside />

</template>
<script>

export default {

    async asyncData({ params, $config, $fire }) {

      const getDatabaseData = async () => {

        return new Promise((resolve, reject) => {

          const dbInstance = $fire.database.ref(`${$config.firebaseDatabase.rootObject}`);

          dbInstance.once('value', (snapshot) => {

            const data = snapshot.val();

            resolve(data);

          });

        });

      };

      const maps = await getDatabaseData();

      return {
        maps: maps,
      }

    },

    mounted() {

          console.log("from mounted", this.maps);


    },

    data() {
      return {
        maps: {},
        title: `Hlavní stránka`,
      }
    },

    head () {
      return {
        title: `${this.title} — ${this.$config.globalTitle}`,
        htmlAttrs: {
          class: 'index'
        }
      }
    }

}
</script>
