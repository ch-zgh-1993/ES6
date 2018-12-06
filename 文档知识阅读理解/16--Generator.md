/*
* @Author: Zhang Guohua
* @Date:   2018-12-04 19:06:29
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-06 18:45:29
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

## Generator 本身
1. this: ES6 规定 g 函数返回的遍历器对象是 函数的实例。继承了 prototype 上的方法。 g 不是构造函数。
2. 

## 属性(内部关键字， 遍历器方法)
1. yield: 暂停执行。 等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。
    1. yield 只能在 Genterator 函数中。
    2. yield 同时在另一个表达式中，必须在括号内。单独使用。否则报错。
    3. 表达式返回 undefined。
    
1. yield*: 在一个 Generator 函数中执行另一个 Generator 函数。
    1. 遍历带有带有 iterator 接口的数据结构。

2. next: 执行到下一个状态。
    1. 可以有一个参数，作为 上一个 yield 的返回值。
    2. 意义： 改变函数内部的，原始行为。
    3. V8 引擎直接忽略第一个 next 方法的参数。

3. throw: 
    1. 在函数体外抛出，在函数体内捕获错误。throw方法抛出的错误要被内部捕获，前提是必须至少执行过一次next方法。 就没有进入 try 语句，没有执行，当然抛出到外部。抛出的错误被内部捕获，将正常执行。
    
    2. 可以接受一个参数。作为错误信息。
    3. 作为遍历器 iterator 的方法。不同于 throw 命令。
    4. 一旦 Generator 内部抛出错误，并且没有被内部捕获，就不会再继续执行了。此后再调用将返回 value undefined，done 为 true 的对象。即 JavaScript 引擎认为这个 Generator 已经运行结束了。
4. return:
    1. 使遍历器结束，并返回传入的值。 
    2. 如果 在 try finally 结构中，将会等到 finally 中的代码执行完，再执行return 的值。

5. 作为对象属性: 两种都可以。
```js
var a = {
    * generator() {

    },
    generator: function* (){

    }
};
```

## 与其他内容的关系

### Iterator
1. 任何对象的 Symbol.iterator **等于** 该对象的 Genterator,**值一样，但不等**。
2. 可以将 Genterator 赋值给一个对象，是对象具有 Iterator 接口。
3. Generator 返回的 Iterator 的 Symbol.iterator 属性执行后 全等。
```js
function* gen(){
}
var g = gen();
g[Symbol.iterator]() === g
```

### for...of
1. 只返回 Generator 函数中的 yield 的值， 一旦遇到 return ，将中止，且不返回 return 的值。
2. 实现 **斐波切纳数列**。

