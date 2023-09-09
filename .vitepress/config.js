import { defineConfig } from "vitepress";
import Unocss from "unocss/vite";
import {
  transformerDirectives,
  presetIcons,
  presetUno,
  extractorSplit,
} from "unocss";
import extractorPug from "@unocss/extractor-pug";
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import path from "node:path";
import { fileURLToPath } from "node:url";
const dirname = path.dirname(fileURLToPath(import.meta.url));

const meta = {
  title: "Chromatone shop",
  description: "Stickers, posters and printable goods for Chromatone learning, teaching and practice",
  site: "shop.chromatone.center",
  url: "https://shop.chromatone.center/",
  repo: "https://github.com/chromatone/shop",
  locale: "en",
  icon: "shop.svg",
  logo: "shop.svg",
  image: "front.png",
  color: '#cccccc',
  twitter: "davay42",
  author: "davay42",
  tags: "stickers, memo, cheat-sheet, music theory stickers, music instrument stickers, colorful notes, visual music theory, buy posters, print on demand stickers, printable digital goods, colorized notes, colorful music theory, visual aid for learning, educational materials, music materials, colors",
  umamiId: "540d0ad7-1cf7-48bc-b2f4-5607671c563c",
  umamiScript: "https://stats.chromatone.center/script.js"
};

export default defineConfig({
  srcDir: 'shop',
  title: meta.title,
  description: meta.description,
  lastUpdated: false,
  titleTemplate: 'Chromatone Shop',
  lang: "en-US",
  cleanUrls: true,
  sitemap: {
    hostname: 'https://shop.chromatone.center'
  },
  themeConfig: {
    logo: meta.logo,
    lastUpdated: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/chromatone/shop.chromatone.center" },
    ],
    nav: [
      { text: 'Chromatone', link: 'https://chromatone.center' },
      { text: 'Cart', link: '/cart/' },
    ],
  },
  head: [
    ["link", { rel: "icon", href: `/${meta.icon}` }],
    ["meta", { name: "referrer", content: "always" }],
    ["meta", { content: "website", property: "og:type" }],
    ["meta", { content: "yes", name: "apple-mobile-web-app-capable" }],
    ["meta", { content: "yes", name: "mobile-web-app-capable" }],
    ["meta", { content: "Synths online", name: "apple-mobile-web-app-title" }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: `@${meta.author}` }],
    ['meta', { name: 'twitter:creator', content: `@${meta.author}` }],
    ["meta", { name: "theme-color", content: meta.color }],
    ["meta", { name: "keywords", content: meta?.tags }],
    ["meta", { name: "author", content: meta?.author }],
    ["link", { rel: "icon", type: "image/svg+xml", href: meta.url + meta.icon }]
  ],
  transformPageData(pageData) {
    if (pageData.frontmatter?.dynamic) {
      pageData.title = pageData.params?.title
      pageData.description = pageData.params?.description
      pageData.frontmatter = { ...pageData.frontmatter, ...pageData.params, cover: pageData.params?.cover ? `https://db.chromatone.center/assets/${pageData.params?.cover}?fit=cover&format=webp&width=1000` : '' }
    }
  },
  transformHead({ pageData }) {
    const url = pageData.relativePath.split('index.md')[0]
    let image = meta.image
    if (pageData.frontmatter.dynamic) {
      image = pageData.frontmatter?.cover
    }
    return [
      process.env.NODE_ENV === "production" ? ["script", { async: true, defer: true, "data-website-id": meta.umamiId, src: meta.umamiScript }] : null,
      ['meta', { property: 'og:title', content: pageData.title + ' | ' + meta.title }],
      ['meta', { property: 'og:description', content: pageData.description }],
      ['meta', { property: 'og:url', content: meta.url + url }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { name: 'twitter:image', content: image }],
      ['meta', { name: 'twitter:title', content: pageData.title + ' | ' + meta.title }],
      ['meta', { name: 'twitter:description', content: pageData.description }],
    ]
  },
  vite: {
    resolve: {
      alias: {
        "#/": path.resolve(dirname, "../"),
      },
    },
    plugins: [
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: [
          // presets
          'vue',
          'vitepress'
        ],
        dirs: [
          './composables'
        ]
      }),
      Components({
        dirs: ['../components'],
        extensions: ['vue'],
        directoryAsNamespace: true,
        collapseSamePrefixes: true,
        globalNamespaces: ['global'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        exclude: [/node_modules/, /\.git/],

      }),
      Unocss({
        transformers: [transformerDirectives()],
        presets: [
          presetIcons({
            scale: 1.2,
            extraProperties: {
              "vertical-align": "middle",
            },
          }),
          presetUno(),
        ],
        extractors: [extractorSplit, extractorPug()],
      }),
    ],
  }
});
