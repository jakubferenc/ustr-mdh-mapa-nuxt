<template lang="pug">

  .app-container

    <Header />

    main.main-container(role="main")
      <Nuxt />

    <Footer />

    .debug-bar(v-show="this.$config.dev")

</template>


<script>
export default {

}
</script>


