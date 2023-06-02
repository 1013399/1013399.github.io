import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

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
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
