// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import {theme, useOpenapi} from 'vitepress-openapi'
import { h } from 'vue'

import spec from '../../public/openapi.json'

import type { Theme } from 'vitepress'

import 'vitepress-openapi/dist/style.css'
import './style.css'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  async enhanceApp({ app, router, siteData }) {
    const openapi = useOpenapi({
      spec
    })

    console.log('James router::', router)
    console.log('siteData', siteData)

    theme.enhanceApp({app, openapi})
  }
} satisfies Theme
