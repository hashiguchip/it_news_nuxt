// mixin.js
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

// You can declare a mixin as the same style as components.
@Component
export default class ListMixin extends Vue {
  public urls = {
    sites: process.env.baseUrlAPI + "/sites",
    category: process.env.baseUrlAPI + "/category"
  };

  public async listInit() {
    //初回データ登録

    if (this.$store.state.sites.sites.length === 0) {
      try {
        const sites = await axios.get(this.urls.sites);
        this.$store.dispatch("sites/fetchSites", sites.data);
      } catch (e) {
        console.log(e);
      }
    }
    this.$store.dispatch(
      "user/updateFavorite",
      {}
      //JSON.parse(this.$localStorage.get("userData"))
    );
  }
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
}
