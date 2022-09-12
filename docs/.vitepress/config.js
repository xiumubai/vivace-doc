/*
 * @Author: 朽木白
 * @Date: 2022-09-03 01:09:44
 * @LastEditors: xxx@xxx.com
 * @LastEditTime: 2022-09-12 21:29:04
 * @Description:
 */

import siderbarGuide from './sidebar';
import sidebarJs from './sidebar/javaScript';

module.exports = {
  title: 'vivace',
  description: 'frontend docs',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    siteTitle: 'Vivace',
    logo: '/logo.png',
    laslltUpdatedText: '最后更新',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xiumubai',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present xiumubai',
    },
    nav: [

      {
        text: 'JavaScript',
        link: '/js/',
        activeMatch: '/js/',
      },
      {
        text: '算法&设计模式',
        link: 'https://algorithm-doc.vercel.app/'
      },
      {
        text: 'Vim',
        link: 'https://vim-doc.vercel.app/'
      },
    ],
    sidebar: {
      '/guid/': siderbarGuide(),
      '/js/': sidebarJs()
    },
  },
};
