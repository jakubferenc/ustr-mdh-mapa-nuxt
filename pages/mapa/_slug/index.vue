<template lang="pug">

  main

    .page-content.page-content-map-detail-homepage

      .header
        .header-figure

          ul.header-figure-types

            li.map(v-if="mapa.modes.includes('map')")
               img(src="~assets/images/icons/icon-view-switch-map-large.svg")

            li.objects(v-if="mapa.modes.includes('objects')")
               img(src="~assets/images/icons/icon-view-switch-objects-large.svg")

            li.timeline(v-if="mapa.modes.includes('timeline')")
              img(src="~assets/images/icons/icon-view-switch-timeline-large.svg")

          ul.header-figure-actions.is-hidden
            li.bookmark
              img(src="~assets/images/icons/icon-bookmark-large.svg")

          img.header-figure-image(:src="require(`~/assets/data-maps/${mapa.id}/hlavni.jpg`)")

        .header-content

          .header-content-text-container
            .header-content-text

              h1.typo-main-title.main-title {{mapa.name}}

              .section-content-text
                p {{mapa.description}}


            .authors

              h2.section-content-text-title Mapu vytvořili

              .authors-list.columns.is-multiline


                .author.column.is-one-third-desktop.is-half(v-for="(author, index) in autori" :key="index")
                  .author-image
                    //- img(src=`${author.photo}` alt=`${author.name}`)
                  .author-bio
                    .name {{author.name}}
                    .what-they-did {{author.desc}}
                    .institution {{author.institution}}

          NuxtLink.header-button(to="detail/")

            .icon

              span
                <svg xmlns="http://www.w3.org/2000/svg" width="21.174" height="30.301" viewBox="0 0 21.174 30.301">
                  <path id="Path_320" data-name="Path 320" d="M11.43,9.627V0L0,15.151,11.43,30.3V20.674h9.744V9.627H11.43Z" transform="translate(21.174 30.301) rotate(180)"/>
                </svg>
                img.is-hidden(src="~assets/images/icons/icon-button-start-map.svg" alt="")

            .icon-text SPUSTIT MAPU

      .section-container

        .section.section-text-info(v-if="mapa.goals && mapa.goals.length && mapa.goals.length > 0")
          h2 Cíle mapy
          .section-text-info-content
            p {{mapa.goals}}


        .section.section-text-info
          h2 Metodika a přílohy

          .section-text-info-content

            ul.attachments
              li.attachment
                .icon
                  img(src="~assets/images/icons/icon-file-type-docx.svg" alt="Microsoft Word Docx")
                .text
                  div.title Stáhnout
                  div.text
                    u Dokument Pracovní list

              li.attachment
                .icon
                  img(src="~assets/images/icons/icon-file-type-pdf.svg" alt="Adobe PDF")
                .text
                  div.title Stáhnout
                  div.text
                    u Příprava

        .section.section-text-info

          h2 Kategorie

          .section-text-info-content
            p Mapu jsme rozdělili do několika vrstev. Ty by měly usnadnit orientaci, nejde však o přesně definované a pevné kategorie: některá místa jsou obtížně zařaditelná, klasifikace se v některých případech překrývá. Základním smyslem mapy je, aby nám pomáhala klást si otázky, které se můžete pokusit zodpovědět prostřednictvím výstavy, svých vzpomínek či rozhovorem s pamětníky.
            .layers-container

              .layer(v-for="(category, index) in kategorie" :key="index" :style="`background-color: ${category.color};`")
                .title {{category.name}}
                .text {{category.desc}}



        .section.section-text-info

          h2 Jak se zapojit do projektu?

          .section-text-info-content
            p Chybí vám na mapě nějaké místo, které dobře znáte a s tématem souvisí? Budeme rádi, když nám dáte vědět.

            .section-text-info-content-footer

              a.button.button-with-icon.button-send(href="#")
                .button-text Napište nám
                .button-icon
                  img(src="~assets/images/icons/icon-button-send.svg" alt="Zaslat zprávu")


</template>

<script>
export default {

    async asyncData({params, error, payload, store, $axios}) {

      if (payload) {
        return {
          mapa: payload
        }
      } else {

        //:TODO: check if in store, it is cached, so that when we have results stored in the store, we just return the array of "stranka" items

        await store.dispatch("getMapy");

        const mapa = Object.keys(store.state.mapy)
        .map(key => {
          return store.state.mapy[key];
        })
        .filter(mapa => mapa.slug == params.slug);

        return {
          mapa: mapa[0]
        }

      }

    },

    computed: {

      kategorie() {
        const categoriesEdited = Object.keys(this.mapa.categories).map(key => this.mapa.categories[key]);


        return categoriesEdited;
      },

      autori() {

        const authorsEdited = Object.keys(this.mapa.authors).map(key => this.mapa.authors[key]);


        return authorsEdited;
      },

      mapaNazev() {

        return this.mapa.name;

      },


    },

    mounted() {


    },

    data() {
      return {

      }
    },

    head () {
      return {
        title: `${this.mapaNazev} — ${this.$config.globalTitle}`,
        htmlAttrs: {
          class: ''
        }
      }
    }

}
</script>
