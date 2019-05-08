<template>
  <v-layout row wrap>
    <script type="application/ld+json">
              {
                "@context": "http://schema.org",
                "@type": "Article",
                "headline": "Memes de risa.",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://memesk.site/memes-de-risa"
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
          <span><strong><i>MEMES DE RISA</i></strong></span>
          <h1 class="title">ESTOS MEMES DE RISA SON LOS MEJORES PARA COMPARTIR EN WHATSAPP 2018 y 2019.</h1>
          <span><strong><i>Alexander Hurtado</i></strong></span>
          <v-divider class="my-2"></v-divider>
          <div>
            <h2 class="title">Los mejores memes de risa del mundo para compartir con tu familia</h2>
            <p>Top mejores memes e risa a nivel mundial en risas, momos hechos para sacarte risas a montones. Comparte estas imagenes
              en whatsapp facebook o instagram. <br> Sacale una sonrisa a tu amigo, has que ria y comparta estos momasos
              jajaja.</p>
          </div>
        </div>
        <!--  -->
        <article>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
              <article>
                <div class="ml-4 pa-1 text-xs-center">
                  <blockquote>
                    <h3>{{`Meme de risa ${index+1}`}}</h3>
                  </blockquote>
                </div>
                <img class="responsive" :src="`/risa/memes-de-risas-${index + 1}.webp`" :alt="`meme-de-risa-${index+1}`" :title="`meme-de-risa-${index+1}`"
                  @click="imgF(`/risa/memes-de-risas-${index + 1}.webp`, index)">
              </article>
            </v-flex>
          </v-layout>
        </article>
        <!--  -->
        <article>
          <h2>Un meme de risa es :</h2>
          <p>Es una imagen con un chiste y este da mucha risa, te dan muchas ganas de compartirlos en las redes sociales
            con tus amigos.</p>
        </article>
        <!--  -->
        <article>
          <h2>Imagenes graciosas de memes de risa para grupos de whatsapp facebook e instagran 2018 y 2019</h2>
          <p>Las imagenes graciosas quen estas buscando estan en esta pagina web, y la actualizamos cada semana para que
            disfrutes una y otra ves los memes mas chistosos del mundo.</p>
        </article>
        <!--  -->
        <article>
          <h2>Caracteristicas de los memes de risa</h2>
          <p>Pocas pero potentes caracteristicas de los memes de risa :.</p>
          <ul>
            <li>Los memes de risa dan mucha risa</li>
            <li>Estos memes recibe muchos likes</li>
            <li>Dan a la persona muchas ganas de compartirlo</li>
            <li>Muchas personas comparten estos memes de risa</li>
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
  
  export default {
    head() {
      return {
        title: 'Memes de risa con imagenes muy chistosas - 2019 | Memesk.site',
        htmlAttrs: {
                    lang: 'es',
                },
        meta: [
          { hid: 'description', name: 'description', content: 'Memes de risa incomparables este 2019 ✅ imagenes de amor chistosas para amigos, ✅ pareja , amigos , whatsapp y todas las redes sociales, llenate de risas.' },
          { name: "keywords", content: "memes, memes de risa, memes chistosos" },
        ],
        link:[
            { rel:'canonical', href:'https://memesk.site/memes-de-risa'},
            ]
      }
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