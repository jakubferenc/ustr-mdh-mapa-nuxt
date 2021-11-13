<template lang="pug">


  article.card.card-thumb(:data-object-name="ThisObject.name" data-component="card" :data-object-layer="ThisObject.layer" :data-object-type="ThisObject.type")

    .layer-bar(:style="`background-color: ${ThisObject.categoryColor}`")
      .meta.meta-category {{ ThisObject.layer }}

    .card-content-container
      .gallery
        .gallery-image(v-if="ThisObject.images && ThisObject.images.image1 && ThisObject.images.image1.name && ThisObject.mapSlug")

            //img(:src="`https://res.cloudinary.com/assemblage-cz/image/upload/v1636708334/mdh-mapa/${ThisObject.mapSlug}/${ThisObject.name}/${ThisObject.images.image1.name}`" :alt="ThisObject.images && ThisObject.images && ThisObject.images.image1 && ThisObject.images.image1.desc")
            img(:src="`/data-maps/${ThisObject.mapSlug}/${ThisObject.slug}/${ThisObject.images.image1.thumbnail}`" :alt="ThisObject.images && ThisObject.images && ThisObject.images.image1 && ThisObject.images.image1.desc")


        .gallery-image(v-else)
          img(src=`/object-default-image.png`)

      .card-content
        .title-bar
          .card-title {{ThisObject.nameShort}}
          .icons
            //- <svg class="icon icon-action" xmlns="http://www.w3.org/2000/svg" width="12.871" height="19.793" viewBox="0 0 12.871 19.793">
            //-   <g transform="translate(-132.331 -89.309)" fill="none">
            //-     <path d="M138.766,102.888l.172.166L145.2,109.1V89.309H132.331V109.1l6.263-6.047Z" stroke="black"/>
            //-   </g>
            //- </svg>
        .footer-bar
          .meta.meta-address
            div(v-if="ThisObject.exists === false")
              s GPS: {{ThisObject.y}}, {{ThisObject.x}}
            div(v-else)
              | GPS: {{ThisObject.y}}, {{ThisObject.x}}
          .icons
            .icon(v-if="ThisObject.type" :title="ThisObject.type" :data-icon-type="ThisObject.type")

</template>

<style lang="sass">



</style>

<script>
export default {
  props: ['ThisObject'],

  computed: {


  },


  mounted() {

  },

  methods: {

    checkHasImages(obj) {

      try {


      } catch (e) {

      }

    },

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

