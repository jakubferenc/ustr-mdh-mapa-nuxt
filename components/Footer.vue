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
            a.social-icon(href="https://www.facebook.com/dejepis" title="Facebookový profil Dějepisu 21")
              .icon
                img(src="~/assets/images/icons/social-facebook.svg" alt="")
              .text Facebook

            a.social-icon(href="https://www.instagram.com/ustr_cr/" title="Instagramový profil ÚSTR ČR")
              .icon
                img(src="~/assets/images/icons/social-instagram.svg" alt="")
              .text Instagram

            a.social-icon(href="https://www.youtube.com/channel/UCdtql9Bo-CR8n3QRfFr_KKQ/featured" title="YouTube kanál Oddělení vzdělávání ÚSTR")
              .icon
                img(src="~/assets/images/icons/social-youtube.svg" alt="")
              .text Youtube


    .main-footer-content-in

      .footer-section.footer-section-links

        .col

          .title O projektu
          .content
            p(v-html="$config.obsah.mapy.aboutText")


        .col

          .title Na projektu spolupracovali
          .content

            .logos

              .logo
                .image
                  <a href="#">
                    img(src="~/assets/images/icons/logo-nm.svg" alt="Logo Národního muzeua")
                  </a>
                .text <a href="#">Národní muzeum</a>

              .logo
                .image
                  <a href="#">
                    img(src="~/assets/images/icons/logo-ustr.svg" alt="Logo Ústavu pro studium totalitních režim")
                  </a>
                .text <a href="#">Ústav pro studium totalitních režimů</a>


        .col
          .col-important-links

            .title Důležité odkazy
            .content
              p.item <a href="#">Muzeum dělnického hnutí v 21. století</a>
              p.item <a href="#">Národní muzeum</a>
              p.item <a href="#">Ústav pro studium totalitních režimů</a>


</template>
<style lang="sass">
  .col-important-links
    .item
      margin-bottom: .5em
</style>
