<template>
  <v-app dark>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130844584-5"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'UA-130844584-5');
    </script>
    <script type='application/ld+json'>
      {
        "@context":"https:\/\/schema.org",
        "@type":"WebSite", 
        "@id":"#website",
        "url":"https:\/\/memesk.site\/",
        "name":"MEMESK",
        "potentialAction":{
          "@type":"SearchAction",
          "target":"https:\/\/memesk.site\/?s={search_term_string}",
          "query-input":"required name=search_term_string"
        }
      }
    </script>

    <a href="/">
      <div class="text-xs-center my-1">
        <img src="/android-icon-72x72.png" alt="Memes-logo" height="70px" width="70px" style="border-radius:50%" />
      </div>
    </a>
    <!--  -->
    <v-toolbar :clipped-left="clipped" class="nav-sticky">
      <a href="/">
        <img src="/android-icon-36x36.png" alt="Memes-logo-Pequeno" height="30px" width="30px" style="border-radius:50%" />
      </a>
      <v-spacer></v-spacer>
      <div>
        <a href="/" class="a mx-3 white--text">Home Memes</a>
        <a href="/memes-chistosos/" class="a mx-3 white--text hidden-sm-and-down">Memes Chistosos</a>
        <a href="/plantillas-de-momos/" class="a mx-3 white--text hidden-sm-and-down">Plantillas De Memes</a>
        <a href="/memes-de-amor/" class="a mx-3 white--text">Memes de amor</a>
        <a href="/memes-de-perros/" class="a mx-3 white--text hidden-sm-and-down hidden-sm-and-down">Memes de perros</a>
        <a href="/memes-de-risa/" class="a mx-3 white--text hidden-sm-and-down hidden-sm-and-down">Memes de risa</a>
      </div>
      <v-spacer></v-spacer>
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer" >
        <v-icon>menu</v-icon>
      </v-btn> -->
    </v-toolbar>
    <!-- background-image: url("https://firebasestorage.googleapis.com/v0/b/hurtado.appspot.com/o/cards%2FHappy%20Halloween!.png?alt=media&token=ae4f10b6-485a-43c7-acb2-1ec074682e33"); background-position: center center; -->
    <v-content>
      <!-- <v-container> -->
      <v-container>
        <v-layout row wrap>

          <v-flex md3>
            <v-list class="elevation-1">
              <v-list-tile href="/memes-chistosos">
                <v-list-tile-action>
                  <v-icon light>star</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Memes Chistosos</v-list-tile-title>
              </v-list-tile>
              <v-list-tile href="/plantillas-de-momos">
                <v-list-tile-action>
                  <v-icon light>star</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Plantillas De Momos</v-list-tile-title>
              </v-list-tile>
              <v-list-tile href="/memes-de-amor">
                <v-list-tile-action>
                  <v-icon light>star</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Memes de amor</v-list-tile-title>
              </v-list-tile>
              <v-list-tile href="/memes-de-perros">
                <v-list-tile-action>
                  <v-icon light>star</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>Memes de perros</v-list-tile-title>
              </v-list-tile>
            </v-list>
            <!-- <span class="mb-2"><strong>Mejor semero de la semana</strong></span>
            <v-list class="text-xs-center">
              <div >
                <v-avatar size="100" color="red" >
                  <v-img src="/Marcas.png" alt="Mejor-creador-de-memes"/>
                </v-avatar>
              </div>
              <v-list-tile @click.native="right = !right">
                <v-list-tile-action> 
                  <v-avatar size="25" color="red" >
                    <v-img src="/Marcas.png" alt="Mejor-creador-de-memes"/>
                  </v-avatar> 
                </v-list-tile-action>
                <v-list-tile-title>Alexander Hurtado</v-list-tile-title>
              </v-list-tile>
            </v-list> -->

            <v-divider></v-divider>

            <!-- <span class="mb-2"><strong>Mas cercanos</strong></span>
            
            <v-list>
              <v-list-tile @click.native="right = !right">
                <v-list-tile-action>
                    <v-avatar size="25" color="red" >
                      <v-img src="/Marcas.png" alt="Mejor-creador-de-memes"/>
                    </v-avatar> 
                </v-list-tile-action>
                <v-list-tile-title>Jose Jesus</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click.native="right = !right">
                <v-list-tile-action>
                    <v-avatar size="25" color="red" >
                      <v-img src="/Marcas.png" alt="Mejor-creador-de-memes"/>
                    </v-avatar>
                </v-list-tile-action>
                <v-list-tile-title>Ivan pintacasa</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click.native="right = !right">
                <v-list-tile-action>
                    <v-avatar size="25" color="red" >
                      <v-img src="/Marcas.png" alt="Mejor-creador-de-memes"/>
                    </v-avatar>
                </v-list-tile-action>
                <v-list-tile-title>Mariana josef</v-list-tile-title>
              </v-list-tile>
            </v-list> -->
          </v-flex>
          <!--  -->
          <!--  -->
          <v-flex xs12 md9 px-2>
            <nuxt />
          </v-flex>
          <!--  -->

        </v-layout>
      </v-container>
      <!-- </v-container> -->
    </v-content>
    <!--  -->
    <!-- <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <!--  -->
    <footer class="my-4 py-2">
      <a href="/">
        <div class="text-xs-center my-1">
          <img src="/android-icon-72x72.png" alt="Memes-logo-footer" height="70px" width="70px" style="border-radius:50%" />
        </div>
      </a>
      <!--  -->
      <div class="d-flex justify-center">
        <div class="text-xs-center my-2">
          <a href="/contacto" class="a mx-3 white--text">Contacto</a>
          <a href="/politica-de-cookies" class="a mx-3 white--text">Cookies</a>
          <a href="/politica-de-privacidad" class="a mx-3 white--text">Politica de privacidad</a>
          <a href="/aviso-legal" class="a mx-3 white--text">Aviso legal</a>
        </div>
      </div>
    </footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        // drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'logo'
      }
    }
  }
</script>

<style>
  .a.a {
    text-decoration: none;
  }

  .responsive {
    width: 100%;
  }

  .min-height {
    min-height: 150px
  }

  .nav-sticky {
    position: sticky;
    top: 0px;
    z-index: 1;
  }
</style>