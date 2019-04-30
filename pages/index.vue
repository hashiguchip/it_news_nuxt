<template lang="pug">
.main-contents
    .main-contents__panels.panels-block
        a.panels-block__panel.panel(:href="item.url" target="_blank" v-for="item in items")
            .panel__text {{item.name}}
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
  public items = [
    {
      id: 1,
      name: "CNET",
      category: [1],
      url: "https://japan.cnet.com/",
      favorite: false
    },
    {
      id: 2,
      name: "ZDNet",
      category: [1],
      url: "https://japan.zdnet.com/",
      favorite: false
    }
  ];
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
