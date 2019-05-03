export interface IPage {
  title: string;
  description: string;
  image: string;
}

export function getPageData(pageKey): IPage {
  const page = { title: "", description: "これはhogehogeのページです", image: "tmp" };
  if (pageKey === "about") {
    page.title = "About";
  }
  if (pageKey === "favorite") {
    page.title = "Favorite";
  }
  if (pageKey === "news") {
    page.title = "News";
  }
  if (pageKey === "programing") {
    page.title = "Programing";
  }
  if (pageKey === "gadget") {
    page.title = "Gadget";
  }
  if (pageKey === "blog") {
    page.title = "Blog";
  }
  if (pageKey === "joke") {
    page.title = "Joke";
  }
  if (pageKey === "/") {
    page.title = "ALL";
  }
  return page;
}

export const state = () => ({
  page: {},
  list: []
});

export const actions = {
  changePage({ commit }, page: IPage) {
    commit("changePageData", page);
  }
};

export const mutations = {
  changePageData(state, page: IPage): void {
    state.page = page;
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
