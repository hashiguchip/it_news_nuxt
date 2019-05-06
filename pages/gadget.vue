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
  }
})
export default class extends Vue {
  public async mounted() {
    //ページ情報更新
    this.$store.dispatch("main/changePage", getPageData("gadget"));
  }
  // 一覧取得
  public get items(): any {
    return this.$store.getters["sites/gadget"];
  }
}
</script>

<style scoped lang="sass"></style>
