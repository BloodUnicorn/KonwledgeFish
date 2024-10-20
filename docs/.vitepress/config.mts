import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "知识鱼",
  description: "快捷查找网络资源，收纳常用工具",
  head: [
    ['link', { rel: 'icon', href: '/image/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    ['meta', { name: 'keywords', content: '知识鱼, 网络资源, 常用工具, 收纳' }],
    ['meta', { name: 'description', content: '快捷查找网络资源，收纳常用工具' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/image/fish.svg",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "BLOG", link: "/blog" },
      { text: "资源导航", link: "/navigation" },
      { text: "常用工具", link: "/tools" },
      { text: "编程学习", link: "/free-programming-books-zh" }
    ],

    sidebar: [
      {
        items: [
          { text: "资源导航", link: "/navigation" },
          { text: "常用工具", link: "/tools" },
          { text: "编程学习", link: "/free-programming-books-zh" }
        ],
      },
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg t="1719858149045" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1559" id="mx_n_1719858149046" width="256" height="256"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1560"></path></svg>',
        },
        link: "https://gitee.com/wesix",
      },
    ],
    //aside: false,
    outline: {
      label: "页面导航",
      level: [1, 3]
    },
    lastUpdated: {
      text: "最近更新",
    },
    footer:{
      message: "网络资源搜集整理，快捷工具使用推荐",
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 知识鱼`
    },
    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith('free')) {
          return `https://github.com/EbookFoundation/free-programming-books/blob/main/books/${filePath}`
        } else {
          return `https://github.com/acme/monorepo/edit/main/docs/${filePath}`
        }
      }
    }
  },
});
