<template lang="pug">


  article.card.card-thumb(:data-object-name="ThisObject.name" data-component="card" :data-object-layer="ThisObject.layer" :data-object-type="ThisObject.type")

    .layer-bar(:style="`background-color: ${ThisObject.categoryColor}`")
      .meta.meta-category {{ ThisObject.layer }}

    .card-content-container
      //-     .gallery
      //-       .gallery-image
      //-         if (ThisObject.images.length > 0)
      //-           img(src=`/assets/data-maps/${Map.safeSlug}/images/${ThisObject.properties.slug}/${ThisObject.images[0].thumbnail}`)
      //-         else
      //-           img(src=`/assets/images/object-default-image.png`)

      .card-content
        .title-bar
          .card-title {{ThisObject.name}}
          .icons
            <svg class="icon icon-action" xmlns="http://www.w3.org/2000/svg" width="12.871" height="19.793" viewBox="0 0 12.871 19.793">
              <g transform="translate(-132.331 -89.309)" fill="none">
                <path d="M138.766,102.888l.172.166L145.2,109.1V89.309H132.331V109.1l6.263-6.047Z" stroke="black"/>
              </g>
            </svg>
        .footer-bar
          .meta.meta-address
            div(v-if="ThisObject.exists === false")
              s GPS: {{ThisObject.y}}, {{ThisObject.x}}
            div(v-else)
              | GPS: {{ThisObject.y}}, {{ThisObject.x}}
          .icons
            .icon(:title="ThisObject.type" v-if="ThisObject.type" :data-icon-type="ThisObject.type")

</template>
<script>
export default {
  props: ['ThisObject'],

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

