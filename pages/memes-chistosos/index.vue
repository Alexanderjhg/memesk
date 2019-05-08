<template>
        <v-layout row wrap>
            <script type="application/ld+json">
              {
                "@context": "http://schema.org",
                "@type": "Article",
                "headline": "Memes chistosos.",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://memesk.site/memes-chistosos"
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
                <span><strong><i>MEMES CHISTOSOS</i></strong></span>
                <h1 class="title" >LOS MEMES MAS CHISTOSOS PARA MORIRSE DE LA RISA 2018 y 2019.</h1>
                <div >
                  <span ><strong><i>Alexander Hurtado</i></strong></span> 
                </div>
                <v-divider class="my-2"></v-divider>
                <div>
                  <h2 class="title">Mejores memes chistosos para compartir con tus familiares y amigos</h2>
                  <p>Lista de memes chistosos para descargar y compartir en las redes sociales o en los grupos, esta lista está llena de risas y momentos graciosos y chistosos. <br>
                  A quien no le gusta disfrutar un momento de memes, a todos nos a causado risa al menos una ves, Comparte esta lista con tus amigos y familiares y disfruta de estas imagenes chistosas.</p>
                </div>
              </div>
              <!--  -->
              <article>
                <v-layout row wrap justify-space-around>
                  <v-flex xs12 md6 lg3 xl2 v-for="(img, index) in img" :key="index" class="my-2 pa-1">
                    <article>
                      <div class="ml-4 pa-1 text-xs-center">
                        <blockquote>
                          <h3>{{`Meme chistoso ${index+1}`}}</h3>
                        </blockquote>
                      </div>
                      <img class="responsive" :src="`/chistosos/meme-${index + 1}.webp`" :alt="`meme-${index+1}`" :title="`meme-${index+1}`" @click="imgF(`/chistosos/meme-${index + 1}.webp`, index)">
                    </article>
                  </v-flex>
                </v-layout>
              </article>
              <!--  -->
              <article>
                <h2>Un meme chistoso es :</h2>
                <p>un meme chistoso es un chiste plasmado en una imagen y esta contiene una foto, es compartida comunmente en las redes sociales.</p>
              </article>
              <!--  -->
              <article>
                <h2>Muchas imagenes chistosas para compartir en las redes sociales</h2>
                <p>En esta web encontrarar muchas imagenes chistosas para que las compartas con tus amigos y tambien en las redes sociales. <br>
                Quizas y puedas encontrar el mejor meme del mundo aqui en esta web, recuerda que el mejor meme del mundo es aquel que te saca la mejor sonrisa de lo chistosas que son.</p>
              </article>
              <!--  -->
              <article>
                <h2>Caracteristicas de un buen meme o momo chistoso para compartir</h2>
                <p>Para que un meme sea muy chistoso tiene que cumplir con estos requisitos.</p>
                <ul>
                  <li>Un meme chistoso da mucha risa</li>
                  <li>Un meme chistoso te da muchas ganas de compartirlo</li>
                  <li>Probablemente te pasa o te paso lo que expresa el meme chistoso</li>
                  <li>Se lo Muestras a tus amigos, familiares o pareja para que se rian del meme chistoso</li>
                </ul>
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
        head () {
          return {
            title: 'Memes chistosos con imagenes divertidas para reir | Memesk.site',
            htmlAttrs: {
              lang: 'es',
            },
            meta:[
                { hid: 'description', name: 'description', content:'Memes chistosos para compartir en las redes sociales ✅, te reto a no reirte con estos memes que causan muchisima gracia jajaja✅ comparte en los grupos de facebook y whatsapp.'},
                {name:"keywords", content:"memes, memes chistosos, imagenes chistosas"},
            ],
            link:[
            { rel:'canonical', href:'https://memesk.site/memes-chistosos'},
            ]
          }
        },
      
        data(){
          return {
            date: `${new Date().getFullYear()}`,
            dateM: `${new Date().getFullYear()}`,
            dialog:false,
            thisImg:'',
            index:0,
            img:[
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
              {memes:false},
            ]
          }
        },
        methods: {
          imgF(x , index){
            this.thisImg = x
            this.index = index
            this.dialog = true
          }
        },
      }
      </script>
      