<template lang="pug">

  .page

    .hero-box.homepage.section-padding(data-component="hero-box")

      .title-container.columns

        .column.is-half-desktop
          h1.app-title Mapa
          p.app-subtitle Muzea dělnického hnutí v 21. století

        .column.is-half-desktop
          p.typo-subtitle Tato sada interaktivních map je výsledkem bádání ve fondech tzv. muzea dělnického hnutí a v dalších archivních fondech. Jednotlivé mapy vizualizují dějinná témata, jež byla podstatná pro kulturní politiku v Československu v období 1948-1989. Kromě jednotlivých muzeí, památníků a artefaktů mapy zachycují i dynamiku našeho vzpomínání. Objevujte s námi místa paměti, na která postupně zapomínáme.

      .footer-container

        .columns.is-mutiline-mobile.is-desktop

          .footer-container-section.footer-container-section-goals.column.is-half-desktop
            h2.typo-hero-box-subtitle O projektu

            .content
              p Mapa vznikla v rámci projektu Ministerstva kultury ČR NAKI II (DG18P02OVV045) – Muzeum dělnického hnutí v 21. století. Prezentace práce s muzejní sbírkou doby státního socialismu a způsoby užití jejího materiálu k potřebám odborné a široké veřejnosti.




      .background

    section.section.section-padding(data-component="section")

      h1.typo-section-title.is-section-title Interaktivní historie na mapách

      h2.typo-subtitle.is-section-title {{$config.obsah.mapy.sectionTitle}}

      .list-in-section(data-component="list-map")

        .container-items.columns.is-multiline


          MapThumb(v-for="key in Object.keys(mapy)" :key="key" :Name="mapy[key].name" :Slug="key" :Modes="mapy[key].modes.split(', ')")


        NuxtLink.button.button-more(to="/mapy/") Zobrazit všechny mapy


    //- section.section.section-padding.alt-bg(data-component="section")

    //-   h1.typo-section-title.is-section-title podívejte se na objekty sbírky mdh

    //-   h2.typo-subtitle.is-section-title Zde bude text, který stručně a jasně poskytne shrnutí toho, co uživatelé na jednotlivých mapách najdou a co s nimi mohou dělat. Nejde o to zde popsat technické aspekty map, ale právě ony uživatelské úkony, jenž mohou být pro uživatele zajímavé.

    //-   .list-in-section(data-component="list-objects")

    //-     .cards-container

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

<style lang="sass">
  .app-title
    @extend %typo-app-title

  .app-subtitle
    @extend %typo-subtitle
    margin-top: -.5em

</style>
<script>

export default {


    async asyncData ({store}) {

      await store.dispatch("getMapy");

    },

    computed: {

      mapy() {
        return this.$store.state.mapy;
      },

    },

    mounted() {


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
