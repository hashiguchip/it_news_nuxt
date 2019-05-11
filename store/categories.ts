export const state = () => ({
  list: []
});

export const actions = {
  fetchCategories({ commit }, sites) {
    commit("fetchCategories", sites);
  }
};
export const mutations = {
  fetchCategories(state, category) {
    state.list = category;
  }
};
