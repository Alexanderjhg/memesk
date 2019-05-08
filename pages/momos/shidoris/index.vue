<template>
  <v-layout row wrap>
    <script type="application/ld+json">
              {
                "@context": "http://schema.org",
                "@type": "Article",
                "headline": "Momos shidoris.",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://memesk.site/momos/shidoris/"
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
          <span><strong><i>MOMOS SHIDORIS</i></strong></span>
          <h1 class="title">LOS MOMOS MAS SHIDORIS PARA COMPARTIR CON TUS AMIGOS Y MORIR DE RISA CON ESTAS IMAGENES 2018 y 2019.</h1>
          <span><strong><i>Alexander Hurtado</i></strong></span>
          <v-divider class="my-2"></v-divider>
          <div>
            <h2 class="title">Momos muy shidoris espectaculares para disfrutar</h2>
            <p>Los momos shidoris son especiales porque son muy shidos alv :v, solo hace falta una buena imagen, un buen chiste y eso basta para hacer reir a las personas aunque esten sad sdlg. <br>
              A continuacion te presento un listado con las mejores imagenes de momos shidoris graciosas para que las disfrutes con tus amigos y las compartas en las redes sociales este 2019 o 2018 :v.</p>
          </div>
        </div>
        <!--  -->
        <article>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
              <article>
                <div class="ml-4 pa-1 text-xs-center">
                  <blockquote>
                    <h3>{{`Meme shidoris ${index+1}`}}</h3>
                  </blockquote>
                </div>
                <img class="responsive" :src="`../../risa/memes-de-risas-${index + 1}.webp`" :alt="`meme-shidoris-${index+1}`" :title="`meme-shidoris-${index+1}`"
                  @click="imgF(`/risa/memes-de-risas-${index + 1}.webp`, index)">
              </article>
            </v-flex>
          </v-layout>
        </article>
        <!--  -->
        <article>
          <h2>Un momo shidori es :</h2>
          <p>Un meme chidoris es una imagen chistosa muy shida para la gente shodoris que anda compartiendo memes en las redes sociales.</p>
        </article>
        <!--  -->
        <article>
          <h2>Imagenes chistosas de memes shidoris :v de amor y sad</h2>
          <p>Comparte esta imagenes shidas con tus compas en las redes sociales :v, repoio. <br>
            A tus compas sad le gustaran estas fotos de risa shidas.</p>
        </article>
        <!--  -->
        <article>
          <h2>Caracteristicas de los momos shidoris</h2>
          <p>Los memes shidoris son espectaculares y te digo porque :</p>
          <ul>
            <li>Son shidoris</li>
            <li>A tus compas le dan risa</li>
            <li>El que esta sad ya no estara sad</li>
            <li>Porque ella no te ama :'v</li>
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
        title: 'Momos shidoris con imagenes - 2019 shidos para reir | Memesk.site',
        htmlAttrs: {
                    lang: 'es',
                },
        meta: [
          { hid: 'description', name: 'description', content: 'Momos shidoris para morirse de ma risa 2019 - 2018 ✅ imagenes graciosas de memes, ✅ comparte con tus amigos y familiares fotos de risa.' },
          { name: "keywords", content: "memes, momos, shidos, shidoris" },
        ],
        link:[
            { rel:'canonical', href:'https://memesk.site/momos/shidoris/'},
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