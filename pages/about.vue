<template lang="pug">
.main-contents
    article.main-contents__article.article
        .article__head これは見出しです！！！！
        p.article__p あああああああああああああ
        .article__head これは見出しです！！！！
        p.article__p あああああああああああああ
        p.article__p あああああああああああああ
        p.article__p あああああああああああああ
        p.article__p あああああああああああああ
        p.article__p あああああああああああああ
</template>
<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";
@Component({
  layout: "left_column",
  transition: (to, from) => {
    return "page";
  }
})
export default class extends Vue {
  /**
   * レイアウト
   */
  layout: string = "left_column";

  public mounted() {
    this.$store.dispatch("main/changePageName", "このサイトについて");
  }
}
</script>

<style scoped lang="sass">
.main-contents
    margin: 10px 0px
.about
    &__text
        background-color: orange
.article
    margin: 60px 0
    &__head
        font-size: 24px
        font-weight: bold
    &__p
.page-enter-active,
.page-leave-active
    transition: opacity .3s ease
.page-enter,
.page-leave-to
    transition: opacity .3s ease
</style>
