<template lang="pug">
  footer.main-footer

    .footer-section.footer-section-social

      .footer-subsection.section-newsletter.is-hidden

        h2.section-title Odebírejte náš newsletter

        .section-content

          input(type="text")

          button.button.button-submit ODEBÍRAT


      .footer-subsection.social-icons

        h2.section-title Jsme na sociálních sítích #mdhmapa

        .section-content

          .social-icons-list
            .social-icon
              .icon
                img(src="~//assets/images/icons/social-facebook.svg" alt="")
              .text Facebook

            .social-icon
              .icon
                img(src="~//assets/images/icons/social-instagram.svg" alt="")
              .text Instagram

            .social-icon
              .icon
                img(src="~//assets/images/icons/social-youtube.svg" alt="")
              .text Youtube


    .main-footer-content-in

      .footer-section.footer-section-links

        .col

          .title O projektu
          .content
            p Mapa vznikla v rámci projektu Ministerstva kultury ČR NAKI II (DG18P02OVV045) – Muzeum dělnického hnutí v 21. století. Prezentace práce s muzejní sbírkou doby státního socialismu a způsoby užití jejího materiálu k potřebám odborné a široké veřejnosti.


        .col

          .title Na projektu spolupracovali
          .content

            .logos

              .logo
                .image
                  <a href="https://nm.cz">
                    img(src="~/assets/images/icons/logo-nm.svg" alt="Logo Národního muzeua")
                  </a>
                .text <a href="https://nm.cz">Národní muzeum</a>

              .logo
                .image
                  <a href="https://ustrcr.cz">
                    img(src="~/assets/images/icons/logo-ustr.svg" alt="Logo Ústavu pro studium totalitních režim")
                  </a>
                .text <a href="https://ustrcr.cz">Ústav pro studium totalitních režimů</a>


        .col
          .col-important-links

            .title Důležité odkazy
            .content
              p.item <a href="https://mdh21.cz">Muzeum dělnického hnutí v 21. století</a>
              p.item <a href="https://nm.cz">Národní muzeum</a>
              p.item <a href="https://ustrcr.cz">Ústav pro studium totalitních režimů</a>


</template>
<style lang="sass">
  .col-important-links
    .item
      margin-bottom: .5em
</style>
