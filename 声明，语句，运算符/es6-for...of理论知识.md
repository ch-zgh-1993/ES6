/*
* @Author: Zhang Guohua
* @Date:   2018-12-05 09:17:12
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-05 13:18:22
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# 理论知识

# what, why

## what?
1. 来源： 借鉴 C++ 等其他后端语言，引入了 for...of, 作为遍历所有数据结构的统一方法。

2. 目标要求： 数据结构只要部署了 Symbol.iterator 属性，就具备了 iterator 接口，就可以使用 for...of 进行遍历。
    1. Array, Map, Set, String, TypedArray, 伪数组， Generator.

3. 内部： for...of循环内部调用的是数据结构的Symbol.iterator方法。


## feature
1. 可中断，即可以通过 break, continue, return, throw, 进行中断。
    1. break, return, throw, 关闭迭代器。不能再进行迭代。
    2. return 中断函数， break 中断循环， continue 中断此次循环。
    
2. 可以迭代你添加的 具有 可迭代属性的对象。
```js
var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (var value of iterable) {
  console.log(value); // 0, 1, 2
}
```

## careful
1. 牢记目标要求。
2. 对于原生对象，没有 Symbol.iterator 属性，没有遍历器的接口 。 需要部署 Iterator 接口。可以通过其他方式如： keys, entires, 等形式生成数组，遍历数组。或者 Generator 生成遍历器对象。


## 类似内容
1. 除了for...of循环以外，扩展运算符（...）、解构赋值和Array.from方法内部调用的，都是遍历器接口。
