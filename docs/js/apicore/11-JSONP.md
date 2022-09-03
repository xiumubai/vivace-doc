<!--
 * @Author: 朽木白
 * @Date: 2022-09-03 14:00:10
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-09-03 14:54:43
 * @Description:
-->

# 手动实现 JSONP

- 1.将传入的 data 数据转化为 url 字符串形式
- 2.处理 url 中的回调函数
- 3.创建一个 script 标签并插入到页面中
- 4.挂载回调函数

```js
(function (window, document) {
  'use strict';
  var jsonp = function (url, data, callback) {
    // 1.将传入的data数据转化为url字符串形式
    // {id:1,name:'jack'} => id=1&name=jack
    var dataString = url.indexof('?') == -1 ? '?' : '&';
    for (var key in data) {
      dataString += key + '=' + data[key] + '&';
    }

    // 2 处理url中的回调函数
    // cbFuncName回调函数的名字 ：my_json_cb_名字的前缀 + 随机数（把小数点去掉）
    var cbFuncName = 'my_json_cb_' + Math.random().toString().replace('.', '');
    dataString += 'callback=' + cbFuncName;

    // 3.创建一个script标签并插入到页面中
    var scriptEle = document.createElement('script');
    scriptEle.src = url + dataString;

    // 4.挂载回调函数
    window[cbFuncName] = function (data) {
      callback(data);
      // 处理完回调函数的数据之后，删除jsonp的script标签
      document.body.removeChild(scriptEle);
    };

    document.body.appendChild(scriptEle);
  };

  window.$jsonp = jsonp;
})(window, document);
```
