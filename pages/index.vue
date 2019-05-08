<template>
  <v-layout row wrap>
    <v-flex xs12>
      <section>
        <div class=" mb-2">
          <span><strong><i>MEMES</i></strong></span>
          <h1 class="title">Memes y momos graciosos con imagenes y videos chistosos que dan mucha risa.</h1>
          <span><strong><i>Alexander Hurtado</i></strong></span>
          <v-divider class="my-2"></v-divider>
          <div>
            <h2 class="title">Mejores memes para compartir con tus familiares, amigos y para descargar</h2>
            <p>Una coleccion de <strong>memes de muchas clases</strong>, esas imagenes que te encantan en las redes
              sociales
              y tambien puedes encontrar en esta pagina. Pasaras un momento agradable y lleno de risas con estos
              <strong>mejores
                momasos</strong> que hemos coleccionado en esta pagina y todos son para <strong>descargar</strong></p>
          </div>
        </div>

        <article>
          <a href="/memes-chistosos" id="memes-chistosos">
            <h3 class="title white--text textD-none">Chistosos :</h3>
          </a>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in imgChistosos" :key="index" class="my-2 pa-1">
              <v-card>
                <div class="ml-4 pa-1 text-xs-center">
                  <blockquote>
                    <h4>{{`meme ${index+1}`}}</h4>
                  </blockquote>
                </div>
                <img class="responsive" :src="`/chistosos/meme-${index + 1}.webp`" :alt="`meme-${index+1}`"
                  @click="imgF(`/chistosos/meme-${index + 1}.webp`, index)">
              </v-card>
            </v-flex>
            <v-flex xs12 md6 lg3 xl2 class="my-2 pa-1">
              <v-card href="/memes-chistosos" class="ver-mas d-flex align-center justify-center">
                <span class="title text-xs-center">Ver Mas...</span>
              </v-card>
            </v-flex>
          </v-layout>
        </article>


        <article>
          <a href="/plantillas-de-momos" id="plantillas-de-momos">
            <h3 class="title white--text textD-none">Plantillas :</h3>
          </a>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
              <v-card>
                <div class="ml-4 pa-1 text-xs-center">
                  <blockquote>
                    <h4>{{`plantilla de meme ${index + 1}`}}</h4>
                  </blockquote>
                </div>
                <img class="responsive" :src="`/plantillas/plantilla-de-meme-${index + 1}.webp`"
                  :alt="`Plantilla-de-meme-${index + 1}`"
                  @click="imgF(`/plantillas/plantilla-de-meme-${index + 1}.webp`, index)">
              </v-card>
            </v-flex>
            <v-flex xs12 md6 lg3 xl2 class="my-2 pa-1">
              <v-card href="/plantillas-de-momos" class="ver-mas d-flex align-center justify-center">
                <span class="title text-xs-center">Ver Mas...</span>
              </v-card>
            </v-flex>
          </v-layout>
          <p>Las <strong>plantillas de memes</strong> se usan para hacer memes desde 0 "cero", estas plantillas son
            <strong>descargadas
              en blanco</strong> para luego ser editadas y publicada en los grupos de las redes sociales. Porsupuesto
            que
            hemos coleccionado las <strong>plantillas del 2017, 2018, 2019</strong> y conviertete en un
            <strong>generador
              de memes</strong>, el mas grande <strong>creador</strong></p>
        </article>

        <article>
          <a href="/memes-chistosos" id="memes-de-amor">
            <h3 class="title white--text textD-none">De amor :</h3>
          </a>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
              <v-card>
                <div class="ml-4 pa-1 text-xs-center">
                  <blockquote>
                    <h4>{{img.titulo}}</h4>
                  </blockquote>
                </div>
                <img class="responsive" :src="`/amor/memes-de-amor-${index + 1}.webp`"
                  :alt="`meme-de-amor-${index + 1}`" :title="`meme-de-amor-${index + 1}`"
                  @click="imgF(`/amor/memes-de-amor-${index + 1}.webp`, index)">
              </v-card>
            </v-flex>
            <v-flex xs12 md6 lg3 xl2 class="my-2 pa-1">
              <v-card href="/memes-de-amor" class="ver-mas d-flex align-center justify-center">
                <span class="title text-xs-center">Ver Mas...</span>
              </v-card>
            </v-flex>
          </v-layout>
          <p>No me lo van a negar, ustedes han <strong>enamorado con memes</strong>, te traemos <strong>imagenes
              chistosas</strong>
            que le sacaran una sonrisa a tu enamorada.</p>
        </article>

        <article>
          <a href="/memes-de-perros" id="memes-de-perros">
            <h3 class="title white--text textD-none">De perros :</h3>
          </a>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
              <v-card>
                <div class="ml-4 pa-1 text-xs-center">
                  <blockquote>
                    <h4>{{'Meme de perro ' + index}}</h4>
                  </blockquote>
                </div>
                <img class="responsive" :src="`/perros/memes-de-perros-${index + 1}.webp`"
                  :alt="`meme-de-perro-${index + 1}`" :title="`meme-de-perro-${index + 1}`"
                  @click="imgF(`/perros/memes-de-perros-${index + 1}.webp`, index)">
              </v-card>
            </v-flex>
            <v-flex xs12 md6 lg3 xl2 class="my-2 pa-1">
              <v-card href="/memes-de-perros" class="ver-mas d-flex align-center justify-center">
                <span class="title text-xs-center">Ver Mas...</span>
              </v-card>
            </v-flex>
          </v-layout>
          <p>A quien no le a dado risa un <strong>meme de un perrito</strong>, estos caninos hacen unas caras muy
            graciosas
            y justo en el momento son fotografiados jaja son muy chistosos.</p>
        </article>

        <article>
          <a href="/memes-de-risa" id="memes-de-risa">
            <h3 class="title white--text textD-none">De risa :</h3>
          </a>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
              <v-card>
                <div class="ml-4 pa-1 text-xs-center">
                  <blockquote>
                    <h4>{{'Meme de risa ' + index}}</h4>
                  </blockquote>
                </div>
                <img class="responsive" :src="`/risa/memes-de-risas-${index + 1}.webp`"
                  :alt="`meme-de-risa-${index + 1}`" :title="`meme-de-risa-${index + 1}`"
                  @click="imgF(`/risa/memes-de-risas-${index + 1}.webp`, index)">
              </v-card>
            </v-flex>
            <v-flex xs12 md6 lg3 xl2 class="my-2 pa-1">
              <v-card href="/memes-de-risa" class="ver-mas d-flex align-center justify-center">
                <span class="title text-xs-center">Ver Mas...</span>
              </v-card>
            </v-flex>
          </v-layout>
          <p> <strong>Mmemes de risa</strong> recien horneados para disfrutar y compartir en los grupos de las redes
            sociales
            jaja son tan chistosos y graciosos que querras descargarlos. <b>Para morirse de la risa.</b></p>
        </article>

        <article>
          <h2>Un meme es</h2>
          <p>Es una imagen hecha por individuos que quieren sacarle una sonrisa a sus compañeros por las redes sociales
            donde
            se refleja una foto, sea de un comics hasta una foto de una persona y a esta se le añade un chiste o un
            trozo
            de palabras que en ese momento, la persona plasmada en la imagen dijo.</p>
        </article>

        <article>
          <div>
            <h2>Descarga los memores memes</h2>
            <p>Descarga los mejores memes y asi pudes publicarlos por las rees sociales con tus amigos, estos memes son
              totalmente descargables.</p>
          </div>
          <div>
            <h2>Comparte estos memes con todos tus amigos</h2>
            <p>Asi es, si un meme te causa mucha risa, lo mejor seria compartirlo con tus amigos en las redes sociales,
              puede ser facebook, instagra, youtube, o whatsapp. <br>
              La verdad es que no importa donde los compartas, siempre y cuando saques una sonrisa con los memes que
              compartes</p>
          </div>
          <div>
            <h2>Crea tus propios memes y compartelos por el mundo</h2>
            <p>Las personas shidas en el mundo de los memes son aquellas que crean sus propios memes y ponen su marca de
              agua para que las demas personas sepan quien creo ese meme. <br>
              Por eso debes crear tus propios memes, para que no te den "ban" en los grupos de facebook o no te comenten
              "repoio".</p>
          </div>
          <div>
            <h2>Usa memes para crear videos en youtube</h2>
            <p>Usa los mejores memes de internet o los que hayas creado crea un video y subelo a youtube, esos canales
              de memes generan muchas y muchas visitas y generan tambien algo de dinero extra que te puede servir para
              algo <br>
              Solo elige unnombre de un canal, crea tus memes exitosos y graciosos y listo, solo subelo a youtube y
              genera muchas vistas.</p>
          </div>
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
        htmlAttrs: {
          lang: 'es',
        },
        link: [
          { rel: 'canonical', href: 'https://memesk.site/' },
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
        imgChistosos: [
          { src: '' },
          { src: '' },
          { src: '' },
        ],
        img: [
          // {src:'https://firebasestorage.googleapis.com/v0/b/hurtado.appspot.com/o/cards%2FHappy%20Halloween!.webp?alt=media&token=ae4f10b6-485a-43c7-acb2-1ec074682e33' , titulo:'.'},
          { src: 'https://firebasestorage.googleapis.com/v0/b/hurtado.appspot.com/o/cards%2FHappy%20Halloween!.webp?alt=media&token=ae4f10b6-485a-43c7-acb2-1ec074682e33', titulo: '.' },
          { src: 'https://firebasestorage.googleapis.com/v0/b/hurtado.appspot.com/o/cards%2FHappy%20Halloween!.webp?alt=media&token=ae4f10b6-485a-43c7-acb2-1ec074682e33', titulo: '.' },
          { src: 'https://firebasestorage.googleapis.com/v0/b/hurtado.appspot.com/o/cards%2FHappy%20Halloween!.webp?alt=media&token=ae4f10b6-485a-43c7-acb2-1ec074682e33', titulo: '.' },
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

<style>
  .textD-none {
    text-decoration: none
  }

  .ver-mas {
    height: 100%;
  }
</style>