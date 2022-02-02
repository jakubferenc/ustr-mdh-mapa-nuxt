<template lang="pug">

  .gallery-popup-container

    .gallery-popup-close
      <IconClose @click="closePopUp()" />

    .gallery-popup-navigation

      .navigation-item(v-for="(imageObject, index) in getImages" :key="index")

        .navigation-item-in(:class="{active: getCurrentIndex == index}" @click="selectImage(index)")
          img(
            :src="`/data-maps/${ThisObject.mapSlug}/${ThisObject.slug}/${imageObject.galleryThumbnail}`"
            :data-src-full="`/data-maps/${ThisObject.mapSlug}/${ThisObject.slug}/${imageObject.full}`"
          )

    .gallery-popup-content(:class="{'zoomed': isZoomed}")

          img(
            :src="`/data-maps/${ThisObject.mapSlug}/${ThisObject.slug}/${getCurrentImageObj.full}`"
            @click="toggleZoom()"
          )

          .metadata

            .metadata-content
              .object-title {{ThisObject.name}}
              .object-image-desc(v-if="getCurrentImageObj.abstract") {{getCurrentImageObj.abstract}}
              .object-image-desc(v-if="getCurrentImageObj.desc") {{getCurrentImageObj.desc}}
              h2(v-if="getCurrentImageObj.source || ThisObject.source") Zdroj: {{getCurrentImageObj.source || ThisObject.source}}

              .metadata-tags

                .category(:style="`background-color: ${ThisObject.categoryColor}`") {{ThisObject.layer}}


</template>
<style lang="sass">

  .object-image-desc
    @extend %typo-hero-box-subtitle
    margin-bottom: 1em
    line-height: 1.1

  .metadata

    position: fixed
    right: 30px
    width: 25%
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
    align-content: center

    .metadata-content
      padding: 5%
      background-color: #fff


  .metadata-tags
    margin-top: 2em

  .category

    padding: 5px 10px 5px 20px
    min-height: 35px
    position: relative
    border-radius: 10px
    flex: 0 0 auto
    display: flex
    align-items: center
    margin-bottom: 0.25em
    font-size: 14px
    width: 80%

  .object-title
    @extend %typo-main-title
    margin-bottom: 1em


  .gallery-popup-content
    overflow: scroll
    height: 100vh

    display: flex
    justify-content: center

    &:not(.zoomed)
      img
        height: 100%
        width: 100%
        object-fit: contain
        cursor: zoom-in


    &.zoomed
      display: block
      img
        cursor: zoom-out
        width: 100%
        flex: 0 0 auto


  .gallery-popup-container
    position: fixed
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    z-index: 9999
    background-color: #fff

    .gallery-popup-navigation

      position: absolute
      top: 30px
      left: 30px
      width: 150px
      +desktop
        height: calc(100vh - 60px)
        overflow: scroll

      .navigation-item
        width: 100%
        height: 0
        position: relative
        padding-top: 100%
        margin-bottom: .5em
        cursor: pointer

        .navigation-item-in
          position: absolute
          top: 0
          left: 0
          right: 0
          bottom: 0
          width: 100%
          height: 100%
          border: 3px solid transparent

          &:hover,
          &.active
            border: 3px solid black

          img
            object-fit: cover
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            width: 100%
            height: 100%

    .gallery-popup-close

      z-index: 2
      position: absolute
      top: 30px
      right: 30px
      cursor: pointer

      svg
        font-size: 30px


</style>


<script>

import IconClose from "~/assets/images/icons/icon-close.svg?inline";


export default {

    props: ['Data'],

    methods: {

      toggleZoom() {

        this.isZoomed = !this.isZoomed;

      },

      closePopUp() {

        this.$store.dispatch("setAktualniImagePopUp", {});

      },

      selectImage(index) {

        this.isZoomed = false;
        this.selectedIndex = index;

      },

    },

    data() {

      return {
        isZoomed: false,
        selectedIndex: null,
      }

    },

    computed: {

      ThisObject() {

        return this.$store.state.aktualniImagePopUp.thisObject;

      },

      getImages() {

        return Object.values(this.$store.state.aktualniImagePopUp.thisObject.images);


      },

      getCurrentImageObj() {

        return this.getImages[this.getCurrentIndex];

      },

      getCurrentIndex() {

        if (this.selectedIndex === null) {
          return this.$store.state.aktualniImagePopUp.index;
        } else {

          return this.selectedIndex;

        }


      }

    },

    mounted() {

    },

    components: {IconClose},

    head () {
      return {
        htmlAttrs: {
          class: 'popup-open'
        }
      }
    }


}
</script>

