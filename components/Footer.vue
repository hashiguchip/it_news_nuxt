<template lang="pug">
include ../config/pug/variable.pug
.footer-block
    .footer-block__text #{footerText}
</template>

<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.footer-block {
  display: flex;
  align-items: center;
  justify-content: center;
  &__text {
  }
}
</style>
