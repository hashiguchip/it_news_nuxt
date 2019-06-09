<template lang="pug">
.main-contents
    SiteList.main-contents__panels(
        :siteList="sites"
    )
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getPageData } from "~/store/main";
import axios from "axios";
import { siteUrls } from "~/models/urls";

@Component({
  async fetch({ store }) {
    //ページ情報更新
    store.dispatch("main/changePage", getPageData("/"));
    //sitesを取得する
    if (store.state.sites.sites.length === 0) {
      try {
        // サイトを取得する
        const sites = await axios.get(siteUrls.sites);
        store.dispatch("sites/fetchSites", sites.data);
        // カテゴリーを取得する
        const categories = await axios.get(siteUrls.category);
        store.dispatch("categories/fetchCategories", categories.data.category);
      } catch (e) {
        console.log(e);
      }
    }
    store.dispatch(
      "user/updateFavorite",
      {}
      //JSON.parse(this.$localStorage.get("userData"))
    );
  },
  components: {
    SiteList: () => import("~/components/SiteList.vue")
  }
})
export default class extends Vue {
  // 一覧取得
  public get sites(): Object[] {
    // todo:refactor
    console.log("インデックスのステイツ");
    console.log(this.$store);
    return this.$store.state.sites.sites;
  }

  public mounted() {
    console.log("インデックスのmoutned");
  }
}
</script>

<style scoped lang="sass"></style>
