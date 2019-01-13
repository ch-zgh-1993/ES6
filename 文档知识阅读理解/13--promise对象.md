/*
* @Author: Zhang Guohua
* @Date:   2019-01-10 15:00:11
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-13 17:36:10
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# Promise
异步编程的一种解决方案，比较传统的解决方案，回调函数，和事件更加合理和强大。

## 对比
对比之前的回调函数和事件：
1. 语义更加合理。
2. 函数执行到 resolve, 则立即改变状态，后面的代码再抛出错误，也不会被 catch。 因为状态一旦改变，就不会再改变。
3. 与事件不同，这里再调用，仍然可以获得 resolve 的值。
2. 如果某些事件不断发生，使用 Stream 模式比 Promise 更好。
3. 抛出的错误，不会影响外层代码的执行。

## 基本内容

### 创建
1. new Promise: 
    1. params: (fun(resolve, reject)); 这两个参数由js 引擎提供，无需自己部署。
    2. resolve 将 Promise 对象的状态从 "未完成" 转化为 "resolved", 同理 reject 转为 rejected 状态。

### 方法
- then: function(function(resolveParam), function(rejectParam));
    1. 第二个参数可选。
    2. then 方法默认返回一个新的 Promise 实例。 如果 resolve 或者 reject 中返回了值，则会被返回的新的 Promise 实例作为参数使用。
    3. then 返回的如果不操作，则一直处于 pending 状态，即通过 catch 依然是等待捕获状态
- catch: 当异步操作， Promise 中发生错误，或者 resolve 函数中发生错误，都会被 catch 捕获，此处比 reject 函数捕获的状态多一个。
    + 最好使用 then 和 catch 连写。但是如果要判断具体错误，可以有 reject 。
- finally: 就是无论 Promise 怎样，总是执行。类似于 complete 方法。
    - 并且使用原始方法中的参数。 即 resolve 和 reject 的方法。