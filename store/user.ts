export interface IUser {
  favorite: number[];
}

export const state = () => ({
  user: {
    favorite: [1, 2]
  }
});

export const actions = {
  // registerFavorite({ commit }, favoriteSite) {
  //   commit("registerFavorite", favoriteSite);
  // }
};

export const mutations = {
  // registerFavorite(state, favoriteSite) {
  //   state.user.favorite = favoriteSite;
  // }
};
