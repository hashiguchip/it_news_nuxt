<template lang="pug">
  .page-wrapper
    Header.page-wrapper__header
    Hero
    .page-wrapper__main
      nuxt
      .page-wrapper__footer.footer-block
      .footer-block__text aaaaaaaa
</template>
<script lang="ts">
  import { Component, Vue } from "~/node_modules/vue-property-decorator";
  import { namespace } from "vuex-class";

  // const People = namespace(main.name);

  @Component
  export default class extends Vue {
    // @People.State selected;
    /**
     * レイアウト
     */
    public layout() {
      return "default";
    }
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
  .header-block {
    position: relative;
    padding: 0 10px;
    &__title {
      padding-top: 10px;
      font-size: 24px;
    }
    &__subtitle {
      font-size: 14px;
    }
    &__menus {
      position: absolute;
      font-size: 14px;
      top: calc(50% - 7px);
      right: 50px;
    }
    &__about {
      font-size: 14px;
    }
  }
  .footer-block {
    display: flex;
    align-items: center;
    justify-content: center;
    &__text {
    }
  }
</style>
