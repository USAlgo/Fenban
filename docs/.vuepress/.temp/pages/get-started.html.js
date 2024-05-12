import comp from "D:/Projects/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"使用文档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"使用文档\",\"description\":\"使用文档\"},\"headers\":[{\"level\":2,\"title\":\"什么是分班算法\",\"slug\":\"什么是分班算法\",\"link\":\"#什么是分班算法\",\"children\":[]},{\"level\":2,\"title\":\"优策分班算法能做什么\",\"slug\":\"优策分班算法能做什么\",\"link\":\"#优策分班算法能做什么\",\"children\":[]},{\"level\":2,\"title\":\"使用说明\",\"slug\":\"使用说明\",\"link\":\"#使用说明\",\"children\":[{\"level\":3,\"title\":\"集成SDK\",\"slug\":\"集成sdk\",\"link\":\"#集成sdk\",\"children\":[]},{\"level\":3,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]},{\"level\":3,\"title\":\"限制和授权\",\"slug\":\"限制和授权\",\"link\":\"#限制和授权\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"get-started.md\"}")
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
