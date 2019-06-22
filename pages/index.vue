<template lang="pug">
.main-contents
    SiteList.main-contents__panels(
        :siteList="sites"
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
    // ページ情報更新
    // mixinすればいいかも
    store.dispatch("main/changePage", getPageData("/"));
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
  public get sites(): Object[] {
    return this.$store.getters["sites/all"];
  }
}
</script>

<style scoped lang="sass"></style>
