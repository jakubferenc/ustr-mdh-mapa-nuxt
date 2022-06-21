<template lang="pug">

  .page

    .hero-box.homepage.section-padding(data-component="hero-box")

      .title-container.columns

        .column.is-half-desktop
          h1.app-title Mapa
          p.app-subtitle Muzea dělnického hnutí v 21. století

        .column.is-half-desktop
          p.typo-subtitle Tato sada interaktivních map je výsledkem bádání ve fondech <a href="https://www.mdh21.cz/stranka/o-sbirce-mdh/">Sbírky Muzea dělnického hnutí v Národním muzeu</a>. Jednotlivé mapy vizualizují dějinná témata, jež byla podstatná pro kulturní politiku v Československu v období 1948-1989. Kromě jednotlivých muzeí, památníků a artefaktů mapy zachycují i dynamiku našeho vzpomínání. Objevujte s námi místa paměti, na která postupně zapomínáme.

      .footer-container

        .columns.is-mutiline-mobile.is-desktop

          .footer-container-section.footer-container-section-goals.column.is-half-desktop
            h2.typo-hero-box-subtitle O projektu

            .content
              p(v-html="$config.obsah.mapy.aboutText")




      .background

    section.section.section-padding(data-component="section")

      h1.typo-section-title.is-section-title Interaktivní historie na mapách

      h2.typo-subtitle.is-section-title {{$config.obsah.mapy.sectionTitle}}

      .list-in-section(data-component="list-map")

        .container-items.columns.is-multiline


          MapThumb(v-for="key in Object.keys(mapy)" :key="key" :MapKey="key" :Name="mapy[key].name" :Slug="mapy[key].slug" :Modes="mapy[key].modes.split(', ')")


        NuxtLink.button.button-more(to="/mapy/") Zobrazit všechny mapy




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
