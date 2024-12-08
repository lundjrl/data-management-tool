import { defineConfig } from 'vitepress'
import { useSidebar } from 'vitepress-openapi'

import spec from '../public/openapi.json' assert {type: 'json'}
import typedocSidebar from '../types/typedoc-sidebar.json'

const sidebar = useSidebar({spec,
tagLinkPrefix: '/tags/'
})

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
      {text: 'API Reference', link: '/operations/getIndex.html'}, // Default Route page
      {text: 'Types', link: '/types/'}
    ],
    sidebar: [
      ...sidebar.itemsByTags(),
      ...sidebar.generateSidebarGroups(),
      {text: 'Types', items: typedocSidebar},
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lundjrl/data-management-tool' }
    ]
  },
  vite: {
    plugins: []
  }
})
