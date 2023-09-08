import { defineConfig } from "vitepress";

import Unocss from "unocss/vite";
import {
  transformerDirectives,
  presetIcons,
  presetUno,
  extractorSplit,
} from "unocss";
import extractorPug from "@unocss/extractor-pug";

const meta = {
  title: "Chromatone shop",
  description: "Stickers, posters and printable goods for Chromatone learning, teaching and practice",
  site: "shop.chromatone.center",
  url: "https://shop.chromatone.center/", //the end slash here is mandatory
  repo: "https://github.com/chromatone/shop",
  locale: "en",
  icon: "shop.svg",
  logo: "shop.svg",
  image: "front.png", // used for og:image, should be 1.91x1 ratio
  color: '#cccccc',
  twitter: "davay42",
  author: "davay42", //your twitter handle
  tags: "stickers, memo, cheat-sheet, music theory stickers, music instrument stickers, colorful notes, visual music theory, buy posters, print on demand stickers, printable digital goods, colorized notes, colorful music theory, visual aid for learning, educational materials, music materials, colors",
  // add it if you use [umami](https://umami.is/) for stats
  umamiId: "540d0ad7-1cf7-48bc-b2f4-5607671c563c",
  umamiScript: "https://stats.chromatone.center/script.js"
};

export default defineConfig({
  title: meta.title,
  description: meta.description,
  titleTemplate: 'Chromatone Shop',
  lang: "en-US",
  cleanUrls: true,
  themeConfig: {
    logo: meta.logo,
    lastUpdated: true,
    socialLinks: [
      { icon: "github", link: "https://github.com/chromatone/shop.chromatone.center" },
    ],
    nav: [
      { text: 'Chromatone', link: 'https://chromatone.center' },
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
    plugins: [
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
  },
});
