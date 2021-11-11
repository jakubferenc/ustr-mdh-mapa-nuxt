<template lang="pug">
  header.header-main()

    .logo-nav
      .logo
      nav.breadcrumbs
        NuxtLink(to="/").item MDH Mapa

    nav.main-nav
      NuxtLink(to="/").item Domů
      NuxtLink(to="/mapy/").item Mapy
      //- NuxtLink(to="/objekty/" ).item Objekty
      //- NuxtLink(to="/blog/" ).item Blog
      NuxtLink(to="/o-projektu/" ).item O projektu

    nav.user-actions-nav
      //- NuxtLink(to="/prihlasi").item Přihlásit
      NuxtLink(to="/napiste-nam").item Napište nám


    .toggle-mobile-menu
      NuxtLink(to="#") Menu
</template>
