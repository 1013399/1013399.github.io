import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "小百岳", link: "/demo/" },
  { text: "高山百岳", link: "/demo/" },
  {
    text: "北部",
    prefix: "/posts/",
    children: [
      {
        text: "北北基宜",
        // prefix: "apple/",
        children: [
          { text: "基隆上山走走", link: "#" },
          { text: "台北上山走走", link: "#" },
          { text: "新北上山走走", link: "#" },
          { text: "宜蘭上山走走", link: "#" },
        ],
      },
      {
        text: "桃竹苗",
        // prefix: "banana/",
        children: [
          { text: "桃園上山走走", link: "#" },
          { text: "新竹上山走走", link: "#" },
          { text: "苗栗上山走走", link: "#" },
        ],
      },
    ],
  },
  {
    text: "中南部",
    prefix: "/posts/",
    children: [
      {
        text: "中彰投",
        // prefix: "apple/",
        children: [
          { text: "台中上山走走", link: "#" },
          { text: "彰化上山走走", link: "#" },
          { text: "南投上山走走", link: "#" },
        ],
      },
      {
        text: "雲嘉南",
        // prefix: "apple/",
        children: [
          { text: "雲林上山走走", link: "#" },
          { text: "嘉義上山走走", link: "#" },
          { text: "台南上山走走", link: "#" },
        ],
      },
      {
        text: "高屏",
        // prefix: "banana/",
        children: [
          { text: "高雄上山走走", link: "#" },
          { text: "屏東上山走走", link: "#" },
        ],
      },
    ],
  },
  {
    text: "花東離島",
    // prefix: "/posts/",
    children: [
      {
        text: "花東",
        // prefix: "apple/",
        children: [
          { text: "花蓮上山走走", link: "#" },
          { text: "台東上山走走", link: "#" },
        ],
      },
      {
        text: "金馬澎",
        // prefix: "banana/",
        children: [
          { text: "金門上山走走", link: "#" },
          { text: "馬祖上山走走", link: "#" },
          { text: "澎湖上山走走", link: "#" },
        ],
      },
    ],
  },
  { text: "上山記事", link: "/timeline/" },
]);
