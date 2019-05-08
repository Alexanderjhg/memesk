<template>
    <v-layout row wrap>
      <script type="application/ld+json">
                {
                  "@context": "http://schema.org",
                  "@type": "Article",
                  "headline": "Memes de amor a distancia.",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://memesk.site/memes-de-amor/a-distancia/"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.5",
                    "reviewCount": "11"
                  },
                
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://memesk.site/amor/memes-de-amor-2.png",
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
                    "logo":"https://memesk.site/ms-icon-150x150.png"
                  }
            
                }
      </script>
      <v-flex xs12>
        <section>
  
          <!--  -->
          <div class=" mb-2">
            <span><strong><i>MEMES DE AMOR</i></strong></span>
            <h1 class="title">LOS MAS PODEROSOS MEMES DE AMOR PARA COMPARTIR CON TUS AMIGOS, FAMILIARES Y PAREJA.</h1>
            <span><strong><i>Alexander Hurtado</i></strong></span>
            <v-divider class="my-2"></v-divider>
            <div>
              <h2 class="title">TOP MEMES DE AMOR GRACIOSOS PARA ENVIAR POR CHAT O PUBLICAR EN LAS REDES</h2>
              <p>Llegaron los <strong>memes de amor</strong>, los memes para mandar a tu pareja y sacarle una sonrisa de oreja
                a oreja pudiendo <strong>descargarlas</strong>. <strong>Los momos mas graciosos para compartir</strong>.</p>
            </div>
          </div>
          <!--  -->
          <article>
            <v-layout row wrap justify-space-around>
              <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
                <article>
                  <div class="ml-4 pa-1 text-xs-center">
                    <blockquote>
                      <h3>{{`Meme de amor ${index+1}`}}</h3>
                    </blockquote>
                  </div>
                  <img class="responsive" :src="`/amor/memes-de-amor-${index + 1}.png`" :alt="`meme-de-amor-${index+1}`" :title="`meme-de-amor-${index+1}`"
                    @click="imgF(`/amor/memes-de-amor-${index + 1}.png`, index)">
                </article>
              </v-flex>
            </v-layout>
          </article>
          <!--  -->
          <article>
            <h2>Imagenes de amor que convertidas en memes :</h2>
            <p>Imagenes plasmadas y convertidas en memes, no es facil pensar que plasmar un meme y que sea bien aceptado por
              la comunidad online. <br> Un listado con los <strong>mejores memes de amor para compartir con tus familias, amigos
                y pareja</strong> . </p>
          </article>
          <!--  -->
          <article>
            <h2>Chistes e imagenes se unen para jugar al amor con los momos</h2>
            <p>Los <strong>chistes</strong> son una clave fundamental para que el meme tenga exito, este chiste tiene que ir
              de la mano junto con la frase originaria del meme. <br> Espero y te gusten estos memes de amor que he traido
              para ti, recuerda que estos son actualizados cada semana.</p>
          </article>
          <!--  -->
          <article>
            <h2>Los mejores memes para enviarle a tu esposo y amores imposibles</h2>
            <p>Has que tu esposo pase un buen rato viendo estas <strong>imagenes graciosas llamadas memes</strong>. Pero tambien
              puedes enviarle a ese amor imposible prohibido o ese amor que tienes a distancia, recuerda que un buen momo nunca
              esta demas.</p>
          </article>
          <!--  -->
          <article>
            <h2>Caracteristicas de los memes amorosos</h2>
            <ul>
              <li>El meme cuenta una histria que te ha pasado</li>
              <li>Es muy chistoso y te recuerda a tu pareja</li>
              <li>Te hace imaginar ese esenario</li>
              <li>Re recuerda a un amigo y te hace querer compartirlo</li>
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
          title: 'Memes de AMOR mas chistosos que nunca comparte ya | Memesk.site',
          htmlAttrs: {
                      lang: 'es',
                  },
          meta: [
            { hid: 'description', name: 'description', content: 'Memes y momos mas chistosos para enviarle a tu esposo o novia ✅ o esa amistad a la cual siempre le envias esos momasos divertidos, no importa la distancia ✅.' },
            { name: "keywords", content: "memes, memes de amor, amor gracioso" },
          ],
          link:[
              { rel:'canonical', href:'https://memesk.site/memes-de-amor/a-distancia/'},
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