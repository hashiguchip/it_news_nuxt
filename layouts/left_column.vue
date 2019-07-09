<template lang="pug">
.page-wrapper(v-touch:swipe="touchAction")
    Header.page-wrapper__header
    Hero
    .page-wrapper__main.main
        LeftMenu.main__left
        nuxt.main__contents
    Footer.page-wrapper__footer
</template>
<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";
import { namespace } from "vuex-class";
import Hero from "~/components/Hero.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import LeftMenu from "~/components/LeftMenu.vue";
import { IPage } from "~/store/main";

// const People = namespace(main.name);

@Component({ components: { Header, Footer, Hero, LeftMenu } })
export default class extends Vue {
  /**
   * スワイプ ハンドリング
   * @param direction
   */
  public touchAction(direction: string): void {
    switch (direction) {
      case "right":
        this.nextPage();
        return;
      case "left":
        this.previousPage();
    }
  }

  /**
   * 次のページに遷移させる
   */
  public nextPage(): void {
    // 次のページ
    const tmp: IPage = this.$store.getters["main/getNextPage"]();
    this.$router.push({ path: tmp.key });
  }
  /**
   * 前のページに遷移させる
   */
  public previousPage(): void {
    // 次のページ
    const tmp: IPage = this.$store.getters["main/getPreviousPage"]();
    this.$router.push(tmp.key);
  }
}
</script>
<style scoped lang="scss">
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  &__header {
    height: 70px;
    background: #4153b8;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
  }
  &__main {
    padding: 0 20px;
    min-height: 100px;
  }
  &__footer {
    height: 170px;
    background: #1a5220;
  }
}
.main {
  display: flex;
  &__left {
    width: 20%;
    margin-right: 50px;
  }
  &__contents {
    width: 80%;
  }
}
</style>
