<template>
  <v-layout row wrap>
    <script type="application/ld+json">
              {
                "@context": "http://schema.org",
                "@type": "Article",
                "headline": "Memes de perros.",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://memesk.site/memes-de-perros"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.5",
                  "reviewCount": "11"
                },
              
                "image": {
                  "@type": "ImageObject",
                  "url": "https://memesk.site/perros/memes-de-perros-2.webp",
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
          <span><strong><i>MEMES DE PERROS</i></strong></span>
          <h1 class="title">ESTOS MEMES DE PERROS SON TAN CHISTOSOS QUE ES IMPOSIBLE NO REIRSE.</h1>
          <span><strong><i>Alexander Hurtado</i></strong></span>
          <v-divider class="my-2"></v-divider>
          <div>
            <h2 class="title">Mejores imagenes chistosas de memes de perros y muy graciosas de perritos hechos memes</h2>
            <p>Empieza los <strong>memes de adorables perritos</strong> que te sacaran al menos una sonria con las caras de perros JAJAJA.
              <br> Es que nada mas de ver sus caras y ver su texto descriptivo es tan gracioso que los memes de perros le provocara una sonrisa
              al mas duro de los duros.</p>
          </div>
        </div>
        <!--  -->
        <article>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
              <article>
                <div class="ml-4 pa-1 text-xs-center">
                  <blockquote>
                    <h3>{{`Meme de perro ${index+1}`}}</h3>
                  </blockquote>
                </div>
                <img class="responsive" :src="`/perros/memes-de-perros-${index + 1}.webp`" :alt="`meme-${index+1}`" :title="`meme-${index+1}`"
                  @click="imgF(`/perros/memes-de-perros-${index + 1}.webp`, index)">
              </article>
            </v-flex>
          </v-layout>
        </article>
        <!--  -->
        <article>
          <h2>Un meme de perro es :</h2>
          <p>Es una imagen de un perro haciendo una cara chistosa y esta imagen es acompañada con un titulo que la mayoria
            de los casos es un chiste.</p>
        </article>
        <!--  -->
        <article>
          <h2>Los mejores memes de perros que encontraras en la web</h2>
          <p>En este articulo hay muchas imagene graciosas de perros haciendo algo gracioso, multiples razas incluyendo la
            <strong>chihuahua</strong> que es la raza mas chistosa en memes.</p>
        </article>
        <!--  -->
        <article>
          <h2>Caracteristicas de un buen meme de perros y perritos</h2>
          <p>Para que un meme de perro de mucha risa, tiene que tener estas caracteristicas :</p>
          <ul>
            <li>La cara del perro es muy graciosa</li>
            <li>La imagen relata un hecho que siempre le haces a tu perro</li>
            <li>El meme relata un hecho o momento que has hecho o has pasado</li>
            <li>El meme del perrito es tan gracioso que te dan muchas ganas de compartirlo</li>
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
        title: 'Memes de perros con imagenes muy chistosos divertidos | Memesk.site',
        htmlAttrs: {
                    lang: 'es',
                },
        meta: [
          { hid: 'description', name: 'description', content: 'Memes de perros y momos chistosos y graciosos de perritos y caras divertidas ✅ En especial los de rraza chihuahua y los pug ✅ para morirse de la risa.' },
          { name: "keywords", content: "memes, memes de perros, perritos" },
        ],
        link:[
            { rel:'canonical', href:'https://memesk.site/memes-de-perros'},
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
          { memes: false },
          { memes: false },
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