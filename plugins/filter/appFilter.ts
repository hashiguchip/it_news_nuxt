import Vue from "vue";

Vue.filter("getCategoryImagePath", function(value) {
  //一回変数に入れるとだめみたい。なんでだろう？
  if (!value) return require("~/assets/images/category/Favorite.png");
  return require("~/assets/images/category/" + value);
});
