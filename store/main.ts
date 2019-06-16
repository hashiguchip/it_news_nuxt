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
  //todo もしcategory.jsonにimageがあったらそっちを優先させるような処理
  if (pageKey === "about") {
    page.title = "About";
    page.description = "このサイトについて";
    page.image = "about.jpg";
  }
  if (pageKey === "favorite") {
    page.title = "Favorite";
    page.description = "お気に入り一覧";
    page.image = "Favorite.png";
  }
  if (pageKey === "news") {
    page.title = "News";
    page.description = "News一覧です";
    page.image = "NEWS.jpg";
  }
  if (pageKey === "programming") {
    page.title = "Programming";
    page.description = "プログラミングブログ一覧";
    page.image = "Programming.jpg";
  }
  if (pageKey === "gadget") {
    page.title = "Gadget";
    page.description = "ガジェットサイト一覧";
    page.image = "Gadget.jpg";
  }
  if (pageKey === "blog") {
    page.title = "Blog";
    page.description = "ブログ一覧";
    page.image = "Blog.jpg";
  }
  if (pageKey === "joke") {
    page.title = "Joke";
    page.description = "おもしろサイト一覧";
    page.image = "Joke.jpg";
  }
  if (pageKey === "/") {
    page.title = "ALL";
    page.description = "全ての一覧";
    page.image = "cat.jpg";
  }
  return page;
}

export const state = () => ({
  page: {
    title: "",
    description: "",
    image: ""
  },
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

export const getters = {
  currentPage(state): IPage {
    return state.page;
  }
};
