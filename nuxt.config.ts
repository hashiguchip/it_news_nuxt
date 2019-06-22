import NuxtConfiguration from "@nuxt/config";
const config: NuxtConfiguration = {
  dev: process.env.NODE_ENV !== "production",
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    //baseUrlAPI: process.env.BASE_URL || "https://it-news-b9a2d.firebaseapp.com"
    baseUrlAPI: ""
  },
  mode: "universal",
  // buildDir: process.env.NODE_ENV === "production" ? "functions/.nuxt" : "nuxt",
  // todo:firebase用
  // ssr: process.env.NODE_ENV === "production",
  // ssrLog: process.env.NODE_ENV === "production",

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
        href:
          "https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,900&amp;subset=japanese"
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
  plugins: [
    { src: "~/plugins/filter/appFilter" },
    { src: "~/plugins/v-lazy-image.ts", ssr: false },
    { src: "~/plugins/vue-local-storage.ts", ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],

  /*
   ** Build configuration
   */
  build: {
    // todo:いい感じに本番とローカル分けたい
    // publicPath: "https://it-news-b9a2d.firebaseapp.com",
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // target:'node'
    }
  }
};

export default config;
