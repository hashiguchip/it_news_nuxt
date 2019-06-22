import VueLocalStorage from "vue-localstorage";

import Vue from "vue";

Vue.use(VueLocalStorage);

// Or you can specify any other name and use it via this.$ls, this.$whatEverYouWant
// Vue.use(VueLocalStorage, {
//   name: "localStorage",
//   bind: true //created computed members from your variable declarations
// });

// // 読み込み時にローカルストレージのデータを読み込んでコミットする
export default ({ store }) => {
  if (process.browser) {
    const userData = window.localStorage.getItem("userData");
    if (userData != null) {
      store.dispatch("user/updateFavorite", JSON.parse(userData));
    }
  }
};
