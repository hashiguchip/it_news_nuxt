<template lang="pug">
include ../config/pug/variable.pug
.header-block
    nuxt-link.header-block__title(to="/") #{siteTitle}
    .header-block__subtitle #{subTitle}
    .header-block__menus
        nuxt-link.header-block__about(to="about") About
</template>

<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.header-block {
  position: relative;
  padding: 0 10px;
  color: #2a272e;
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
</style>
