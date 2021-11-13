<template lang="pug">
 main


    section.section.section-padding(data-component="section")

      h1.typo-section-title.is-section-title VŠECHNY MAPY mdh

      h2.typo-subtitle.is-section-title {{$config.obsah.mapy.sectionTitle}}

      .list-in-section(data-component="list-map")

        .container-items.columns.is-multiline

          MapThumb(v-for="key in Object.keys(mapy)" :key="key" :Name="mapy[key].name" :Slug="mapy[key].slug" :Modes="mapy[key].modes.split(', ')")


      <FooterAside />


</template>
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

    data() {
      return {
        title: `Mapy`,

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
