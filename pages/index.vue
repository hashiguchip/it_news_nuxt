<template lang="pug">
.main-contents
    .main-contents__panels.panels-block
        .panels-block__panel.panel(v-for="item in items")
            a.panel__text(:href="item.url" target="_blank") {{item.name}}
            img.panel__image(:src="item.image")
            //todo:favorite ハート
            .panel__favorite(
                @click="toggleFavorite(item)"
                :class="{ 'favorite-icon__on': item.favorite, 'favorite-icon__off': !item.favorite }"
            )
</template>
<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";

@Component
export default class extends Vue {
  public async mounted() {
    const url = "http://localhost:3333/sites";
    const sites = await this.$axios.$get(url);
    this.$store.dispatch("main/changePageName", "ホーム");
    this.$store.dispatch("sites/fetchSites", sites);
  }
  // 一覧取得
  public get items(): string {
    return this.$store.state.sites.sites;
  }
  public toggleFavorite(site): void {
    //todo 型とか
    this.$store.dispatch("sites/favorite", site);
  }
}
</script>

<style scoped lang="sass">
.main-contents
    margin: 10px 0px
    background-color: #bbcdbb
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
    border-radius: 6px
    &__text
        z-index: 100
        position: absolute
        display: flex
        align-items: center
        justify-content: center
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(#000000,0.7)
        border-radius: 6px
        font-size: 18px
        color: #d8dce0
    &__image
        z-index: -100
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
    &__favorite
        z-index: 100
        position: absolute
        top: 5px
        right: 5px
        width: 30px
        height: 30px
.favorite-icon
    &__off
        background: url("~@/assets/images/heart_off.svg") no-repeat
        background-size: cover
    &__on
        background: url("~@/assets/images/heart_on.svg") no-repeat
        background-size: cover
</style>
