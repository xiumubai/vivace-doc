<!--
 * @Author: 朽木白
 * @Date: 2022-09-03 14:00:10
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-09-03 14:27:21
 * @Description:
-->

# 单例模式

在合适的时候才创建对像，并且只创建唯一的一个。

创建对象和管理单例的职责被分布在两个不同的方法中，这两个方法组合起来才具有单例模式的威力。

使用闭包实现：

```js
var Singleton = function (name) {
  this.name = name;
};

Singleton.prototype.getName = function () {
  alert(this.name);
};

Singleton.getInstance = (function (name) {
  var instance;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();

var a = Singleton.getInstance('ConardLi');
var b = Singleton.getInstance('ConardLi2');

console.log(a === b); //true
```
