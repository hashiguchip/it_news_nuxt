const TRACKING_ID = "UA-143512517-1";

/* eslint-disable */

export default ({ app }) => {
  /*
   ** クライアントサイドかつプロダクションモードでのみ実行
   */
  if (process.env.NODE_ENV !== "production") return;
  /*
   ** Google アナリティクスのスクリプトをインクルード
   */
  // prettier-ignore
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    // @ts-ignore
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    // @ts-ignore
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  /*
   ** 現在のページをセット
   */
  // @ts-ignore
  ga("create", TRACKING_ID, "auto");
  /*
   ** ルートが変更されるたびに毎回実行（初期化も実行される）
   */
  app.router.afterEach((to, from) => {
    /*
     ** Google アナリティクスにページビューが追加されたことを伝える
     */
    // @ts-ignore
    ga("set", "page", to.fullPath);
    // @ts-ignore
    ga("send", "pageview");
  });
};
