import pkg from "./package";
export default {
  mode: "universal",

  /*
   ** Headers of the page
   */

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
    "~/assets/css/main.css",
    "~/assets/css/variables/colors.sass",
    "~/assets/css/components/main_list.sass"
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
