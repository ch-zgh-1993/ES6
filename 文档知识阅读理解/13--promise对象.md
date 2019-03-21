/*
* @Author: Zhang Guohua
* @Date:   2019-01-10 15:00:11
* @Last Modified by:   zgh
* @Last Modified time: 2019-03-21 20:19:36
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# Promise
异步编程的一种解决方案，比较传统的解决方案，回调函数，和事件更加合理和强大。


## 内容提要

- 异步编程的一种解决方案，对比 回调，事件，async。 Promise 语义化不如 async, Genterator 需要执行器。
- new Promise((resolve, reject) )
- then
- catch
- finally
- all:
- race: 第一个改变状态的值，为总是理的状态。
- resolve: 转为 promise 对象， thenable 属性。
- reject: 同 resolve ，虽然是同步，但是都是在本轮事件结束时再执行， 不是下一轮事件开始时。
- try: 同步同步执行，异步异步执行。

## 对比
对比之前的回调函数和事件：
1. 语义更加合理。
2. 函数执行到 resolve, 则立即改变状态，后面的代码再抛出错误，也不会被 catch。 因为状态一旦改变，就不会再改变。
3. 与事件不同，错过了异步，这里再调用，你会立即得到结果。
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
    - 并且使用原始方法中的参数。 即 resolve 和 reject 的方法。 目前无发现此处的内容。
- all: 将多个 Promise 实例，包装成一个新的实例。
    + 参数： 可以不是数组，但必须具有 iterator 接口。
    + 返回的值可以不是 promise 实例，会先调用 Promise.resolve 方法，将其转化为 Promise 实例。
    + 成功： 当所有的实例都 resolved , all 实例才会 resolved, 参数为每个实例的返回值。
    + 失败： 只要有一个 reject, all 实例的状态就会 reject, 并且使用 reject 实例的返回值，发送给 all 实例的回调函数。
- race: 将多个实例，包装为一个实例。 只要有一个实例改变状态，总实例的状态也会改变。率先改变状态的参数，就是总实例的参数。
    + 如果不是 Promise 实例，会先调用 Promise.resovle 方法，将其转为 Promise 实例。

- resolve: 将现有对象转为 Promise 实例：
    + 参数是一个 Promise 实例，则直接返回。
    + 具有 then 方法的对象，直接执行 then 方法。
    + 参数不是具有 then 方法的对象，或者根本不是对象。直接 resolve , 并将参数作为值传回。
    + 不带任何参数的 resolve 方法，直接返回一个 resovle 状态的 Promise 实例。 
    
- reject: 会返回一个新的 reject 实例，状态为 reject。
    + reject 的参数，会原封不动的坐位 reject 的参数。 与 resolve 不同。
    + 执行也是在 本轮事件结束时。
- try: 提案方法：即对同步和异步方法，都使用该方法执行，然后正常的让同步同步执行，异步异步执行。

## 注意事项
1. 所有立即 resolve 的事件，是在本轮事件的结束时，而不是在下一轮事件开始时。

## 功能使用

1. 图片加载： 等异步事件。
2. 与 Generator() 结合，异步操作， 返回 Promise 实例。
3. 
