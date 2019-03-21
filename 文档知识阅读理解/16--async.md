/*
* @Author: Zhang Guohua
* @Date:   2018-12-04 19:03:16
* @Last Modified by:   zgh
* @Last Modified time: 2019-03-21 20:22:50
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# async 总括

简化异步操作，作为 Generator 的语法糖。 也可以看做是多个 Promise 组成的一个 Promise 对象。

## 概括
- 简化异步操作，作为 Generator 的语法糖， 也可以看做是多个异步操作，最终返回一个 Promise 对象。
- 更加语义化： async 比 *, await 比 yield；
- 返回值容易操作。
- async, await, 遇到 await 如果是 Promise/thenable ，等待结果，如果不是，直接返回。
- resolve, reject, catch。

## 优劣
相对于 Generator 函数的优点：
- 内置执行器： 可以像普通函数一样执行，不像 Generator 需要调用 next() 方法， 或者 co 模块。
- 语义化： async 比起 *, await 比起 yield 异步。
- 更广的适用性： 
    + co 模块约定， yield 命令后只能跟 Thunk 函数或 Promise对象。
    + await: 后可以是 Promise 对象，或者原始类型的值，原始类型的值会立即返回结果(不转换为 Promise 对象)，如果是 thenable 对象，则会当做 Promise 进行处理。。
- 返回值： 
    + Generator 返回值是 Iterator 对象。
    + async 函数的返回值是 Promise 对象。 

## 基本内容

创建 async 函数:
```js
// 函数声明
async function A() {

}
// 函数表达式
const a = async function() {}
// 对象的方法
const obj = {
    async A () {

    },
};
// class
class Person {
    async A () {

    },
}
// 箭头函数
const A = async () => {};
```

执行过程:
1. 遇到 await 会先略过，之后后面的内容，类似于 js 的执行。
2. 等函数同步操作执行完后，如果遇到 return 或者 抛出错误,或者 Promise 没有解决自己的 reject 时，会执行 then/catch 方法。 不会等异步操作结束再执行。
    1. 这里立即 resolved 的内容，并没有放在同步操作的末尾执行。 所以并没有转为 Promsie 对象。
3. 在到各个 await 时机，执行 await 内容即可。
4. 如果 await 后跟的是 Promsie，则会等待 Promise 对象结束后，再执行后面的内容。


语法： 
1. resolve 时： 
    1. async 内部的 return 值，作为其参数。
    2. 正常执行完毕后。 undefined.
2. reject 时: 抛出的错误对象作为其参数。
3. await命令: 
    1. 后跟 Promise 实例，则返回对象结果。
    2. 如果不是，则直接返回对应的值。
    3. thenable 对象，则返回 Promise 对象。
4. catch: 
    1. 当有任意一个 await 后的 Promise 时触发。 并且不继续执行。
    2. 代码异常同样触发，类似 throw error 且不继续执行。


## 注意事项
1. await 后的 Promise 可能 reject。
2. 多个 await ，考虑好执行关系即可，是顺序，还是并发。
3. await 只能使用在 async 函数中。
4. await 保留函数的运行堆栈。 因为 Promise 会阻挡外部函数的执行。

## 实现原理


## 与其他异步函数的比较
1. 事件
2. 回调
3. Generator
4. Promise
5. 异步遍历器: asyncIterator.next() 返回一个 Promise 对象。
    1. 使用 for...await...of 遍历 asyncIterator 对象。
6. 异步 Generator 函数, 返回一个异步遍历器对象。
    1. async function* map(){}
    2. yield* 语句后也可以跟一个异步遍历器。
