export const state = () => ({
  sites: []
});

export const actions = {
  fetchSites({ commit }, sites) {
    commit("fetchSites", sites);
  },
  favorite({ commit }, site) {
    commit("favorite", site);
  }
};

export const getters = {
  isFavorite: state => {
    return state.sites.filter(site => {
      return site.favorite;
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
