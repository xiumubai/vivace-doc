export default function sidebarJs() {
  return [
    {
      text: '介绍',
      items: [
        {
          text: '介绍',
          link: '/js/',
        },
      ],
    },
    {
      text: '大厂手写系列',
      collapsible: true,
      items: [
        {
          text: 'summary',
          link: '/js/apicore/',
        },
        {
          text: '01:singletonPattern(单例模式)',
          link: '/js/apicore/01-singletonPattern',
        },
        {
          text: '02:debounce(防抖)',
          link: '/js/apicore/02-debounce',
        },
        {
          text: '02:throttle(节流)',
          link: '/js/apicore/03-throttle',
        },
        {
          text: '04:curry(柯里化)',
          link: '/js/apicore/04-curry',
        },
        {
          text: '05:ajax(promise封装)',
          link: '/js/apicore/05-ajax',
        },
        {
          text: '06:promise(promise实现)',
          link: '/js/apicore/06-promise',
        },
        {
          text: '07:copy(拷贝)',
          link: '/js/apicore/07-copy',
        },
        {
          text: '08:instanceof',
          link: '/js/apicore/08-instanceof',
        },
        {
          text: '09:call&apply&bind',
          link: '/js/apicore/09-call&apply&bind',
        },
        {
          text: '10:ES5-extend',
          link: '/js/apicore/10-ES5-extend',
        },
        {
          text: '11:JSOP',
          link: '/js/apicore/11-JSONP',
        },
        {
          text: '12:upset-array(数组乱序)',
          link: '/js/apicore/12-upset-array',
        },
        {
          text: '13:array',
          link: '/js/apicore/13-array',
        },
        {
          text: '14:img-lazyload(图片懒加载)',
          link: '/js/apicore/14-img-lazyload',
        },
        {
          text: '15:eventLoop',
          link: '/js/apicore/15-eventLoop',
        },
        {
          text: '16:EventEmitter',
          link: '/js/apicore/16-EventEmitter',
        },
      ],
    },
  ];
}
