<template>
    <v-layout row wrap>
        <script type="application/ld+json">
                {
                  "@context": "http://schema.org",
                  "@type": "Article",
                  "headline": "Memes chistosos 2019.",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://memesk.site/memes-chistosos/2019/"
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
                    <span><strong><i>MEMES CHISTOSOS 2019</i></strong></span>
                    <h1 class="title">MEMES CHISTOSOS DEL 2019</h1>
                    <span><strong><i>Alexander Hurtado</i></strong></span>
                    <v-divider class="my-2"></v-divider>
                    <div>
                        <h2 class="title">Top memes chistodos del 2019 que te encantaran porque son muy chistosos</h2>
                        <p>los <strong>memes chistosos de 2019</strong> son memes de la actualidad, son memes de este ae se han vulto viral este año 2019. <br>
                        Comparte los mejores memes chistosos del 2019 con las mejores imagenes de mundo para hacer reir a tus amigos y familiares.</p>
                    </div>
                </div>
                <!--  -->
                <article>
                    <v-layout row wrap justify-space-around>
                        <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
                            <article>
                                <div class="ml-4 pa-1 text-xs-center">
                                    <blockquote>
                                        <h3>{{`Meme chistoso del 2019 ${index+1}`}}</h3>
                                    </blockquote>
                                </div>
                                <img class="responsive" :src="`../../risa/memes-de-risas-${index + 1}.webp`"
                                    :alt="`meme-chistoso-2019-${index+1}`" 
                                    :title="`meme-chistoso-2019-${index+1}`"
                                    @click="imgF(`/risa/memes-de-risas-${index + 1}.webp`, index)">
                            </article>
                        </v-flex>
                    </v-layout>
                </article>
                <!--  -->
                <article>
                    <h2>Imagenes de memes chistosos 2019</h2>
                    <p>Una coleccion de imagenes donde recopilamos memes chistosos del año 2019 para que disfrutes y compartas con tus amigos y familiares.<br>
                        Los memes de 2019 son los mas actualizados y los mas virales, estan causando furor en las redes sociales.
                    </p>
                </article>
                <!--  -->
                <article>
                    <h2>Imegenes chistosas de memes 2019</h2>
                    <p>comparte y descargas estas imagenes de <strong>memes chistosos 2019</strong>, compartelas en las redes sociales, en whatsapp en facebook en instagram. <br>
                        No esperes mas, se el momero mas shido que hay en las redes sociales.</p>
                </article>
                <!--  -->
                <article>
                    <h2>memes 2019</h2>
                    <p>Te dejamos algunas razones por la cuel compartir memes este año 2019</p>
                    <ul>
                        <li>Son virales</li>
                        <li>Causan mucha risa</li>
                        <li>Te libran del ban</li>
                        <li>Se muere tu ex</li>
                        <li>Porque si :v</li>
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
                    { hid: 'description', name: 'description', content: 'Todos los memes chistosos de este año 2019 para que los compartas con tus amigos ✅ Si no los miras ella no volvera contigo :v, ✅ Entra papu entra y se chido.' },
                    { name: "keywords", content: "memes, momos, momasos, shidos" },
                ],
                link: [
                    { rel: 'canonical', href: 'https://memesk.site/momos/shidos/' },
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