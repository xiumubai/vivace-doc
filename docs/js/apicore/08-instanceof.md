<!--
 * @Author: 朽木白
 * @Date: 2022-09-03 14:00:10
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-09-03 14:47:10
 * @Description:
-->

# 实现 instanceof

## 原理

```js
a instanceof Object;
```

判断`Object`的 prototype 是否在`a`的原型链上。

## 实现

```js
function myInstanceof(target, origin) {
  const proto = target.__proto__;
  if (proto) {
    if (origin.prototype === proto) {
      return true;
    } else {
      return myInstanceof(proto, origin);
    }
  } else {
    return false;
  }
}
```
