/*
 * @Author: 朽木白
 * @Date: 2022-09-03 01:09:44
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-09-03 14:12:31
 * @Description:
 */

import siderbarVim from './sidebar/vim';
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
        text: 'Vim',
        link: '/vim/',
        activeMatch: '/vim/',
      },
      {
        text: 'JavaScript',
        link: '/js/',
        activeMatch: '/js/',
      },
      {
        text: '数据结构&算法',
        items: [
          {
            text: 'Algorithm',
            link: '/algorithm/',
          },
          {
            text: 'DataStructure',
            link: '/dataStructure/',
          },
        ],
      },
    ],
    sidebar: {
      '/vim/': siderbarVim(),
      '/js/': sidebarJs(),
    },
  },
};
