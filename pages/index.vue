<template lang="pug">
.main-contents
    .main-contents__panels.panels-block
        .panels-block__panel.panel(v-for="item in items")
            a.panel__text(:href="item.url" target="_blank") {{item.name}}
            img.panel__image(:src="item.image")
            .panel__favorite(
                @click="toggleFavorite(item)"
                :class="favoriteStatus(item)"
            )
</template>
<script lang="ts">
import { Component, Vue } from "~/node_modules/vue-property-decorator";
import { getPageData } from "~/store/main";

@Component({
  transition: (to, from) => {
    return "page";
  }
})
export default class extends Vue {
  public async mounted() {
    const url = "http://localhost:3333/sites";
    const sites = await this.$axios.$get(url);
    this.$store.dispatch("main/changePage", getPageData("/"));
    this.$store.dispatch("sites/fetchSites", sites);
    this.$store.dispatch(
      "user/updateFavorite",
      JSON.parse(this.$localStorage.get("userData"))
    );
  }
  public isFavorite(id: number): boolean {
    const favoriteSitesIds = this.$store.state.user.user.favorite;
    return favoriteSitesIds.includes(id);
  }
  public get favoriteStatus() {
    return function(item) {
      return this.isFavorite(item.id)
        ? "favorite-icon__on"
        : "favorite-icon__off";
    };
  }
  // 一覧取得
  public get items(): string {
    return this.$store.state.sites.sites;
  }
  public toggleFavorite(site): void {
    if (!site.favorite) {
      this.$store.dispatch("user/registerFavorite", site.id);
    } else {
      this.$store.dispatch("user/removeFavorite", site.id);
    }
    this.$store.dispatch("sites/favorite", site);
  }
}
</script>

<style scoped lang="sass">
@import "~/assets/css/components/main_list.sass"
</style>
