import axios from "axios";
import { siteUrls } from "~/models/urls";

export const state = () => ({
  list: []
});

export const actions = {
  async fetchCategories({ commit }) {
    const response = await axios.get(siteUrls.category);
    commit("fetchCategories", response.data.category);
  }
};
export const mutations = {
  fetchCategories(state, category) {
    state.list = category;
  }
};
