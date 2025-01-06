import { defineConfig } from "vitepress"
import Unocss from "unocss/vite"
import {
  transformerDirectives,
  presetIcons,
  presetUno,
  extractorSplit,
} from "unocss";
import extractorPug from "@unocss/extractor-pug"

export default defineConfig({
  srcDir: 'content',
  outDir: 'dist',
  title: "Chromatone shop",
  description: "Stickers, posters and printable goods for Chromatone learning, teaching and practice",
  lastUpdated: false,
  titleTemplate: 'Chromatone Shop',
  lang: "en-US",
  cleanUrls: true,
  sitemap: {
    hostname: 'https://shop.chromatone.center'
  },
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    ["meta", { name: "referrer", content: "always" }],
    ["meta", { content: "website", property: "og:type" }],
    ["meta", { content: "yes", name: "apple-mobile-web-app-capable" }],
    ["meta", { content: "yes", name: "mobile-web-app-capable" }],
    ["meta", { content: "Synths online", name: "apple-mobile-web-app-title" }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@davay42' }],
    ['meta', { name: 'twitter:creator', content: '@davay42' }],
    ["meta", { name: "theme-color", content: '#cccccc' }],
    ["meta", { name: "keywords", content: "stickers, memo, cheat-sheet, music theory stickers, music instrument stickers, colorful notes, visual music theory, buy posters, print on demand stickers, printable digital goods, colorized notes, colorful music theory, visual aid for learning, educational materials, music materials, colors" }],
    ["meta", { name: "author", content: "davay42" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "https://shop.chromatone.center/logo.svg" }]
  ],
  transformPageData(pageData) {
    if (pageData.frontmatter?.dynamic) {
      pageData.title = pageData.params?.title
      pageData.description = pageData.params?.description
      pageData.frontmatter = { ...pageData.frontmatter, ...pageData.params }
    }
  },
  transformHead({ pageData }) {
    const url = pageData.relativePath ? pageData.relativePath.split('index.md')[0] : '';
    let image = 'https://shop.chromatone.center/front.png';
    if (pageData.frontmatter?.dynamic && pageData.frontmatter?.cover) {
      image = `https://db.chromatone.center/assets/${pageData.frontmatter?.cover}`;
    }
    const pageTitle = (pageData.title || 'Store') + ' | Chromatone Shop';
    const pageDescription = pageData.description || 'Stickers, posters and printable goods for Chromatone learning, teaching and practice';

    return [
      process.env.NODE_ENV === "production" ? ["script", {
        async: true,
        defer: true,
        "data-website-id": "540d0ad7-1cf7-48bc-b2f4-5607671c563c",
        src: "https://stats.chromatone.center/script.js"
      }] : null,
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'og:url', content: 'https://shop.chromatone.center/' + url }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { name: 'twitter:image', content: image }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }],
    ].filter(Boolean); // Remove null values from the array
  },
  vite: {
    plugins: [
      Unocss({
        transformers: [transformerDirectives()],
        presets: [
          presetIcons({
            cdn: 'https://esm.sh/',
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