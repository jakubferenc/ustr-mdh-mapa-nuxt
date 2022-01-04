<template lang="pug">

  main

    .main-container(data-component="map-detail-view")

      FilterObjects(:Typy="mapaTypy" :Kategorie="mapaKategorie" :TypyAktivni="mapaTypyAktivniPlainNameOnly" :KategorieAktivni="mapaKategorieAktivniPlainNameOnly")

      .main-content(data-component="list-objects-container")

        .main-content-top-bar
          NuxtLink.icon-container.icon-back(:to="`/mapa/${mapa.slug}/`")
            <svg xmlns="http://www.w3.org/2000/svg" width="19.245" height="28" viewBox="0 0 19.245 28"><defs><style>.a{fill:#1a1818;}</style></defs><g transform="translate(-634.499 -538.828)"><path class="a" d="M645.238,566.828l-10.739-14,10.739-14"/><rect class="a" width="10.158" height="10.158" transform="translate(643.586 547.749)"/></g></svg>
            span.icon-text Zpět


        <ObjectDetail v-if="isShowDetail" v-on:card-detail-close="cardDetailClose()" :ThisObject="activeObjectData" />

        div(data-component="list-objects")

          h1.title {{mapa.name}}

          .cards-container

            ObjectThumb(v-if="objektyPresFiltr && objektyPresFiltr.length" v-for="(thisObject, index) in objektyPresFiltr" :key="index" :ThisObject="thisObject" @click.native="cardDetailOpen(thisObject)")

      client-only
        .mapbox(v-if="objektyPresFiltr && objektyPresFiltr.length" id="mapbox"  data-component="mapbox")

            l-map(ref="mapbox" :options="{scrollWheelZoom: false}" :zoom="7" :center="[50.08804,14.42076]")
              l-tile-layer(
                id='',
                accessToken='pk.eyJ1IjoiamFrdWJmZXJlbmMiLCJhIjoiY2tjbTNjbDI2MW01NzJ5czUzNGc0Y3FwNyJ9.bTpq3aGIwEIUqRkxlMOvCw',
                attribution="Mapová data ÚSTR | Podkladová mapa &copy; <a href='//www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='//creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>"
                url="https://api.mapbox.com/styles/v1/jakubferenc/ckfnqth7411u319o31xieiy4n/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFrdWJmZXJlbmMiLCJhIjoiY2tjbTNjbDI2MW01NzJ5czUzNGc0Y3FwNyJ9.bTpq3aGIwEIUqRkxlMOvCw"
              )
              v-marker-cluster(ref="clusterRef" :options="{showCoverageOnHover: false, zoomToBoundsOnClick: true, maxClusterRadius:8, removeOutsideVisibleBounds: true}")
                l-marker(v-for="item in objektyPresFiltr" :ref="`marker-${item.id}`" :key="item.id" :lat-lng="item.LatLng" @click="markerClickHandler(item, $event)")

                  l-icon(:icon-anchor="[0,0]" :icon-size="[40, 40]" )
                    .map-thumb-icon-container(:data-marker-id="item.id" :data-coords="item.LatLng")
                      .marker-popup(:style="`background-color: ${item.categoryColor} `")
                        .layer-bar
                          .meta.meta-category Kategorie: {{ item.layer }}
                        .card-content
                          .title-bar
                            h1.card-title.marker-popup-title {{item.name}}

                          .footer-bar
                            .meta.meta-address
                              div(v-if="item.exists === false")
                                s GPS: {{item.y}}, {{item.x}}
                              div(v-else)
                                | GPS: {{item.y}}, {{item.x}}

                      .mdh-map-icon.map-thumb-icon(aria-label="" :data-date-start="item.date_start" :data-icon-type="item.type" :data-marker-layer="item.layer" :data-marker-title="item.name" :style="`background-color: ${item.categoryColor} `")

      .view-switch(data-component="view-switch")
        .heading.is-sr-only Zobrazení mapy
        nav.view-switch-nav
          a(href="#" rel="default").item.active
            <svg id="view-switch-icon-objects-map" xmlns="http://www.w3.org/2000/svg" width="17.056" height="26.332" viewBox="0 0 17.056 26.332">
              <g id="Group_900" data-name="Group 900" transform="translate(8.815)">
                <path id="Path_250" data-name="Path 250" d="M1145.116,324.53h-.011v.389h.012Z" transform="translate(-1145.105 -322.169)" fill="#a0a0a0"/>
                <path id="Path_251" data-name="Path 251" d="M1145.1,398.416v.389h.051v-.389Z" transform="translate(-1145.105 -384.554)" fill="#a0a0a0"/>
                <path id="Path_252" data-name="Path 252" d="M1145.118,327.419v-.389h-.012v.389Z" transform="translate(-1145.105 -324.28)" fill="#a0a0a0"/>
                <path id="Path_253" data-name="Path 253" d="M1145.153,395.915h-.048v.389h.049Z" transform="translate(-1145.105 -382.443)" fill="#a0a0a0"/>
                <path id="Path_254" data-name="Path 254" d="M1145.122,309.363l.008,2.361a5.945,5.945,0,0,1,.04,11.889l.041,12.082,6.984-13.4a9.542,9.542,0,0,0,1.166-4.573A8.315,8.315,0,0,0,1145.122,309.363Z" transform="translate(-1145.119 -309.363)" fill="#a0a0a0"/>
                <path id="Path_255" data-name="Path 255" d="M1150.344,334.7a5.173,5.173,0,0,0-5.154-5.167l.035,10.333A5.172,5.172,0,0,0,1150.344,334.7Z" transform="translate(-1145.177 -326.393)" fill="#a0a0a0"/>
              </g>
              <g id="Group_901" data-name="Group 901" transform="translate(0 0)">
                <rect id="Rectangle_357" data-name="Rectangle 357" width="3.706" height="4.68" transform="translate(0 15.96)" fill="#a0a0a0"/>
                <rect id="Rectangle_358" data-name="Rectangle 358" width="3.706" height="4.68" transform="translate(0 21.28)" fill="#a0a0a0"/>
                <rect id="Rectangle_359" data-name="Rectangle 359" width="3.706" height="4.68" transform="translate(0 10.64)" fill="#a0a0a0"/>
                <rect id="Rectangle_360" data-name="Rectangle 360" width="3.706" height="4.68" transform="translate(0 5.32)" fill="#a0a0a0"/>
                <rect id="Rectangle_361" data-name="Rectangle 361" width="3.706" height="4.68" transform="translate(4.353 21.28)" fill="#a0a0a0"/>
                <rect id="Rectangle_362" data-name="Rectangle 362" width="3.706" height="4.68" transform="translate(4.353 15.96)" fill="#a0a0a0"/>
                <rect id="Rectangle_363" data-name="Rectangle 363" width="3.706" height="4.68" transform="translate(4.353 10.64)" fill="#a0a0a0"/>
                <rect id="Rectangle_364" data-name="Rectangle 364" width="3.706" height="4.68" transform="translate(4.353 5.32)" fill="#a0a0a0"/>
                <rect id="Rectangle_365" data-name="Rectangle 365" width="3.706" height="4.68" transform="translate(4.353 0)" fill="#a0a0a0"/>
                <rect id="Rectangle_366" data-name="Rectangle 366" width="3.706" height="4.68" transform="translate(0 0)" fill="#a0a0a0"/>
              </g>
            </svg>
            span.icon-text Vše

          a(href="#" rel="map").item
            <svg id="icon-view-switch-map" xmlns="http://www.w3.org/2000/svg" width="16.483" height="26.332" viewBox="0 0 16.483 26.332">
              <path id="Path_256" data-name="Path 256" d="M983.091,118.538a8.319,8.319,0,0,0-8.244,8.358,10.067,10.067,0,0,0,1.239,4.835l7.13,13.139,6.949-13.4a9.542,9.542,0,0,0,1.166-4.573A8.315,8.315,0,0,0,983.091,118.538Zm0,13.862a5.556,5.556,0,1,1,5.556-5.556A5.556,5.556,0,0,1,983.089,132.4Z" transform="translate(-974.847 -118.538)" fill="#a0a0a0"/>
              <circle id="Ellipse_82" data-name="Ellipse 82" cx="4.811" cy="4.811" r="4.811" transform="translate(1.437 8.306) rotate(-45)" fill="#a0a0a0"/>
            </svg>
            span.icon-text Mapa

          a(href="#" rel="objects").item
            <svg id="icon-view-switch-objects" xmlns="http://www.w3.org/2000/svg" width="17.129" height="26.524" viewBox="0 0 17.129 26.524">
              <rect id="Rectangle_367" data-name="Rectangle 367" width="3.787" height="4.781" transform="translate(0 16.307)" fill="#9f9f9f"/>
              <rect id="Rectangle_368" data-name="Rectangle 368" width="3.787" height="4.781" transform="translate(0 21.742)" fill="#9f9f9f"/>
              <rect id="Rectangle_369" data-name="Rectangle 369" width="3.787" height="4.781" transform="translate(0 10.871)" fill="#9f9f9f"/>
              <rect id="Rectangle_370" data-name="Rectangle 370" width="3.787" height="4.781" transform="translate(13.342 10.871)" fill="#9f9f9f"/>
              <rect id="Rectangle_371" data-name="Rectangle 371" width="3.787" height="4.781" transform="translate(0 5.435)" fill="#9f9f9f"/>
              <rect id="Rectangle_372" data-name="Rectangle 372" width="3.787" height="4.781" transform="translate(13.342 16.307)" fill="#9f9f9f"/>
              <rect id="Rectangle_373" data-name="Rectangle 373" width="3.787" height="4.781" transform="translate(4.447 21.742)" fill="#9f9f9f"/>
              <rect id="Rectangle_374" data-name="Rectangle 374" width="3.787" height="4.781" transform="translate(13.342 5.435)" fill="#9f9f9f"/>
              <rect id="Rectangle_375" data-name="Rectangle 375" width="3.787" height="4.781" transform="translate(8.895 21.742)" fill="#9f9f9f"/>
              <rect id="Rectangle_376" data-name="Rectangle 376" width="3.787" height="4.781" transform="translate(13.342 21.742)" fill="#9f9f9f"/>
              <rect id="Rectangle_377" data-name="Rectangle 377" width="3.787" height="4.781" transform="translate(4.447 16.307)" fill="#9f9f9f"/>
              <rect id="Rectangle_378" data-name="Rectangle 378" width="3.787" height="4.781" transform="translate(4.447 10.871)" fill="#9f9f9f"/>
              <rect id="Rectangle_379" data-name="Rectangle 379" width="3.787" height="4.781" transform="translate(4.447 5.435)" fill="#9f9f9f"/>
              <rect id="Rectangle_380" data-name="Rectangle 380" width="3.787" height="4.781" transform="translate(8.895 10.871)" fill="#9f9f9f"/>
              <rect id="Rectangle_381" data-name="Rectangle 381" width="3.787" height="4.781" transform="translate(8.895 5.435)" fill="#9f9f9f"/>
              <rect id="Rectangle_382" data-name="Rectangle 382" width="3.787" height="4.781" transform="translate(4.447)" fill="#9f9f9f"/>
              <rect id="Rectangle_383" data-name="Rectangle 383" width="3.787" height="4.781" transform="translate(8.895)" fill="#9f9f9f"/>
              <rect id="Rectangle_384" data-name="Rectangle 384" width="3.787" height="4.781" transform="translate(13.342)" fill="#9f9f9f"/>
              <rect id="Rectangle_385" data-name="Rectangle 385" width="3.787" height="4.781" fill="#9f9f9f"/>
              <rect id="Rectangle_386" data-name="Rectangle 386" width="3.787" height="4.781" transform="translate(8.895 16.307)" fill="#9f9f9f"/>
            </svg>
            span.icon-text Objekty

          //
            a(href="#" rel="timeline").item.is-hidden
              <svg id="icon-view-switch-timeline" xmlns="http://www.w3.org/2000/svg" width="17.424" height="26.164" viewBox="0 0 17.424 26.164">
                <path id="Path_247" data-name="Path 247" d="M938.838,872.136a8.477,8.477,0,1,0,8.477,8.477A8.477,8.477,0,0,0,938.838,872.136Zm-.306,8.784v-7.5h.613v6.884h5.729v.613Z" transform="translate(-929.901 -872.136)" fill="#9f9f9f"/>
                <path id="Path_248" data-name="Path 248" d="M943.865,1021.435h-13.9l-2.6-1.941,2.6-1.941h13.9Z" transform="translate(-927.361 -995.271)" fill="#9f9f9f"/>
                <path id="Path_249" data-name="Path 249" d="M933.361,987.043h13.9l2.6,1.941-2.6,1.941h-13.9Z" transform="translate(-932.441 -969.436)" fill="#9f9f9f"/>
              </svg>
              span.icon-text Čas. osa



</template>

<style lang="sass">

  [data-component='view-switch']
    position: absolute
    top: $base-mobile-side-margin * 2 /* the same as .list-objects-detail button back margin top */
    right: 60px
    z-index: 9
    width: auto
    padding: 0 $base-mobile-side-margin
    height: 60px
    background-color: #fff
    border-radius: 10px
    box-shadow: 0 0.2em 0.5em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02)

    .view-switch-nav
      display: flex
      justify-content: center
      align-items: center
      height: 100%

    .item
      margin-top: 7px /* :TODO: */
      margin-right: 10px
      position: relative
      display: flex
      justify-content: center

      .icon-text
        font-size: 12px
        margin-left: 1em
        margin-top: .25em
        color: $active-gray

      &:last-of-type
        margin-right: 0
        &::after
          content: none

      &:after
        content: ''
        width: 1px
        height: 30px
        background: $passive-gray
        margin-left: 10px
        display: inline-block
        position: relative
        top: -3px

      &
        svg *
          fill: $active-gray


      &.active,
      &:hover
        svg *
          fill: #000

        .icon-text
          color: #000


    .item[rel="default"]

      display: none

      @include from($widescreen)
        display: flex

  .map-thumb-icon
    box-shadow: 0 0.2em 0.5em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%)

    $iconSize: 40px

    background-color: #fff
    width: $iconSize
    height: $iconSize
    border-radius: $iconSize
    background-repeat: no-repeat
    background-position: center
    background-size: 15px auto
    transition: width, heigh, border-radius 0.25s ease-in-out



  .leaflet-marker-icon

    &.inactive

      pointer-events: none
      opacity: 0.4

  .map-thumb-icon-container

    &.active
      z-index: 999 !important

      .marker-popup
        display: block

      .map-thumb-icon

        opacity: 1

    &.inactive

      pointer-events: none

      .map-thumb-icon
        opacity: 0.4




  .leaflet-marker-icon,
  .leaflet-marker-icon[style]

    &:hover
      z-index: 9999 !important

  .map-thumb-icon-container
    position: relative
    z-index: 99


    &:hover

      &::before
        content: ""
        position: absolute
        width: 218px
        height: 300px
        background: none
        bottom: 0
        z-index: -1

      .marker-popup
        display: block

  .marker-popup
    box-shadow: 0 0.2em 0.5em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%)
    display: none
    position: absolute
    bottom: calc(40px + 1rem)
    width: 218px
    min-height: 50px
    border-radius: 10px
    padding: 15px 10px

    font-family: "Roboto Condensed", sans-serif

    font-size: 13px



    .layer-bar
      margin-bottom: 1rem


    .footer-bar
      margin-top: 1rem

    .marker-popup-title
      font-weight: bold




</style>

<script>
export default {

    async asyncData({params, error, payload, store, $axios}) {

      if (payload) {

        const mapa = payload;

        const defaultActiveFilterCategories = mapa.categories.map(kategorie => kategorie.name);
        const defaultActiveFilterTypes = mapa.types.map(item => item.slug);

        await store.dispatch("setAktualniFiltrPolozky", defaultActiveFilterCategories);
        await store.dispatch("setAktualniFiltrTypPolozky", defaultActiveFilterTypes);

        return {
          mapa,
        }

      } else {

        //:TODO: check if in store, it is cached, so that when we have results stored in the store, we just return the array of "stranka" items

        await store.dispatch("getMapy");

        let mapa = Object.keys(store.state.mapy)
        .map(key => {
          return store.state.mapy[key];
        })
        .filter(mapa => mapa.slug == params.slug);

        mapa = mapa[0];

        const defaultActiveFilterCategories = mapa.categories.map(kategorie => kategorie.name);
        const defaultActiveFilterTypes = mapa.types.map(item => item.slug);

        await store.dispatch("setAktualniFiltrPolozky", defaultActiveFilterCategories);
        await store.dispatch("setAktualniFiltrTypPolozky", defaultActiveFilterTypes);

        return {
          mapa,
        }

      }

    },

    computed: {

      objektyDefault() {
        return this.mapa.objects;
      },

      mapaNazev() {

        return this.mapa.name;

      },

      mapaTypy() {
        return this.mapa.types;
      },

      mapaKategorie() {
        return this.mapa.categories;
      },

      mapaTypyAktivniPlainNameOnly() {
        return [...this.$store.state.aktualniFiltrTypPolozky];
      },

      mapaKategorieAktivniPlainNameOnly() {
        return [...this.$store.state.aktualniFiltrPolozky];
      },

      objektyPresFiltr() {

        let objekty = [...this.mapa.objects];

        const activeCategories = this.mapaKategorieAktivniPlainNameOnly;

        const activeTypes = this.mapaTypyAktivniPlainNameOnly;

        // do filtering

        if (objekty && objekty.length && objekty.length > 0) {

          objekty = objekty.filter(item => activeCategories.includes(item.layer));
          objekty = objekty.filter(item => activeTypes.includes(item.type));


        }

        return objekty;

      },

      autori() {

        const authorsEdited = Object.keys(this.mapa.authors).map(key => this.mapa.authors[key]);


        return authorsEdited;
      },


    },


    methods: {

      enableAllInactiveMarkers() {

        const $markers = document.querySelectorAll('.map-thumb-icon-container, .marker-cluster.inactive');
        Array.from($markers).forEach( ($marker) => {

          $marker.classList.remove('inactive');
          $marker.classList.remove('active');

        });

      },

      disableAllInactiveMarkers(markerOfObjectID) {

        const $markers = document.querySelectorAll('.map-thumb-icon-container, .marker-cluster');
        Array.from($markers).forEach( ($marker) => {

          const $markerReal = $marker.querySelector('.map-thumb-icon');


          if (markerOfObjectID != $marker.dataset.markerId) {
            $marker.classList.add('inactive');
          } else {

            $marker.classList.add('active');

          }



        });

      },

      cardDetailClose() {

        this.isShowDetail = false;
        this.activeObjectData = {};

        this.enableAllInactiveMarkers();


        const $listViewContainer = document.querySelector('[data-component="list-objects-container"]');

        $listViewContainer.classList.remove('inactive');



        $listViewContainer.scrollTop = this.scrollTopPositionBeforeDetailOpen;


        // enableAllInactiveMarkers();
        // disableAllActiveMarkers();

      },

      cardDetailOpen(thisObject, fromMarker = false) {

        this.isShowDetail = true;
        this.activeObjectData = thisObject;

        this.disableAllInactiveMarkers(thisObject.id);

        const $listViewContainer = document.querySelector('[data-component="list-objects-container"]');

        /// save scroll position so that we can return back to it once detail is closed
        this.scrollTopPositionBeforeDetailOpen = $listViewContainer.scrollTop;
        $listViewContainer.scrollTop = 0;

        // prepare list view container for showing the object detail
        $listViewContainer.classList.add('inactive');


        this.$refs.mapbox.mapObject.flyTo([parseFloat(thisObject.y), parseFloat(thisObject.x)], this.$config.appConfig.mapbox.zoomNumberOnDetail);



      },

      markerClickHandler(thisObject, action) {

       this.cardDetailOpen(thisObject, true);

      }

    },

    mounted() {


    console.log("hello!");

    console.log("mapa from async cats mounted", this.mapa.categories);
    console.log("mapa from async types mounted", this.mapa.types);


      const $mapDetailView = document.querySelector('[data-component="map-detail-view"]');

      // map view switch
      const $mapViewSwitch = document.querySelector('[data-component="view-switch"]');
      const $mapViewSwitchLinks = $mapViewSwitch.querySelectorAll('.item');


      if ($mapViewSwitchLinks) {
        Array.from($mapViewSwitchLinks).forEach($item => {

          $item.addEventListener('click', (e) => {

            const viewSwitchAction = e.currentTarget.getAttribute('rel');

            $mapDetailView.setAttribute('data-mode', `${viewSwitchAction}`);

            if (viewSwitchAction === 'default') {

              this.$refs.mapbox.mapObject.invalidateSize();

            }

            if (viewSwitchAction === 'map') {

              this.$refs.mapbox.mapObject.invalidateSize();

            }

            Array.from($mapViewSwitchLinks).forEach($item => {

              $item.classList.remove('active');

            });

            e.currentTarget.classList.add('active');


          });

        });
      }

      // functions
      ////////////////////////////////////////////////////////////


      const closeAllLeafletTooltips = () => {

        const $tooltips = document.querySelectorAll('.leaflet-popup');
        Array.from($tooltips).forEach( ($item) => {
          $item.remove();
        });

      };


    },

    data() {
      return {
        vm: this,
        scrollTopPositionBeforeDetailOpen: null,
        activeObjectData: null,
        isShowDetail: false,
      }
    },

    head () {
      return {
        title: `${this.mapaNazev} — ${this.$config.globalTitle}`,
        htmlAttrs: {
          class: 'no-footer page-mapy'
        }
      }
    }

}
</script>
