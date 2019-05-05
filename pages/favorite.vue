<template lang="pug">
.main-contents
    SiteList.main-contents__panels(
        :siteList="items"
    )
</template>
<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";
import { getPageData } from "~/store/main";
import SiteList from "~/components/SiteList.vue";

@Component({
  components: {
    SiteList
  },
  transition: (to, from) => {
    return "page";
  }
})
export default class extends Vue {
  public async mounted() {
    //ページ情報更新
    this.$store.dispatch("main/changePage", getPageData("favorite"));
  }
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
