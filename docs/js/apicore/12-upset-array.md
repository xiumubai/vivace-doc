<!--
 * @Author: 朽木白
 * @Date: 2022-09-03 14:00:10
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-09-03 14:57:45
 * @Description:
-->

# 数组乱序-洗牌算法

从最后一个元素开始，从数组中随机选出一个位置，交换，直到第一个元素。

```js
function disorder(array) {
  const length = array.length;
  let current = length - 1;
  let random;
  while (current > -1) {
    random = Math.floor(length * Math.random());
    [array[current], array[random]] = [array[random], array[current]];
    current--;
  }
  return array;
}
```
