<template>
  <v-layout row wrap>
    <script type="application/ld+json">
              {
                "@context": "http://schema.org",
                "@type": "Article",
                "headline": "Momos shidos.",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://memesk.site/momos/shidos/"
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
          <span><strong><i>MOMOS SHIDOS</i></strong></span>
          <h1 class="title">MOMOS MUY SHIDOS :v alv papu CON CHISTES GRACIOSOS E IMAGENES SHIDAS :v alv papu 2018 y 2019.</h1>
          <span><strong><i>Alexander Hurtado</i></strong></span>
          <v-divider class="my-2"></v-divider>
          <div>
            <h2 class="title">Top momos shidos con las mejores imagenes graciosas de la escuela</h2>
            <p>ser shido es shido, ahora imagina que creas un momo shido y lo comparte en las redes sociales para tus compas alv :v. <br>
              No hagas repoio papu, te dejo los mejores momasos shidos para que los compartas con tus amigos para que se dejen lo sad que tienen :v.</p>
          </div>
        </div>
        <!--  -->
        <article>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
              <article>
                <div class="ml-4 pa-1 text-xs-center">
                  <blockquote>
                    <h3>{{`Meme shidos ${index+1}`}}</h3>
                  </blockquote>
                </div>
                <img class="responsive" :src="`../../risa/memes-de-risas-${index + 1}.webp`" :alt="`meme-shido-${index+1}`" :title="`meme-shido-${index+1}`"
                  @click="imgF(`/risa/memes-de-risas-${index + 1}.webp`, index)">
              </article>
            </v-flex>
          </v-layout>
        </article>
        <!--  -->
        <article>
          <h2>Los momos shidos son :</h2>
          <p>Momos shidos normales comunes y corientes pero como la persona que lo publica es shida, entonces el momo shido deja de ser normal y se convierte en un momaso shido para la gente shida.</p>
        </article>
        <!--  -->
        <article>
          <h2>Imagenes graciosas de momos convertidos en momasos shidos</h2>
          <p>Te deje un listado con los memes mas shidos del mundo papu, los mejores memes estan aqui. <br>
            El futuro es hoy amigo. :v alv.</p>
        </article>
        <!--  -->
        <article>
          <h2>Caracteristicas de momos shidos</h2>
          <p>Las caracteristicas de los momasos chikitrikis :</p>
          <ul>
            <li>Son shidos</li>
            <li>Lo publican personas shidas</li>
            <li>No te recuerdan a tu ex :v</li>
            <li>Hacen que ella te recuerde a ti por ser tan shido</li>
            <li>No es sad</li>
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
        title: 'Momos shidos con imagenes muy graciosas papu | Memesk.site',
        htmlAttrs: {
                    lang: 'es',
                },
        meta: [
          { hid: 'description', name: 'description', content: 'Momos shidos papu para compartir con las personas shidas 2019 - 2018 ✅ Si no lo ves ella no te amara y estaras sad :v, ✅ Entra papu entra y se chido.' },
          { name: "keywords", content: "memes, momos, momasos, shidos" },
        ],
        link:[
            { rel:'canonical', href:'https://memesk.site/momos/shidos/'},
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