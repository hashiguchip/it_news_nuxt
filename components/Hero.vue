<template lang="pug">
.page-hero
    img.page-hero__img(src="~/assets/images/test.jpg")
    .page-hero__text {{pageName}}
</template>

<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";

@Component
export default class extends Vue {
  public get pageName(): string {
    return this.$store.state.main.pageName;
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
  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #f5f5f5;
    font-size: 24px;
    text-shadow: 0 2px 7px #000000;
  }
}
</style>
