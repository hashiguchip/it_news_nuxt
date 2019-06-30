/**
 * @file
 *
 * このサイトに関する基本的な情報管理する
 */

export interface IPage {
  key: string;
  title: string;
  description: string;
  image: string;
  order?: number;
}

/**
 * ページ一覧の定義
 * todo: 順番が大事なのでMapにする
 * todo:  どこかに移す
 */
export const pages: IPage[] = [
  {
    key: "favorite",
    title: "Favorite",
    description: "お気に入り一覧",
    image: "Favorite.png"
  },
  {
    key: "/",
    title: "ALL",
    description: "全ての一覧",
    image: "cat.jpg"
  },
  {
    key: "news",
    title: "News",
    description: "News一覧です",
    image: "NEWS.jpg"
  },
  {
    key: "programming",
    title: "Programming",
    description: "プログラミングブログ一覧",
    image: "Programming.jpg"
  },
  {
    key: "gadget",
    title: "Gadget",
    description: "ガジェットサイト一覧",
    image: "Gadget.jpg"
  },
  {
    key: "blog",
    title: "Blog",
    description: "ブログ一覧",
    image: "Blog.jpg"
  },
  {
    key: "joke",
    title: "Joke",
    description: "おもしろサイト一覧",
    image: "Joke.jpg"
  },
  {
    key: "about",
    title: "About",
    description: "このサイトについて",
    image: "about.jpg"
  }
];

// todo ページに順番を降る！！！そしてふつーに+1,-1にするのがいい感じなきガウsる。。

/**
 * メインページ以外の定義
 */
const notMainPage: IPage["key"][] = ["about"];

/**
 * 順番をつける
 */
const pagesHasOrder: IPage[] = pages.map((value, index) => {
  value.order = index;
  return value;
});

/**
 * todo もしcategory.jsonにimageがあったらそっちを優先させるような処理
 * @param pageKey
 */
export function getPageData(pageKey: IPage["key"]): IPage {
  const page = pages.find(page => page.key === pageKey);
  return page !== undefined ? page : pages[0];
}

export const state = () => ({
  page: {
    key: "",
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
  // changeNextPage({ commit }) {
  //   commit("changePageData", page);
  // }
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
  },
  getNextPage: state => () => {
    // 現在のマップ
    const currentPage = state.page;
    const currentPageHasOrder = pagesHasOrder.find(
      value => value.key === currentPage.key
    );

    if (!currentPageHasOrder) return pages[0];
    const currentOrder =
      currentPageHasOrder.order !== undefined ? currentPageHasOrder.order : -1;
    const nextPage = pagesHasOrder.find(value => {
      // 順番を+1
      return value.order === currentOrder + 1;
    });
    return nextPage !== undefined ? nextPage : pages[0];
  },
  getPreviousPage: state => () => {
    // 現在のマップ
    const currentPage = state.page;
    const currentPageHasOrder = pagesHasOrder.find(
      value => value.key === currentPage.key
    );

    if (!currentPageHasOrder) return pages[0];
    const currentOrder =
      currentPageHasOrder.order !== undefined
        ? currentPageHasOrder.order
        : pages.length + 1;
    const nextPage = pagesHasOrder.find(value => {
      // 順番を+1
      return value.order === currentOrder - 1;
    });
    return nextPage !== undefined ? nextPage : pages[pages.length - 1];
  }
};
