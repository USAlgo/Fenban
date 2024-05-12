import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  base: 'fenban',

  // title: '优策分班',
  // description: 'Vue 驱动的静态网站生成器',

  theme: defaultTheme({
    logo: '/images/logo32.png',

    navbar: ['/', '/get-started'],

    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        navbar: [
          // {
          //   text: '首页',
          //   link: '/',
          // },
          {
            text: '使用文档',
            link: '/get-started',
          },
          {
            text: '关于',
            link: '/about',
          },
        ],
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        navbar: [
          // {
          //   text: 'Home',
          //   link: '/',
          // },
          {
            text: 'User Guide',
            link: '/get-started',
          },
          {
            text: 'About',
            link: '/about',
          },
        ],
      },
    },
  }),

  bundler: viteBundler(),

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '优策分班',
      description: '全面和精准的分班算法库',
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'VuePress',
    //   description: 'Vue-powered Static Site Generator',
    // },
  },
})

