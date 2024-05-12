export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"D:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"关于"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"使用文档"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页"} }],
  ["/en/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"D:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/en/about.html.js"), meta: {"title":"更多算法"} }],
  ["/en/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/en/get-started.html.js"), meta: {"title":"User Guide"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Home"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
