<template lang="pug">
  header.header-main()

    .logo-nav
      .logo
      nav.breadcrumbs
        NuxtLink(to="/").item Mapa Muzea dělnického hnutí v 21. století

    nav.main-nav
      NuxtLink(to="/").item Domů
      NuxtLink(to="/mapy/").item.item-mapy Mapy
      //- NuxtLink(to="/objekty/" ).item Objekty
      //- NuxtLink(to="/blog/" ).item Blog
      NuxtLink(to="/o-projektu/" ).item O projektu

    nav.user-actions-nav
      //- NuxtLink(to="/prihlasi").item Přihlásit
      NuxtLink(to="/napiste-nam").item Napište nám


    .toggle-mobile-menu
      NuxtLink(to="#") Menu
</template>
<style lang="sass">

  .header-main
    display: flex
    justify-content: space-between
    align-items: center


  .user-actions-nav
    visibility: hidden


  html.page-mapy .main-nav .item-mapy
    text-decoration: underline

</style>
