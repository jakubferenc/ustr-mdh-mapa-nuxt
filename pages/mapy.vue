<template lang="pug">
 main


    section.section.section-padding(data-component="section")

      h1.typo-section-title.is-section-title VŠECHNY MAPY mdh

      h2.typo-subtitle.is-section-title Zde bude text, který stručně a jasně poskytne shrnutí toho, co uživatelé na jednotlivých mapách najdou a co s nimi mohou dělat. Nejde o to zde popsat technické aspekty map, ale právě ony uživatelské úkony, jenž mohou být pro uživatele zajímavé.

      .list-in-section(data-component="list-map")

        .container-items.columns.is-multiline

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


    section.section.section-padding.alt-bg(data-component="section")


      <FooterAside />


</template>
<script>
export default {


    computed: {

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
