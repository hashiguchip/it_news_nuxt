import VueLocalStorage from "vue-localstorage";
import Vue from 'vue'

Vue.use(VueLocalStorage);
// Or you can specify any other name and use it via this.$ls, this.$whatEverYouWant
Vue.use(VueLocalStorage, {
  name: "ls",
  bind: true //created computed members from your variable declarations
});
