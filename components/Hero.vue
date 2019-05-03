<template lang="pug">
.page-hero
    img.page-hero__img(src="~/assets/images/test.jpg")
    .page-hero__title {{page.title}}
    .page-hero__description {{page.description}}
</template>

<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";
import { IPage } from "~/store/main";

@Component
export default class extends Vue {
  public get page(): IPage {
    return this.$store.state.main.page;
  }
}
</script>

<style lang="scss" scoped>
.page-hero {
  position: relative;
  height: 300px;
  &__img {
    width: 100%;
    height: 100%;
  }
  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #f5f5f5;
    font-size: 24px;
    text-shadow: 0 2px 7px #000000;
  }
  &__description {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #f5f5f5;
    font-size: 18px;
    text-shadow: 0 2px 7px #000000;
  }
}
</style>
