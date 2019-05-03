export interface IUser {
  favorite: number[];
}

export const state = () => ({
  user: {
    favorite: []
  }
});

export const actions = {
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
  },
  removeFavorite(state, removeFavoriteSiteId) {
    state.user.favorite = state.user.favorite.filter(value => {
      return value !== removeFavoriteSiteId;
    });
  }
};
