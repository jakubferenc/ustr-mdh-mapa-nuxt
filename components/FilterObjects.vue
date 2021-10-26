<template lang="pug">

  .filter(data-component="filter")

    .filter-section-container(v-show="showFilter")

      .filter-section
        .filter-section-title Kategorie
        .filter-section-list.filter-section-list--full-width.filter-section-list--label

          div(v-if="Kategorie")
            a.filter-item(v-for="(item, index) in Kategorie" :key="index" href="#" :data-filter-layer="item.name" :class="{active: activeFilterCategories.includes(item.name)}" @click="toggleFilterItem(item.name)")
              span.filter-item-text {{item.name}}
              span.color-indicator(:style="`background-color: ${item.color}`")

      .filter-section
        .filter-section-title Typ objektu
        .filter-section-list.filter-section-list--icons

          a.filter-item(href="#" v-for="item in Typy" :class="{[`filter-item--${item.slug}`]: true, active: activeFilterTypes.includes(item.slug)}" :data-filter-type="`${item.slug}`" @click="toggleFilterTypeItem(item.slug)")
            .icon
              <IconObjectBudova v-if="item.component === 'IconObjectBudova' " />
              <IconObjectDokument v-if="item.component === 'IconObjectDokument' " />
              <IconObjectMisto v-if="item.component === 'IconObjectMisto' " />
              <IconObjectMuzeum v-if="item.component === 'IconObjectMuzeum' " />
              <IconObjectPamatnik v-if="item.component === 'IconObjectPamatnik' " />
              <IconObjectUlice v-if="item.component === 'IconObjectUlice' " />

            .text {{item.label}}

    .filter-button-switch(@click="toggleFilter()")
      .filter-button-switch-icon-container
        .icon.icon-open
          <svg xmlns="http://www.w3.org/2000/svg" width="19.729" height="27" viewBox="0 0 19.729 27"><defs><style>.a{fill:#1a1818;}</style></defs><path class="a" d="M832.374,540.853l-9.865,15.981-9.864-15.981" transform="translate(-812.645 -540.853)"/><path class="a" d="M859.426,600.558l4.525-4.458V579.9h-4.525Z" transform="translate(-851.826 -573.558)"/></svg>
          .icon-text Třídit
        .icon.icon-close
          <svg xmlns="http://www.w3.org/2000/svg" width="19.245" height="28" viewBox="0 0 19.245 28"><defs><style>.a{fill:#1a1818;}</style></defs><g transform="translate(-634.499 -538.828)"><path class="a" d="M645.238,566.828l-10.739-14,10.739-14"/><rect class="a" width="10.158" height="10.158" transform="translate(643.586 547.749)"/></g></svg>
          .icon-text Zavřít



</template>
<style lang="sass">

[data-component='filter']
  height: calc(100vh - #{$header-main-height})
  display: flex
  align-items: flex-start
  justify-content: space-between
  width: auto

  +until($desktop)
    position: absolute
    top: 0%
    left: 0
    z-index: 99
    height: 100%
    align-items: center

    &.open
      background-color: #fff
      align-items: flex-start



    .filter-button-switch

      background: #fff



  +from($desktop)
    background: #fff


  .filter-section-container

    width: calc(100vw - #{$filter-width})
    padding: $base-mobile-side-margin * 2 $base-mobile-side-margin

    +from($desktop)
      width: 271px


  .filter-section-title
    font-size: 19px
    text-transform: uppercase
    margin-bottom: 0.5rem


  .filter-section
    margin-bottom: 2rem

    .filter-section-list
      display: flex
      flex-direction: column
      align-items: stretch

      .filter-item
        padding: 5px 10px 5px 20px
        min-height: 35px
        position: relative
        background-color: $passive-gray
        border-radius: 10px
        width: auto
        flex: 0 0 auto
        display: flex
        align-items: center
        margin-bottom: 0.25em
        font-size: 14px

    .filter-section-list.filter-section-list--full-width
      align-items: stretch


    .filter-section-list.filter-section-list--label
      .filter-item
        padding-left: 20px

        +until($desktop)
          padding-right: 95px



        .filter-item-text
          position: relative
          z-index: 2


        .color-indicator
          position: absolute
          float: left
          width: 10px
          border-radius: 10px
          background: transparent
          content: ''
          height: 100%
          left: 0
          top: 0
          transition: width 0.25s ease-in-out


        &.active
          position: relative

        &.active:after

          content: "x zrušit"

          +from($desktop)
            content: "x"

          position: absolute
          right: 15px


        &.active .filter-item-text,
        &:hover .filter-item-text
          color: #000

        &.active .color-indicator,
        &:hover .color-indicator
          display: block
          width: 100%



        &.active:hover



    .filter-section-list.filter-section-list--icons
      flex-wrap: wrap
      flex-direction: row

      .filter-item
        min-width: 100px
        min-height: 50px
        padding: 0 10px
        margin-right: 10px
        margin-bottom: 10px
        flex-direction: row

        .icon
          background-repeat: no-repeat
          width: 18px
          height: 27px
          background-size: contain
          margin-right: 10px


        &.active,
        &:hover
          background-color: $primary-dark-color
          color: #fff


        &.active,
        &:hover
          .icon svg
            fill: #fff


  &.open

    .filter-button-switch

      +until($desktop)
        height: 100%


    .filter-section-container
      display: block


    .filter-section-container
      display: block


    .icon-open
      display: none


    .icon-close
      display: block


  .icon-close
    display: none


  .filter-button-switch
    width: $filter-width
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16)

    +until($desktop)
      height: $filter-width


    &:hover
      background-color: #000
      color: #fff

      svg .a
        fill: #fff !important


    .filter-button-switch-icon-container
      text-align: center


</style>
<script>

import IconObjectBudova from "~/assets/images/icons/icon-object-budova.svg?inline";
import IconObjectDokument from "~/assets/images/icons/icon-object-dokument.svg?inline";
import IconObjectMisto from "~/assets/images/icons/icon-object-dokument.svg?inline";
import IconObjectMuzeum from "~/assets/images/icons/icon-object-muzeum.svg?inline";
import IconObjectPamatnik from "~/assets/images/icons/icon-object-pamatnik.svg?inline";
import IconObjectUlice from "~/assets/images/icons/icon-object-ulice.svg?inline";


export default {
  props: ["Typy", "Kategorie"],

   components: { IconObjectBudova, IconObjectDokument, IconObjectMisto,  IconObjectMuzeum, IconObjectPamatnik, IconObjectUlice },


  async asyncData({params, error, payload, store}) {


  },

  created() {

    this.$store.dispatch("setAktualniFiltrPolozky", this.activeFilterCategories);
    this.$store.dispatch("setAktualniFiltrTypPolozky", this.activeFilterTypes);

  },

  methods: {

    toggleFilterItem(filterItemName) {

      const idx = this.activeFilterCategories.indexOf(filterItemName);

      if (idx > -1 ) {

        this.activeFilterCategories = [...this.activeFilterCategories].filter(item => item !== filterItemName);

      } else {
        this.activeFilterCategories = [...this.activeFilterCategories, filterItemName];
      }

      this.$store.dispatch("setAktualniFiltrPolozky", this.activeFilterCategories);


    },

    toggleFilterTypeItem(filterItemTypeSlug) {

      const idx = this.activeFilterTypes.indexOf(filterItemTypeSlug);

      let activeFilterTypesCopy = [...this.activeFilterTypes];

      if (idx > -1 ) {

        this.activeFilterTypes = activeFilterTypesCopy.filter(activeItemSlug => activeItemSlug !== filterItemTypeSlug);

      } else {
        this.activeFilterTypes = [...activeFilterTypesCopy, filterItemTypeSlug];
      }

      this.$store.dispatch("setAktualniFiltrTypPolozky", this.activeFilterTypes);

    },

    toggleFilter() {

      this.showFilter = !this.showFilter;

    },

  },

  computed: {


  },



  mounted() {



  },

  data() {
    return {
      thisComponentStyles: {},
      showFilter: false,
      activeFilterCategories: this.Kategorie.map(kategorie => kategorie.name),
      activeFilterTypes: this.Typy.map(item => item.slug),
    }
  },

  head () {
    return {

    }
  }

}
</script>
