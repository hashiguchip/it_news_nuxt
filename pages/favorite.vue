<template lang="pug">
.main-contents
    SiteList.main-contents__panels(
        :siteList="items"
    )
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getPageData } from "~/store/main";

@Component({
  components: {
    SiteList: () => import("~/components/SiteList.vue")
  },
  async fetch({ store }) {
    //ページ情報更新
    store.dispatch("main/changePage", getPageData("favorite"));
    try {
      // サイトを取得する
      await store.dispatch("sites/fetchSites");
      // カテゴリーを取得する
      await store.dispatch("categories/fetchCategories");
    } catch (e) {
      console.log(e);
    }
  }
})
export default class extends Vue {
  // 一覧取得
  public get items(): any {
    const favoriteSitesIds = this.$store.state.user.user.favorite;
    const sites = this.$store.state.sites.sites;
    return sites.filter(site => {
      return favoriteSitesIds.includes(site.id);
    });
  }
}
</script>

<style scoped lang="sass"></style>
