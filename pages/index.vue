<template lang="pug">
.main-contents
    .main-contents__panels.panels-block
        .panels-block__panel.panel(v-for="item in items")
            a.panel__text(:href="item.url" target="_blank") {{item.name}}
            img.panel__image(:src="item.image")
            //todo:favorite ハート
            .panel__favorite(
                @click="toggleFavorite"
                :class="favoriteIcon"
            )
</template>
<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";

@Component
export default class extends Vue {
  public items = [];
  public favoriteStatus = true;
  public async mounted() {
    const url = "http://localhost:3333/sites";
    this.items = await this.$axios.$get(url);
    this.$store.dispatch("main/changePageName", "ホーム");
  }
  public get favoriteIcon() {
    return this.favoriteStatus ? "favorite-icon__on" : "favorite-icon__off";
  }
  public toggleFavorite(): void {
    this.favoriteStatus = !this.favoriteStatus;
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
        top: 5px
        right: 5px
        width: 30px
        height: 30px
.favorite-icon
    &__off
        background: url("~@/assets/images/heart_off.svg") center
        background-size: cover
    &__on
        background: url("~@/assets/images/heart_on.svg") no-repeat
        background-size: cover
</style>
