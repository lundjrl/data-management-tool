import typedocSidebar from '../api/typedoc-sidebar.json'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Data Management Tool",
  description: "A schema management API to help you organize your database",
  head: [
    ['link', {rel: 'icon', href: '../favicon.ico'}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {text: 'API', link: '/api/'}
    ],

    sidebar: [
      {text: 'API', items: typedocSidebar},
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lundjrl/data-management-tool' }
    ]
  }
})
