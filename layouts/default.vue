<template lang="pug">
.page-wrapper
    Header.page-wrapper__header
    Hero
    Menu
    .page-wrapper__main
        nuxt
    Footer.page-wrapper__footer
</template>
<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";
import Hero from "~/components/Hero.vue";
import Header from "~/components/Header.vue";
import Menu from "~/components/Menu.vue";
import Footer from "~/components/Footer.vue";

@Component({ components: { Header, Footer, Hero, Menu } })
export default class extends Vue {
  /**
   * レイアウト
   */
  public layout() {
    return "default";
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
</style>
