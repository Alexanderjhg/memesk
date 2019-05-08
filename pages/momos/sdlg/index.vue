<template>
    <v-layout row wrap>
      <script type="application/ld+json">
                {
                  "@context": "http://schema.org",
                  "@type": "Article",
                  "headline": "Momos sdlg.",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://memesk.site/momos/sdlg/"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.5",
                    "reviewCount": "11"
                  },
                
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://memesk.site/risa/memes-de-risas-2.webp",
                    "height": 500,
                    "width": 500
                  },
              
                  
                  "datePublished": "2019",
                  "dateModified": "2019",
                  "author": {
                    "@type": "Person",
                    "name": "Alexander Hurtado"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "MEMESK",
                    "logo":"https://memesk.site/ms-icon-150x150.webp"
                  }
            
                }
      </script>
      <v-flex xs12>
        <section>
  
          <!--  -->
          <div class=" mb-2">
            <span><strong><i>MOMOS SDLG</i></strong></span>
            <h1 class="title">MOMOS SDLG SUPER GRACIOSOS Y CHISTOSOS CON IMAGENES FANTASTICAS :v NUEVOS 2018 y 2019.</h1>
            <span><strong><i>Alexander Hurtado</i></strong></span>
            <v-divider class="my-2"></v-divider>
            <div>
              <h2 class="title">Momos SDLG muy shidoris espectaculares para disfrutar</h2>
              <p>Momazos sdlg papu :v, comparte los memes pas shidos que te he compartido en esta lista, si no comparte ella no te amara. los mejores momos sdlg para compartir en las redes sociales. <br>
            Imagenes con buenos chistes que te sacaran una ronrisa :D. descargalos facilmente.</p>
            </div>
          </div>
          <!--  -->
          <article>
            <v-layout row wrap justify-space-around>
              <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
                <article>
                  <div class="ml-4 pa-1 text-xs-center">
                    <blockquote>
                      <h3>{{`Meme sdlg ${index+1}`}}</h3>
                    </blockquote>
                  </div>
                  <img class="responsive" :src="`../../risa/memes-de-risas-${index + 1}.webp`" :alt="`momo-sdlg-${index+1}`" :title="`momo-sdlg-${index+1}`"
                    @click="imgF(`/risa/memes-de-risas-${index + 1}.webp`, index)">
                </article>
              </v-flex>
            </v-layout>
          </article>
          <!--  -->
          <article>
            <h2>Los momos sdlg son:</h2>
            <p>La verdad es que no tengo ni idea de que son momos sdlg, segun investige y es una parca registrada pero al pareces alguien la copio y le puso el packman.</p>
          </article>
          <!--  -->
          <article>
            <h2>Imagenes chistosas de momos sdlg para reir un rato entre amigos</h2>
            <p>Comparte esta imagen con tus compas en facebook, momos sdlg para todos :v muy graciosas y chistosas.</p>
          </article>
          <!--  -->
          <article>
            <h2>Caracteristicas de momos sdlg</h2>
            <p>Algunas cosas por la cual ver momos sdlg :</p>
            <ul>
              <li>Que se yo, dan risa. :v</li>
              <li>No sabes que significa pero igual estas aqui viendo</li>
              <li>Si no comparte ella no te amara nunca papu :v</li>
              <li>Porque si, las imagenes dan mucha risa jajaja</li>
            </ul>
          </article>
        </section>
      </v-flex>
      <v-dialog v-model="dialog" :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card>
  
          <img class="responsive" :src="thisImg" :alt="`meme-${index+1}`" :title="`meme-${index+1}`">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="dark" @click="dialog = false">cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </template>
  
  <script>
    import Logo from '~/components/Logo.vue'
    import VuetifyLogo from '~/components/VuetifyLogo.vue'
  
    export default {
      head() {
        return {
          title: 'Momos SDLG con muchas imagenes para morirse de la risa | Memesk.site',
          htmlAttrs: {
                      lang: 'es',
                  },
          meta: [
            { hid: 'description', name: 'description', content: 'Momos sdlg nuevos y chidos para morirse de la risa papu :v 2019 - 2018 ✅ Si no entras no tendras el amor de tu vida :v, ✅ Si no comparte no se te quita lo sad :[.' },
            { name: "keywords", content: "memes, momos, shidos, shidoris" },
          ],
          link:[
              { rel:'canonical', href:'https://memesk.site/momos/sdlg/'},
            ]
        }
      },
      components: {
        Logo,
        VuetifyLogo
      },
  
      data() {
        return {
          dialog: false,
          thisImg: '',
          index: 0,
          img: [
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false },
            { memes: false }
          ]
        }
      },
      methods: {
        imgF(x, index) {
          this.thisImg = x
          this.index = index
          this.dialog = true
        }
      },
    }
  </script>