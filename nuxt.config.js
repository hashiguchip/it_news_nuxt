import pkg from "./package";
export default {
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    baseUrlAPI: process.env.BASE_URL || "http://localhost:3333"
  },
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    script: [
      // {
      //   src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
      // }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,900&amp;subset=japanese"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
    "normalize.css/normalize.css",
    "~/assets/css/reset.css",
    "~/assets/css/font.sass",
    "~/assets/css/main.css",
    "~/assets/css/variables/colors.sass"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vue-local-storage", "~/plugins/filter/appFilter"],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
