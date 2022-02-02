<template lang="pug">
      article.card.card-detail(:data-object-detail-id="ThisObject.id" data-component="card-detail")

        .layer-bar(:style="`background-color: ${ThisObject.categoryColor}`")
          .meta.meta-category {{ThisObject.layer}}
          .actions
            a(href="#" data-component="close" @click="$emit('card-detail-close')").item Zavřít

        .card-content-container

          .subheader-bar
            .submetas
              .meta.meta-address

            .actions
              a(href=`/objekt/{object.properties.slug}/`).item.item-link
                <svg xmlns="http://www.w3.org/2000/svg" width="14.941" height="23.98" viewBox="0 0 14.941 23.98">
                  <g id="icon_link" data-name="icon link" transform="translate(0 0)">
                    <path id="Path_340" data-name="Path 340" d="M1229.615,200.784v2.142a3.82,3.82,0,0,1,3.683,3.813v4.843a3.815,3.815,0,0,1-7.63,0v-4.843a3.818,3.818,0,0,1,.122-.954c-.01-.052-.019-.1-.029-.156s-.02-.1-.028-.154c-.013-.075-.022-.15-.032-.225-.007-.049-.014-.1-.019-.147-.009-.083-.015-.166-.022-.249,0-.041-.007-.083-.01-.124q-.01-.187-.011-.373v-2.168a5.918,5.918,0,0,0-2.112,4.55v4.843a5.956,5.956,0,1,0,11.912,0v-4.843a5.969,5.969,0,0,0-.153-1.337h0A5.922,5.922,0,0,0,1229.615,200.784Z" transform="translate(-1223.527 -193.558)"/>
                    <path id="Path_341" data-name="Path 341" d="M1249.163,170.282V168.14a3.819,3.819,0,0,1-3.683-3.813v-4.843a3.815,3.815,0,1,1,7.63,0v4.843a3.82,3.82,0,0,1-.122.954c.011.052.019.1.029.156s.02.1.028.153c.013.077.023.153.033.23.006.048.013.1.019.143.009.085.016.169.022.254,0,.04.007.08.01.12q.01.187.01.373v2.168a5.917,5.917,0,0,0,2.112-4.55v-4.843a5.956,5.956,0,1,0-11.912,0v4.843a5.959,5.959,0,0,0,5.824,5.955Z" transform="translate(-1240.309 -153.528)"/>
                  </g>
                </svg>

          .title-bar
            .card-title {{ThisObject.name}}

          .card-content-in

            .card-content

              .card-content--meta

                .item-meta(v-if="ThisObject.exists === false")

                    .item-meta--heading
                      s GPS souřadnice
                    .item-meta--content
                      s y: {{ThisObject.y}}, x: {{ThisObject.x}}
                .item-meta(v-else)
                  .item-meta-content
                    .item-meta--heading
                      | GPS souřadnice
                    .item-meta--content y: {{ThisObject.y}}, x: {{ThisObject.x}}

                .item-meta(v-if="ThisObject.type")

                  .item-meta-content
                    .item-meta--heading Typ objektu
                    .item-meta--content

                      .icon(:title="ThisObject.type" :data-icon-type="ThisObject.type")

                      span {{ThisObject.type}}

                .item-meta(v-if="ThisObject.date_start || ThisObject.date_end")

                  .item-meta-content
                    .item-meta--heading Kdy?
                    .item-meta--content

                      span  {{ `od ${datumZacatek} do ${datumKonec}` }}



                .item-meta(v-if="ThisObject.subtype")

                  .item-meta-content
                    .item-meta--heading Typ události
                    .item-meta--content

                      span {{ThisObject.subtype}}


                .item-meta(v-if="ThisObject.id")

                  .item-meta-content
                    .item-meta--heading ID objektu
                    .item-meta--content
                      span {{ThisObject.id}}


              .card-content--description
                p(v-html="ThisObject.description")
                p.source(v-if="ThisObject.source") Zdroje k textu: {{ThisObject.source}}


          .gallery.gallery-card-detail()

            .gallery-image-container(v-if="ThisObject.images && ThisObject.images.image1 && ThisObject.images.image1.name && ThisObject.mapSlug")

              .gallery-image(v-for="(imageObject, index) in ThisObject.images" :key="index")

                .gallery-image-item(@click="openImagePopUp(Object.keys(ThisObject.images).indexOf(index), ThisObject)")

                  img(:src="`/data-maps/${ThisObject.mapSlug}/${ThisObject.slug}/${imageObject.galleryThumbnail}`")

                .desc(v-if="imageObject.desc") {{imageObject.desc}}
                .source(v-if="imageObject.source")
                  i Zdroj: {{imageObject.source}}

            .gallery-image-container(v-else)

              .gallery-image
                .gallery-image-item
                  img(src=`/object-default-image.png`)

          .related-maps.is-hidden

            .title Objevuje se na těchto mapách

            .list-maps

              .item-map-thumb

                img.image-bg(src="/assets/images/dummy/map-dummy-image-02.jpg" alt="")
                .item-map-thumb--title Julius Fučík - místa paměti Praha 2

              .item-map-thumb

                img.image-bg(src="/assets/images/dummy/map-dummy-image-02.jpg" alt="")
                .item-map-thumb--title Julius Fučík - další mapa o Fučíkovi



</template>
<style lang="sass" scoped>


  @use 'sass:math'

  .icon
    width: 30px
    height: 30px
    display: inline-block

  .card.card-detail

    $card-detail-padding: 30px

    padding-top: $base-mobile-side-margin * 2
    padding-bottom: $base-mobile-side-margin * 2

    padding-left: $base-mobile-side-margin * 2
    padding-right: $base-mobile-side-margin * 2

    &.card-detail-page
      margin-top: 2rem
      width: 50%


    &:not(.card-detail-page)

      position: absolute
      top: 0
      left: 0
      z-index: 9


    width: 100%

    max-width: unset

    @at-root .main-container[data-mode='objects'] &
      position: static


    @include from($widescreen)
      max-width: $max-content-full-width
      margin-left: auto
      margin-right: auto


    .meta-category
      display: flex


    .text-icon
      font-size: 26px
      margin-right: math.div($base-mobile-side-margin, 2)


    .layer-bar
      display: flex
      justify-content: space-between
      height: 41px
      line-height: 41px
      padding: 0 $card-detail-padding

      .actions
        float: right
        font-size: 16px
        font-weight: 700
        .item
          border-left: 1px solid rgba(0, 0, 0, 0.15)
          padding-left: 15px
          text-transform: uppercase


    .card-content-container
      padding: 10px $card-detail-padding $card-detail-padding
      cursor: default /* overriding the cursor for .card */


    .subheader-bar
      display: flex
      justify-content: space-between

      .actions
        width: 93px
        height: $header-main-height
        background-color: #fff
        border-radius: 10px
        box-shadow: 0 0.2em 0.5em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02)
        display: flex
        justify-content: center
        align-items: flex-end

        .item
          &:first-child
            margin-left: 0
            &::before
              content: none


          &:before
            content: ''
            width: 1px
            height: 17px
            background: $passive-gray
            margin-right: 14px
            margin-left: 15px
            display: inline-block
            position: relative
            top: -5px


    .title-bar
      justify-content: center
      margin-bottom: $base-mobile-side-margin * 2

    .title-bar .card-title
      font-size: 32px


    .card-content

      height: auto



    .card-content-in
      margin: 0 auto


    .card-content--description

      font-size: 20px
      word-wrap: break-word

      .source
        font-style: italic
        font-size: 1rem
        margin-top: 1em


      @include until($widescreen)

        margin-bottom: $base-mobile-side-margin


    .card-content--meta
      padding-right: 5px
      margin-bottom: 1em

      .item-meta
        display: flex
        justify-content: center
        font-size: 16px
        margin-bottom: 0.5rem



      .item-meta-content
        display: flex
        justify-content: flex-start
        width: 50%
        align-items: center

      .item-meta--heading
        font-weight: 700
        margin-right: $base-mobile-side-margin * 2
        text-align: left
        width: 30%
        min-width: 110px

      .item-meta--content
        display: flex
        align-item: center




    .gallery
      $gallery-height: 466px

      height: auto
      margin-top: $base-mobile-side-margin * 2
      margin-bottom: 0 /* :NOTE: overriding the .card .gallery margin bottom */

      .gallery-image
        height: auto
        background: none
        margin-bottom: 1.5em

      .gallery-image-item
        height: $gallery-height
        overflow: hidden
        width: 100%
        background: transparent
        text-align: center
        position: relative

        cursor: pointer

        .button-open-gallery
          display: inline-block
          background: #fff
          position: absolute
          bottom: 55px
          right: 15px
          height: 50px
          line-height: 50px
          min-height: auto
          font-size: 14px
          width: 20%
          max-width: 200px
          min-width: 150px


        a
          background-color: #eee
          display: block
          height: 466px


      .gallery-description
        margin-top: 10px
        font-style: italic
        font-size: 14px
        text-align: center


      img
        width: 100%
        height: 100%
        object-fit: cover
        object-position: center


    .gallery-nav
      display: block
      position: static
      width: auto
      height: auto
      padding: 0

      .prev,
      .next
        width: 32px
        height: 32px
        border-radius: 32px
        line-height: 32px
        position: absolute
        display: inline-block
        z-index: 9


      .prev
        top: 50%
        margin-top: -16px
        left: $base-mobile-side-margin


      .next
        top: 50%
        margin-top: -16px
        right: $base-mobile-side-margin


    .related-maps
      margin-top: $base-mobile-side-margin * 4

      .title
        font-size: 22px


</style>
<script>
export default {
  props: ['ThisObject'],

  computed: {


    datumZacatek() {

      return (this.ThisObject.date_start && this.ThisObject.date_start !== undefined) ? this.ThisObject.date_start : '???';

    },

    datumKonec() {

      return (this.ThisObject.date_end && this.ThisObject.date_end !== undefined) ? this.ThisObject.date_end : '???';

    }


  },

  methods: {

    openImagePopUp(index, thisObject) {

      this.$store.dispatch("setAktualniImagePopUp", {index, thisObject});

    },

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

