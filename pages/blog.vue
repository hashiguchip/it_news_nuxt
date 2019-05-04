<template lang="pug">
.main-contents
    .main-contents__panels.panels-block
        .panels-block__panel.panel(v-for="item in items")
            a.panel__text(:href="item.url" target="_blank") {{item.name}}
            img.panel__image(:src="item.image")
            //todo:favorite ハート
            .panel__favorite(
                @click="toggleFavorite(item)"
                :class="favoriteStatus(item)"
            )
</template>
<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";
import { getPageData } from "~/store/main";
import ListMixin from "~/mixins/mixin";

@Component({
  mixins: [ListMixin],
  transition: (to, from) => {
    return "page";
  }
})
export default class extends Vue {
  public async mounted() {
    this.listInit();
    //ページ情報更新
    this.$store.dispatch("main/changePage", getPageData("blog"));
  }
  // 一覧取得
  public get items(): any {
    return this.$store.getters["sites/blog"];
  }
}
</script>

<style scoped lang="sass">
@import "~/assets/css/components/main_list.sass"
</style>
