import axios from "axios";
import { siteUrls } from "~/models/urls";
import * as json from "../functions/src/category.json";

export const state = () => ({
  list: []
});

export const actions = {
  async fetchCategories({ commit }) {
    // const response = await axios.get(siteUrls.category);
    // commit("fetchCategories", response.data.category);
    commit("fetchCategories", json.category);
  }
};
export const mutations = {
  fetchCategories(state, category) {
    state.list = category;
  }
};

export const getters = {
  getCategories(state) {
    return state.list;
  }
};
