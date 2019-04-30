<template lang="pug">
.main-contents
    .main-contents__panels.panels-block
        .panels-block__panel.panel
            .panel__text aaaaaaaaa
        .panels-block__panel.panel
            .panel__text aaaaaaaaa
        .panels-block__panel.panel
            .panel__text aaaaaaaaa
        .panels-block__panel.panel
            .panel__text aaaaaaaaa
        .panels-block__panel.panel
            .panel__text aaaaaaaaa
        .panels-block__panel.panel
            .panel__text aaaaaaaaa
        .panels-block__panel.panel
            .panel__text aaaaaaaaa
</template>
<script lang="ts">
import { Vue } from "nuxt-property-decorator";
import { Component } from "~/node_modules/nuxt-property-decorator";
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
    background-color: indianred
.panels-block
    display: grid
    grid-template-columns: 1fr 1fr 1fr 1fr
    grid-template-rows: auto
    grid-column-gap: 10px
    grid-row-gap: 10px
    justify-items: stretch
    align-items: stretch
    height: 400px
    &__panel
        background-color: orangered
        width: 100%
        height: 100%
.panel
    display: flex
    align-items: center
    justify-content: center
    &__text
        font-size: 24px
</style>
