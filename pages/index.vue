<template lang="pug">
.main-contents
    .main-contents__panels.panels-block
        a.panels-block__panel.panel(:href="item.url" target="_blank" v-for="item in items")
            .panel__text {{item.name}}
            img.panel__image(:src="item.image")
            //todo:favorite ハート
            .panel__favorite(:class="favorite")
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
  public items = [];
  public async mounted() {
    const url = "http://localhost:3333/sites";
    this.items = await this.$axios.$get(url);
    this.$store.dispatch("main/changePageName", "ホーム");
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
    height: 1000px
    &__panel
        width: 100%
        height: 100%
.panel
    position: relative
    width: 100%
    height: 100%
    background-color: #3B8070
    &__text
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)
        font-size: 18px
    &__image
        z-index: -100
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: indianred
        font-size: 24px
    &__favorite
        position: absolute
        top: 20px
        right: 20px
        width: 50px
        height: 50px
        background: #cd1514
</style>
