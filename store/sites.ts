import axios from "axios";
import { siteUrls } from "~/models/urls";

export const state = () => ({
  sites: []
});

export const actions = {
  async fetchSites({ commit }) {
    const response = await axios.get(siteUrls.sites);
    commit("fetchSites", response.data.sites);
  },
  favorite({ commit }, site) {
    commit("favorite", site);
  }
};

export const getters = {
  all: state => {
    return state.sites;
  },
  blog: state => {
    return state.sites.filter(site => {
      return site.category.includes(1);
    });
  },
  gadget: state => {
    return state.sites.filter(site => {
      return site.category.includes(1);
    });
  },
  joke: state => {
    return state.sites.filter(site => {
      return site.category.includes(1);
    });
  },
  news: state => {
    return state.sites.filter(site => {
      return site.category.includes(1);
    });
  },
  programming: state => {
    return state.sites.filter(site => {
      return site.category.includes(1);
    });
  }
};
export const mutations = {
  fetchSites(state, sites) {
    state.sites = sites;
  },
  favorite(state, site) {
    const id = site.id - 1;
    state.sites[id].favorite = !state.sites[id].favorite;
  },
  add(state, text) {
    state.list.push({
      text: text,
      done: false
    });
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  }
};
