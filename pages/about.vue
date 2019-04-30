<template lang="pug">
.main-contents
    .about
        .about__text aaaaaaaaaaaaaaa
</template>
<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";
@Component
export default class extends Vue {
  /**
   * レイアウト
   */
  public layout() {
    return "default";
  }
}
</script>

<style scoped lang="sass">
.main-contents
    margin: 10px 0px
.about
    &__text
        background-color: orange
</style>
