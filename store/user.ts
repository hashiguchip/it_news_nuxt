import Vue from "vue";

export interface IUser {
  favorite: number[];
}

export const state = () => ({
  user: {
    favorite: []
  }
});

export const actions = {
  updateFavorite({ commit }, userData: IUser) {
    const unique = new Set(userData.favorite);
    unique.forEach(value => {
      if (Number.isInteger(value)) {
        commit("registerFavorite", value);
      }
    });
  },
  registerFavorite({ commit }, favoriteSiteId) {
    commit("registerFavorite", favoriteSiteId);
  },
  removeFavorite({ commit }, favoriteSiteId) {
    commit("removeFavorite", favoriteSiteId);
  }
};

export const mutations = {
  registerFavorite(state, favoriteSiteId) {
    state.user.favorite.push(favoriteSiteId);
    Vue.localStorage.set("userData", JSON.stringify(state.user));
  },
  removeFavorite(state, removeFavoriteSiteId) {
    state.user.favorite = state.user.favorite.filter(value => {
      return value !== removeFavoriteSiteId;
    });
    Vue.localStorage.set("userData", JSON.stringify(state.user));
  }
};
