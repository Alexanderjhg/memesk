<template>
  <v-layout row wrap>
    <script type="application/ld+json">
              {
                "@context": "http://schema.org",
                "@type": "Article",
                "headline": "Plantillas de momos.",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://memesk.site/plantillas-de-momos"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.5",
                  "reviewCount": "11"
                },
              
                "image": {
                  "@type": "ImageObject",
                  "url": "https://memesk.site/plantillas/plantilla-de-meme-2.webp",
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
          <span><strong><i>PLANTILLAS DE MOMOS</i></strong></span>
          <h1 class="title">PLANTILLAS DE MOMOS MAS UTILIZADAS EN EL 2019 Y 2018.</h1>
          <span><strong><i>Alexander Hurtado</i></strong></span>
          <v-divider class="my-2"></v-divider>
          <div>
            <h2 class="title">Mejores momos para compartir con tus familiares y amigos</h2>
            <p> <strong>Plantillas de momos - momos para descargar</strong>, crear y compartir en las redes sociales con
              tus amigos y familiares. <br> Disfruta de la seleccion de momos mas utilizados en el <strong>2018 y 2019</strong>,
              los momos que estan siendo <strong>tendencia para editar y subir a las redes sociales</strong>.</p>
          </div>
        </div>
        <!--  -->
        <article>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
              <article>
                <div class="ml-4 pa-1 text-xs-center">
                  <blockquote>
                    <h3>{{`Plantilla de momos ${index+1}`}}</h3>
                  </blockquote>
                </div>
                <img class="responsive" :src="`/plantillas/plantilla-de-meme-${index + 1}.webp`" :alt="`plantilla-de-momo-${index+1}`" :title="`plantilla-de-momo-${index+1}`"
                  @click="imgF(`/plantillas/plantilla-de-meme-${index + 1}.webp`, index)">
              </article>
            </v-flex>
          </v-layout>
        </article>
        <!--  -->
        <article>
          <h2>Una plantilla de momo es :</h2>
          <p>Una plantilla de momo es una imagen que no esta completa, la mayoria esta en un 50% completadas para que los usuarios puedan terminarla
            a sus gustos y con la palabras que ellos quieran.</p>
        </article>
        <!--  -->
        <article>
          <h2>Las mejores plantillas mas utilizadas de momos estan en esta web</h2>
          <p>Los <strong>momos son tendencia</strong>, cada vez hay mas memes y mas plantillas, son muchas que no sabes cual
            hacer. Solo las personas con gran creatividad son capaces de crear memes desde una plantillas en blanco y hacer
            reir a mucas personas.</p>
        </article>
        <!--  -->
        <article>
          <h2>Caracteristicas de una buena plantilla de momo para que sea tendencia</h2>
          <p>Para que una plantilla de momo sea una buena opcion para editar tiene que cumplir con estas condiciones :</p>
          <ul>
            <li>Editable para cualquier tipo de chistes</li>
            <li>Se adapta bien a muchos chistes</li>
            <li>Rapidamente aceptado por la comunidad online</li>
            <li>La imagen o la frase tiene que ser muy chistosa</li>
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
        title: '> Imagenes de plantillas para momos - descargas gratis | Memesk.site',
        htmlAttrs: {
                    lang: 'es',
                },
        meta: [
          { hid: 'description', name: 'description', content: 'Plantillas de momos muy descargadas este 2018 y 2019 ✅ para compartir tus mejores momos ✅ tienes que descargas unas plantillas en blanco editables.' },
          { name: "keywords", content: "memes, memes de risa, memes chistosos" },
        ],
        link:[
            { rel:'canonical', href:'https://memesk.site/plantillas-de-momos'},
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