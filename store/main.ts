export const state = () => ({
  pageName: "",
  list: []
});

export const actions = {
  changePageName({ commit }, pageName) {
    commit("changePageName", pageName);
  }
};

export const mutations = {
  changePageName(state, pageName) {
    state.pageName = pageName;
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
