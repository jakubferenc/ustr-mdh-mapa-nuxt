<template lang="pug">


  article.card.card-thumb(:data-object-name="ThisObject.name" data-component="card" :data-object-layer="ThisObject.layer" :data-object-type="ThisObject.type")

    .layer-bar(style=`background-color: ${thisObjectCategoryColor}`)
      .meta.meta-category {{thisObjectCategoryName}}

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

  //-           if (ThisObject.properties.type)
  //-             img(src=`/assets/images/icons/icon-object-${ThisObject.properties.type}.svg`)

</template>
<script>
export default {
  props: ['ThisObject', 'Map'],

  computed: {

    thisObjectCategoryObject() {

      return this.Map.categories[Object.keys(this.Map.categories).filter(key => this.Map.categories[key].name == "Památníky a muzea revolučního hnutí")]

    },

    thisObjectCategoryName() {

      return this.thisObjectCategoryObject.name;

    },

    thisObjectCategoryColor() {

      return this.thisObjectCategoryObject.color;

    }

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

