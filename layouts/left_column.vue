<template lang="pug">
.page-wrapper
    Header.page-wrapper__header
    Hero
    .page-wrapper__main.main
        .main__left レフトメニュー
        nuxt.main__contents
    Footer.page-wrapper__footer
</template>
<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";
import { namespace } from "vuex-class";
import Hero from "~/components/Hero.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

// const People = namespace(main.name);

@Component({ components: { Header, Footer, Hero } })
export default class extends Vue {
  public items = [];
  public async mounted() {
    const url = "http://localhost:3333/sites";
    this.items = await this.$axios.$get(url);
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
    background: #dcd1ff;
    margin-right: 50px;
  }
  &__contents {
    width: 80%;
  }
}
</style>
