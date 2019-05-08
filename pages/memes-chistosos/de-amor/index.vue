<template>
  <v-layout row wrap>
    <script type="application/ld+json">
          {
            "@context": "http://schema.org",
            "@type": "Article",
            "headline": "Memes chistosos de amor.",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://memesk.site/memes-chistosos/de amor/"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "11"
            },
          
            "image": {
              "@type": "ImageObject",
              "url": "https://memesk.site/chistosos/meme-2.webp",
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
          <span><strong><i>MEMES CHISTOSOS DE AMOR</i></strong></span>
          <h1 class="title">MENES CHISTOSOS DE AMOR PARA COMPARTIR EN PAREJA.</h1>
          <div>
            <span><strong><i>Alexander Hurtado</i></strong></span>
          </div>
          <v-divider class="my-2"></v-divider>
          <div>
            <h2 class="title">Imagenes de memes de amor</h2>
            <p>Memes de amor para compartir, comparte estos memes a continuacion con tus amigos envialo porwhatsapp o
              facebook para que reyme el amor de los memes.</p>
          </div>
        </div>
        <!--  -->
        <article>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
              <article>
                <div class="ml-4 pa-1 text-xs-center">
                  <blockquote>
                    <h3>{{`Meme chistoso de amor ${index+1}`}}</h3>
                  </blockquote>
                </div>
                <img class="responsive" :src="`/chistosos/meme-${index + 1}.webp`"
                  :alt="`meme-chistoso-colombiano-${index+1}`" :title="`meme-chistoso-colombiano-${index+1}`"
                  @click="imgF(`/chistosos/meme-${index + 1}.webp`, index)">
              </article>
            </v-flex>
          </v-layout>
        </article>
        <!--  -->
        <article>
          <h2>Muchos memes de amor con las mejores imagenes del mundo</h2>
          <p>Los memes de amor son muy chistosos, por eso y mucho mas he creado una lista con las mejores imagenes
            chistosas de los mejores memes de amor que he encontrado por alli en las redes sociales.</p>
          <p>Esta lista la he trabajado mucho, es dificil conseguir estos memes pero aqui te los he traido con
            anticipacion, espero y te gusten estos memes colombiamos muy buenos.</p>
        </article>
        <!--  -->
        <article>
          <h2>Los memes de amor son espectaculares</h2>
          <p>Asi es, los memes de amor son espectaculares, lo digo porque son muy chistosos y hacn reir a cualquier
            colombiano, y no solo si vives en ese pais. <br>
            Tambien si vives en otro pais te hara reir estos memes no tienen frontera.</p>
        </article>
        <!--  -->
        <article>
          <h2>Porque los memes de amor son tan adictivos?</h2>
          <p>Los memes chistosos de amor son tan adictivos que te contagiara con su humor, no esperres mas y descarga
            estos memes que tenemos para ti y comparte con tus amigos por las redes sociales.</p>
        </article>
        <!--  -->

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
        title: 'Memes chistosos de amor con imagenes chistosas | Memesk.site',
        htmlAttrs: {
          lang: 'es',
        },
        meta: [
          { hid: 'description', name: 'description', content: 'Memes chistosos de amor que te haran saber lo mejor de las relacion entre parejas ✅, No paro de reir con estos memes, ve y comparte con tu esposo o espossa jajaja✅ conparte en los grupos de facebook y whatsapp.' },
          { name: "keywords", content: "memes, memes chistosos, imagenes chistosas" },
        ],
        link: [
          { rel: 'canonical', href: 'https://memesk.site/memes-chistosos' },
        ]
      }
    },

    data() {
      return {
        date: `${new Date().getFullYear()}`,
        dateM: `${new Date().getFullYear()}`,
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