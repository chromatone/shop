import '@unocss/reset/tailwind.css'
import 'uno.css'
import Layout from '../../components/main/MainLayout.vue'

import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {

  }
}