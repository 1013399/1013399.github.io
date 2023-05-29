import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

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

  // Enable it with pwa
  // shouldPrefetch: false,
});
