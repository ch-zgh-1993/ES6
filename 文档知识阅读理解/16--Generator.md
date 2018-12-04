/*
* @Author: Zhang Guohua
* @Date:   2018-12-04 19:06:29
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-04 20:45:05
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# Generator 

## what, why ?
### what
1. 是 ES6 提供的一种**异步编程**的解决方案。

2. 不同的理解：
    1. 是一个状态机，内部封装了许多状态。
    2. 会返回一个遍历器，记录每一个内部状态。

3. 形式：
    1. function* ()
    2. yield: 定义不同的内部状态。

4. 使用：
    1. 调用不执行，返回一个遍历器对象。
    2. 使用 next() 移动状态，并执行中间的代码, 返回 函数状态， 指针的值。
    3. 直到函数结束，或者出现 return 语句。
    4. yield 暂停， next() 执行。

## 属性(内部关键字)
1. yield: 暂停执行。 等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。
    1. yield 只能在 Genterator 函数中。
    2. yield 同时在另一个表达式中，必须在括号内。单独使用。否则报错。
    3. 表达式返回 undefined。

2. next: 执行到下一个状态。
    1. 可以有一个参数，作为 上一个 yield 的返回值。
    2. 意义： 改变函数内部的，原始行为。
    3. V8 引擎直接忽略第一个 next 方法的参数。


## 方法

## 与其他内容的关系

### Iterator
1. 任何对象的 Symbol.iterator **等于** 该对象的 Genterator。
2. 可以将 Genterator 赋值给一个对象，是对象具有 Iterator 接口。
3. Generator 返回的 Iterator 的 Symbol.iterator 属性执行后 全等。
```js
function* gen(){
}
var g = gen();
g[Symbol.iterator]() === g
```

### for...of

