<template lang="pug">
.main-contents
    article.main-contents__article.article(v-for="text in aboutTexts")
        .article__head(v-if="text.tag === 'head'") {{text.text}}
        p.article__p(v-if="text.tag === 'p'") {{text.text}}
</template>
<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";
import { getPageData } from "~/store/main";
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
    this.$store.dispatch("main/changePage", getPageData("about"));
  }

  /**
   * テストデータ
   */
  public aboutTexts = [
    {
      tag: "head",
      text: "免責事項"
    },
    {
      tag: "p",
      text:
        "光文社は本サイトに情報を掲載するにあたり、細心の注意を払っていますが、掲載された情報の内容に関し、その有用性、正確性、安全性（エラー等が発生しないこと、常に各機能が正常に動作すること、情報に間違いがなく最新であること、問題が発生した場合にこれを修正すること、このウェブサイト及びサーバーにコンピュータウィルスその他の有害物が無いこと等を含む）を保証するものではありません。" +
        "利用者本人の責任においてご利用頂くものとします。\n" +
        "\n" +
        "したがって当社は利用者の皆様がこれらの情報の使用・利用、または使用・利用の不可能によって生じる損害・不利益についてもいかなる責任を負うものではありません。\n" +
        "\n" +
        "また予告なしに本サイト上の情報を変更、中断又は中止させて頂くことがございます。"
    },
    {
      tag: "head",
      text: "推奨環境について"
    },
    {
      tag: "p",
      text: "標準搭載のブラウザをお使いください"
    }
  ];
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
        margin-top: 50px
        padding-left: 5px
        font-size: 30px
        font-weight: bold
        border-left: solid  24px rgba(0, 0, 0, 1)
    &__p
        line-height: 24px
.page-enter-active,
.page-leave-active
    transition: opacity .3s ease
.page-enter,
.page-leave-to
    transition: opacity .3s ease
</style>
