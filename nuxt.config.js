const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    title: 'MEMES del 2019 imagenes chistosas | Memesk.site', 
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Los mejores memes para compartir con tus amigos ✅ todos los memes mas graciosos y chistosos para sacarle una sonrisa a cualquier persona ✅. ' },
      {name:'msapplication-TileColor', content:'#ffffff'},
      {name:'msapplication-TileImage', content:'/ms-icon-144x144.png'},
      {name:'theme-color', content:'#ffffff'},
      {name:'google-site-verification', content:'VUd7JmZd02b0aCOjdOVB9v1GQeBCJvPfIDwcSi98izs'},
      
    ],
    script:[
      // {type:"text/javascript" , src:"//ads.vidoomy.com/tusfrasessite_4649.js"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes:'57x57', href: '/apple-icon-57x57.pn' },
      { rel: 'apple-touch-icon', sizes:'60x60', href: '/apple -icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes:'72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes:'76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes:'114x114 ', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes:'120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes:'144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes:'152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes:'180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type:'image/png',sises:'32x23', href: '/favicon-32x32.png"' },
      { rel: 'icon', type:'image/png',sises:'96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type:'image/png',sises:'16x216', href: '/favicon-16x16.png' },
      { rel: 'icon',type:'image/png', sizes:'192x192', href: '/android-icon-192x192.png' },
      { rel: 'manifest',href: '/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
      // { rel:'canonical', href:'https://memesk.site'},
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
