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
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  &__header {
    flex-basis: 70px;
    background: #4153b8;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
  }
  &__main {
    flex-grow: 1;
    padding: 0 20px;
  }
  &__footer {
    flex-basis: 170px;
    background: #1a5220;
  }
}
</style>
