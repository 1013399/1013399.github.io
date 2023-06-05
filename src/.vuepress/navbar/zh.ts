import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "小百岳", link: "/category/小百岳/" },
  { text: "高山百岳", link: "/category/高山百岳/" },
  {
    text: "北部",
    prefix: "/category/",
    children: [
      {
        text: "北北基宜",
        children: [
          { text: "基隆上山走走", link: "基隆上山走走/" },
          { text: "台北上山走走", link: "台北上山走走/" },
          { text: "新北上山走走", link: "新北上山走走/" },
          { text: "宜蘭上山走走", link: "宜蘭上山走走/" },
        ],
      },
      {
        text: "桃竹苗",
        children: [
          { text: "桃園上山走走", link: "桃園上山走走/" },
          { text: "新竹上山走走", link: "新竹上山走走/" },
          { text: "苗栗上山走走", link: "苗栗上山走走/" },
        ],
      },
    ],
  },
  {
    text: "中南部",
    prefix: "/category/",
    children: [
      {
        text: "中彰投",
        children: [
          { text: "台中上山走走", link: "台中上山走走/" },
          { text: "彰化上山走走", link: "彰化上山走走/" },
          { text: "南投上山走走", link: "南投上山走走/" },
        ],
      },
      {
        text: "雲嘉南",
        children: [
          { text: "雲林上山走走", link: "雲林上山走走/" },
          { text: "嘉義上山走走", link: "嘉義上山走走/" },
          { text: "台南上山走走", link: "台南上山走走/" },
        ],
      },
      {
        text: "高屏",
        children: [
          { text: "高雄上山走走", link: "高雄上山走走/" },
          { text: "屏東上山走走", link: "屏東上山走走/" },
        ],
      },
    ],
  },
  {
    text: "花東離島",
    prefix: "/category/",
    children: [
      {
        text: "花東",
        children: [
          { text: "花蓮上山走走", link: "花蓮上山走走/" },
          { text: "台東上山走走", link: "台東上山走走/" },
        ],
      },
      {
        text: "金馬澎",
        children: [
          { text: "金門上山走走", link: "金門上山走走/" },
          { text: "馬祖上山走走", link: "馬祖上山走走/" },
          { text: "澎湖上山走走", link: "澎湖上山走走/" },
        ],
      },
    ],
  },
  {
    text: "其他分類",
    prefix: "/tag/",
    children: [
      { text: "武陵四秀", link: "武陵四秀/" },
      { text: "谷關七雄", link: "谷關七雄/" },
    ],
  },
  { text: "上山走走記事", link: "/category/上山走走記事/" },
]);
