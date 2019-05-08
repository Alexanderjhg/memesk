<template>
    <v-layout row wrap>
        <v-flex xs12>
        <section>

            <!--  -->
            <div class=" mb-2">
            <span><strong><i>CONTACTO</i></strong></span>
            <h1 class="title">Contactame.</h1>
            <span><strong><i>Alexander Hurtado</i></strong></span>
            <v-divider class="my-2"></v-divider>
            </div>
            <!--  -->
            <article class="text-xs-center">
                <iframe frameborder="0" height="751" marginheight="0" marginwidth="0" src="https://docs.google.com/forms/d/e/1FAIpQLSdkz74uONofByHjEIT2uzUTb8_L-2p4yX9yDZMcwuDr-zXugA/viewform?embedded=true" width="640">Cargando...</iframe>
            </article> 
        </section>
        </v-flex>
    </v-layout>
</template>
<script>
        export default {
            head() {
                return {
                    title: 'Contacto | Memesk.site',
                    htmlAttrs: {
                    lang: 'es',
                },
                    meta: [
                    { hid: 'description', name: 'description', content: 'Contacto.' },
                    { name: "keywords", content: "Contacto" },
                    {name:'robots' , content:'noindex'}
                    ],
                    link:[
                    { rel:'canonical', href:'https://memesk.site/contacto'},
                    ]
                }
            },
        }
    
    </script>
      