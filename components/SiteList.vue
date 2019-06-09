<template lang="pug">
.panels-block
    .panels-block__panel.panel(v-for="site in siteList")
        a.panel__text(:href="site.url" target="_blank") {{site.name}}
        img.panel__image(:src="getImage(site)")
        .panel__favorite(
            @click="toggleFavorite(site)"
            :class="favoriteStatus(site)"
        )
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class extends Vue {
  /**
   * 表示するサイトリスト
   */
  @Prop({ type: Array })
  siteList: {}[];

  public isFavorite(id: number): boolean {
    const favoriteSitesIds = this.$store.state.user.user.favorite; //ここがデータ持つ
    return favoriteSitesIds.includes(id);
  }
  public toggleFavorite(site): void {
    if (!this.isFavorite(site.id)) {
      this.$store.dispatch("user/registerFavorite", site.id);
    } else {
      this.$store.dispatch("user/removeFavorite", site.id);
    }
    this.$store.dispatch("sites/favorite", site);
  }
  public get favoriteStatus() {
    return function(item) {
      return this.isFavorite(item.id)
        ? "favorite-icon__on"
        : "favorite-icon__off";
    };
  }
  /**
   * 画像URLの作成
   */
  public get getImage() {
    return function(site) {
      return require("~/assets/images/sites/" + site.image + ".png");
    };
  }
}
</script>

<style lang="sass" scoped>
.main-contents
    position: relative
    margin: 10px 0px
.panels-block
    display: grid
    grid-template-columns: 1fr 1fr 1fr 1fr
    grid-auto-rows: 150px
    grid-column-gap: 10px
    grid-row-gap: 10px
    justify-items: stretch
    align-items: stretch
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
        background: rgba(#000000,0.6)
        border-radius: 6px
        font-size: 18px
        color: #d8dce0
    &__image
        z-index: -10
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
