<template lang="pug">

  .filter(data-component="filter")

    .filter-section-container

      .filter-section
        .filter-section-title Kategorie
        .filter-section-list.filter-section-list--full-width.filter-section-list--label

          div(v-if="Kategorie")
            a.filter-item.active(v-for="(item, index) in Kategorie" :key="index" href="#" :data-filter-layer="item.name")
              span.filter-item-text {{item.name}}
              span.color-indicator(:style="`background-color: ${item.color}`")

      .filter-section
        .filter-section-title Typ objektu
        .filter-section-list.filter-section-list--icons

          a(v-for="type in Typy" :class="`filter-item filter-item--${$config.appConfig.mdh.object.types[type].label}`" :data-filter-type="`${$config.appConfig.mdh.object.types[type].slug}`" href="#")
            .icon
              img(:src="require(`/assets/images/icons/${$config.appConfig.mdh.object.types[type].icon}.svg`)")

            .text {{$config.appConfig.mdh.object.types[type].label}}

    .filter-button-switch
      .filter-button-switch-icon-container
        .icon.icon-open
          <svg xmlns="http://www.w3.org/2000/svg" width="19.729" height="27" viewBox="0 0 19.729 27"><defs><style>.a{fill:#1a1818;}</style></defs><path class="a" d="M832.374,540.853l-9.865,15.981-9.864-15.981" transform="translate(-812.645 -540.853)"/><path class="a" d="M859.426,600.558l4.525-4.458V579.9h-4.525Z" transform="translate(-851.826 -573.558)"/></svg>
          .icon-text Třídit
        .icon.icon-close
          <svg xmlns="http://www.w3.org/2000/svg" width="19.245" height="28" viewBox="0 0 19.245 28"><defs><style>.a{fill:#1a1818;}</style></defs><g transform="translate(-634.499 -538.828)"><path class="a" d="M645.238,566.828l-10.739-14,10.739-14"/><rect class="a" width="10.158" height="10.158" transform="translate(643.586 547.749)"/></g></svg>
          .icon-text Zavřít



</template>
<script>
export default {
  props: ["Typy", "Kategorie"],


  async asyncData({params, error, payload, store}) {


  },

  computed: {


  },

  mounted() {



  },

  data() {
    return {
      thisComponentStyles: {}
    }
  },

  head () {
    return {

    }
  }

}
</script>
