export interface IPage {
  title: string;
  description: string;
  image: string;
}

export function getPageData(pageKey): IPage {
  const page = {
    title: "",
    description: "",
    image: ""
  };
  if (pageKey === "about") {
    page.title = "About";
    page.description = "このサイトについて";
  }
  if (pageKey === "favorite") {
    page.title = "Favorite";
    page.description = "お気に入り一覧";
  }
  if (pageKey === "news") {
    page.title = "News";
    page.description = "News一覧です";
  }
  if (pageKey === "programing") {
    page.title = "Programing";
    page.description = "プログラミングブログ一覧";
  }
  if (pageKey === "gadget") {
    page.title = "Gadget";
    page.description = "ガジェットサイト一覧";
  }
  if (pageKey === "blog") {
    page.title = "Blog";
    page.description = "ブログ一覧";
  }
  if (pageKey === "joke") {
    page.title = "Joke";
    page.description = "おもしろサイト一覧";
  }
  if (pageKey === "/") {
    page.title = "ALL";
    page.description = "全ての一覧";
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
