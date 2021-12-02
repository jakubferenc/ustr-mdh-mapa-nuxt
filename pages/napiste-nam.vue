<template lang="pug">

  .page


</template>

<style lang="sass">


</style>
<script>

export default {


    async asyncData ({store}) {



    },

    computed: {


    },

    mounted() {


    },

    data() {
      return {
        maps: {},
        title: `Napište nám`,
      }
    },

    head () {
      return {
        title: `${this.title} — ${this.$config.globalTitle}`,
        htmlAttrs: {
          class: 'index'
        }
      }
    }

}
</script>
