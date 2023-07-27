import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
// import { sitemapPlugin } from "vuepress-plugin-sitemap2";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-TW",
      title: "101上山走走",
      description: "101的上山小記",
    },
  },

  theme,
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜尋',
        }
      },
    }),
    googleAnalyticsPlugin({
      id: 'G-27XJ94VCNL',
    }),
    // sitemapPlugin({
    //   hostname: 'https://1013399.github.io',
    //   priority: .5
    // }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
