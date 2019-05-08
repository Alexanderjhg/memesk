<template>
    <v-layout row wrap>
            <script type="application/ld+json">
                {
                  "@context": "http://schema.org",
                  "@type": "Article",
                  "headline": "Momos.",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://memesk.site/momos/"
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
                <div class=" mb-2">
                    <span><strong><i>Momos</i></strong></span>
                    <h1 class="title">Momos con imagenes graciosas y videos chistosos que dan mucha risa.</h1>
                    <span><strong><i>Alexander Hurtado</i></strong></span>
                    <v-divider class="my-2"></v-divider>
                    <div>
                        <h2 class="title">Los mejores momos para compartir e imagenes chistosas</h2>
                        <p>Los mejores <strong>momos</strong> chistosos para compartir con tus amigos y familiares con
                            imagenes muy divertidas. <br></p>
                        <p>Estos momos te sacaran una sonrisa de oreja a oreja y te haran sentir mucha gracia para
                            compartirlo en las redes sociales.</p>
                    </div>
                </div>

                <article>
                    <a href="/momos/sdlg/" id="momos-sdlg">
                        <h3 class="title white--text textD-none">Momos sdlg :</h3>
                    </a>
                    <v-layout row wrap justify-space-around>
                        <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in imgChistosos" :key="index" class="my-2 pa-1">
                            <v-card>
                                <div class="ml-4 pa-1 text-xs-center">
                                    <blockquote>
                                        <h4>{{`Momos sdlg ${index+1}`}}</h4>
                                    </blockquote>
                                </div>
                                <img class="responsive" :src="`../chistosos/meme-${index + 1}.webp`"
                                    :alt="`momo-${index+1}`" @click="imgF(`/chistosos/meme-${index + 1}.webp`, index)">
                            </v-card>
                        </v-flex>
                        <v-flex xs12 md6 lg3 xl2 class="my-2 pa-1">
                            <v-card href="/momos/sdlg/" class="ver-mas d-flex align-center justify-center">
                                <span class="title text-xs-center">Ver Mas...</span>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </article>


                <article>
                    <a href="/momos/shidoris/" id="momos-shidoris">
                        <h3 class="title white--text textD-none">Momos shidoris :</h3>
                    </a>
                    <v-layout row wrap justify-space-around>
                        <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
                            <v-card>
                                <div class="ml-4 pa-1 text-xs-center">
                                    <blockquote>
                                        <h4>{{`Momos shidori ${index + 1}`}}</h4>
                                    </blockquote>
                                </div>
                                <img class="responsive" :src="`../amor/memes-de-amor-${index + 1}.webp`"
                                    :alt="`momo-shidoris-${index + 1}`"
                                    @click="imgF(`/plantillas/plantilla-de-meme-${index + 1}.webp`, index)">
                            </v-card>
                        </v-flex>
                        <v-flex xs12 md6 lg3 xl2 class="my-2 pa-1">
                            <v-card href="/momos/shidoris/" class="ver-mas d-flex align-center justify-center">
                                <span class="title text-xs-center">Ver Mas...</span>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <p>Con una amplia conleccion de imagenes shidas y graciosas donde podras <strong>compartir los
                            mejores momos</strong> en las redes sociales o por whatsapp. <br>
                    </p>
                </article>

                <article>
                    <a href="/momos/shidos/" id="momos-shidos">
                        <h3 class="title white--text textD-none">Momos shidos :</h3>
                    </a>
                    <v-layout row wrap justify-space-around>
                        <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
                            <v-card>
                                <div class="ml-4 pa-1 text-xs-center">
                                    <blockquote>
                                        <h4>{{`Momos shidos ${index + 1}`}}</h4>
                                    </blockquote>
                                </div>
                                <img class="responsive" :src="`../risa/memes-de-risas-${index + 1}.webp`"
                                    :alt="`Momos-shidos-${index + 1}`"
                                    @click="imgF(`/amor/Momos-de-amor-${index + 1}.webp`, index)">
                            </v-card>
                        </v-flex>
                        <v-flex xs12 md6 lg3 xl2 class="my-2 pa-1">
                            <v-card href="/momos/shidos/" class="ver-mas d-flex align-center justify-center">
                                <span class="title text-xs-center">Ver Mas...</span>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <p>Los momos se crean para sacar una sonrisa a las personas, sea porque les ha pasado una ves o
                        conocen a personas que le ha pasado exactamente lo que dice el momo en la imagen.</p>
                    <p>Lo bueno es eso, que reiras mucho con estas <strong>imagenes de momos</strong> que hemos
                        recopilado para ti. Comparte estos momos con tus amigos en las redes sociales</p>
                </article>

                <article>
                    <div>
                        <h2>La diferencia entre un momo y un meme :</h2>
                        <p>Un meme es una imagen que va acompañada de una frases y un personaje que comicamente en algun momento de su vida ha dicho esa frase, esta imagen se hace viral y se le conoce como meme, pero este meme lleva un humor mas universal y pasivo. 
                            Pero los momos son diferenten en el sentido de que la imagen que, en este caso se le llamara "momo", lleva un humor mas vertical hacia alguien, es como una indirecta y esto lo catalogan los internautas como un "Momaso" o "Momazo". <br>
                            Entonces la diferencia entre un meme y un momo es que el meme lleva un humor mas universal y pasivo, mientras que un momo lleva un humor mas vertical hacia una persona o hecho especifico.
                        </p>
                    </div>
                    <div>
                        <h2>Te cuento que son los momos :</h2>
                        <p>Un momo es una interpretacion de un evento que puede o pudo haber pasado alguna vez en la vida de las personas, estos hechos suelen pasar a menudo en la vida normal y cotidiana de las personas,
                            Estas interpretaciones estan escritas en una imagen con un personaje ficticio o real, este siempre muestra una cara torpe. una frases comica o las dos cosas.
                        </p>
                    </div>
                    
                    <div>
                        <h2>Comparte estos momos con tus amigos</h2>
                        <p>Comparte estos momos con tus amigos en las redes sociales y en los grupos de faceboo. Tambien
                            puedes compartirlo en whatsapp, ponerlos en tus estamos y tus amigos sepan lo bien shido que
                            eres.</p>
                    </div>
                    <div>
                        <h2>Crea tus propios momos</h2>
                        <p>Puedes crear tus propios momos para que den mas risa, <strong>Los mejores momos</strong> son
                            aquellos que son unicos, que los hace una persona y este es muy gracioso. br
                            No te de miedo a crear tu momo bien gracioso, no te de pena compartirlo por los grupos de
                            facebook, crea tu gran comunidad de momeros y comparte las mejores imagenes de momos.</p>
                    </div>
                    <div>
                        <h2>Usa tus momos para hacer videos</h2>
                        <p>Las personas que hacen videos de momos en youtube, son personas que generan muchas vistas en
                            su canal de youtube, conviertete en el siguiente canal de momos mas grande de youtube solo
                            publicando tus momos con ese toque de personalidad y originalidad.</p>
                    </div>
                    <div>
                        <h2>Esto es lo que significa JPG en los momos y memes :</h2>
                        <p>La extencion "jpg" que se agrega a los memes en las redes sociales y se usa sin ningun significado, las personas que hacen memes solo la añaden para dar mas humor añadiendo algo sin sentido a la imagen. <br>
                        Por ejemplo: imagina que ves un video de una persona que se cae accidentalmente con un titulo que dice: "en la frente.jpg". <br>
                         colocar algo sin sentido en los memes da un poco mas de humor a la situacion.</p>
                    </div>
                </article>
            </section>
        </v-flex>
        <v-dialog v-model="dialog" :overlay="false" max-width="500px" transition="dialog-transition">
            <v-card>

                <img class="responsive" :src="thisImg" :alt="`momo-${index+1}`">
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
                title: 'Momos con imagenes graciosas | Memesk.site',
                htmlAttrs: {
                    lang: 'es',
                },
                meta: [
                    { hid: 'description', name: 'description', content: 'Momos para compartir shidos y shidoris, alv papu entra y comparte ✅ Si no entras ella no te amara :v, ✅ la mejor coleccion de imagenes de momos muy shidos para morir de risa.' },
                    { name: "keywords", content: "memes, momos," },
                ],
                link: [
                    { rel: 'canonical', href: 'https://memesk.site/momos/' },
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