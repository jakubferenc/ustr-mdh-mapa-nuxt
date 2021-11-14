<template lang="pug">

  .app-container

    <Header />

    main.main-container(role="main")
      <Nuxt />

    <Footer />

    <GalleryPopUp v-if="isImagePopUpActive" />

    .debug-bar(v-show="this.$config.dev")

</template>


<script>
export default {


  computed: {

    isImagePopUpActive() {

      const getData = Object.values(this.$store.state.aktualniImagePopUp);

      return getData && getData.length;

    },

  },

}
</script>


