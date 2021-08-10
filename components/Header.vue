<template lang="pug">
  header.header-main()

    .logo-nav
      .logo
      nav.breadcrumbs
        a(href="/index.html").item MDH Mapa

    nav.main-nav
      a(href="/").item Domů
      a(href="/mapy").item Mapy
      a(href="/objekty" ).item Objekty
      a(href="/clanky" ).item Blog
      a(href="/o-projektu" ).item O projektu

    nav.user-actions-nav
      a(href="/prihlasi").item Přihlásit
      a(href="/napiste-nam").item Napište nám


    .toggle-mobile-menu
      a(href="#") Menu
</template>
