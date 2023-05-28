import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { searchPlugin } from '@vuepress/plugin-search'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
    lang: 'zh-Hant-TW',
    title: '101上山走走',
    description: '101的上山小記',
    base: 'blog',
    head: [
        [
            'link',
            {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: '/images/favicon.ico'
            }
        ]
    ],
    // head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    // <head>
    //     <link rel="icon" href="/images/logo.png" />
    // </head>
    theme: defaultTheme({
        sidebar: false,
        navbar: [
            {
                text: '小百岳',
                link: '/guide/',
            },
            {
                text: '高山百岳',
                link: '/guide/',
            },
            {
                text: '北部',
                children: [
                    {
                        text: '北北基宜',
                        children: [
                            {
                                text: '基隆',
                                link: '/guide/',
                            },
                            {
                                text: '台北',
                                link: '/guide/',
                            },
                            {
                                text: '新北',
                                link: '/guide/',
                            },
                            {
                                text: '宜蘭',
                                link: '/guide/',
                            },
                        ],
                    },
                    {
                        text: '桃竹苗',
                        children: [
                            {
                                text: '桃園',
                                link: '/guide/',
                            },
                            {
                                text: '新竹',
                                link: '/guide/',
                            },
                            {
                                text: '苗栗',
                                link: '/guide/',
                            },
                        ],
                    },
                ],
            },
            {
                text: '中南部',
                children: [
                    {
                        text: '中彰投',
                        children: [
                            {
                                text: '基隆',
                                link: '/guide/',
                            },
                            {
                                text: '台北',
                                link: '/guide/',
                            },
                            {
                                text: '新北',
                                link: '/guide/',
                            },
                        ],
                    },
                    {
                        text: '雲嘉南',
                        children: [
                            {
                                text: '桃園',
                                link: '/guide/',
                            },
                            {
                                text: '新竹',
                                link: '/guide/',
                            },
                            {
                                text: '苗栗',
                                link: '/guide/',
                            },
                        ],
                    },
                    {
                        text: '高屏',
                        children: [
                            {
                                text: '桃園',
                                link: '/guide/',
                            },
                            {
                                text: '新竹',
                                link: '/guide/',
                            },
                            {
                                text: '苗栗',
                                link: '/guide/',
                            },
                        ],
                    },
                ],
            },
            {
                text: '花東離島',
                children: [
                    {
                        text: '花東',
                        children: [
                            {
                                text: '基隆',
                                link: '/guide/',
                            },
                            {
                                text: '台北',
                                link: '/guide/',
                            },
                        ],
                    },
                    {
                        text: '金馬澎',
                        children: [
                            {
                                text: '桃園',
                                link: '/guide/',
                            },
                            {
                                text: '新竹',
                                link: '/guide/',
                            },
                            {
                                text: '苗栗',
                                link: '/guide/',
                            },
                        ],
                    },
                ],
            },
            {
                text: '編年紀錄',
                link: '/guide/',
            },

            // 嵌套 Group - 最大深度为 2
            // {
            //     text: 'Group',
            //     children: [
            //     {
            //         text: 'SubGroup',
            //         children: ['/', '/'],
            //     },
            //     ],
            // },
            // // 控制元素何时被激活
            // {
            //     text: 'Group 2',
            //     children: [
            //         {
            //             text: 'Always active',
            //             link: '/',
            //             // 该元素将一直处于激活状态
            //             activeMatch: '/',
            //         },
            //         {
            //             text: '文章',
            //             link: '/not-post/',
            //             // 该元素在当前路由路径是 /post/ 开头时激活
            //             // 支持正则表达式
            //             activeMatch: '^/post/',
            //         },
            //     ],
            // },
        ],
    }),
    plugins: [
        backToTopPlugin(),
        nprogressPlugin(),
        externalLinkIconPlugin({
            locales: {
                '/': {
                    openInNewWindow: '新開視窗',
                }
            },
        }),
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜尋',
                }
            },
            // 排除首页
            isSearchable: (page) => page.path !== '/',
            // 允许搜索 Frontmatter 中的 `tags`
            getExtraFields: (page) => page.frontmatter.tags ?? [],
        }),
        googleAnalyticsPlugin({
            id: 'G-27XJ94VCNL'
        }),
    ],
});