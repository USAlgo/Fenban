import comp from "D:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"关于\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"关于\",\"description\":\"关于\"},\"headers\":[{\"level\":2,\"title\":\"关于我们\",\"slug\":\"关于我们\",\"link\":\"#关于我们\",\"children\":[]},{\"level\":2,\"title\":\"联系方式\",\"slug\":\"联系方式\",\"link\":\"#联系方式\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"about.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
