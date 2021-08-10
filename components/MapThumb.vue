<template lang="pug">

  article.column(data-component="list-map-item" :class="thisComponentStyles")

    figure
      a(:href="`/mapa/${Slug.replace(/_/g,'-')}/`")
        <img :src="require(`@/assets/data-maps/${Slug}/thumb.jpg`)" :alt="Name" />
      nav.list-map-nav.list-map-nav-symbols


          .map-item-symbol.map(v-if="Modes.includes('map')")
            img(src="~/assets/images/icons/icon-view-switch-map-large.svg")

          .map-item-symbol.objects(v-if="Modes.includes('objects')")
            img(src="~/assets/images/icons/icon-view-switch-objects-large.svg")

          .map-item-symbol.timeline(v-if="Modes.includes('timeline')")
            img(src="~/assets/images/icons/icon-view-switch-timeline-large.svg")

      nav.list-map-nav.list-map-nav-actions
        .map-item-symbol
          img(src="~/assets/images/icons/icon-bookmark-large.svg")

    h3.typo-subtitle.list-map-item-title
      a(:href="`/mapa/${Slug.replace(/_/g,'-')}/`") {{Name}}

</template>
<script>
export default {
  props: ["Slug", "Name", "Modes"],


  async asyncData({params, error, payload, store}) {


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
