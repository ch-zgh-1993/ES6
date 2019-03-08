/*
* @Author: Zhang Guohua
* @Date:   2019-01-15 19:17:12
* @Last Modified by:   zgh
* @Last Modified time: 2019-03-08 14:44:38
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# ES6 的一些总结
从初识，到阅读，到练习，到学习文档，再到熟练掌握，清楚寓意，明白由来，张口既来，是一段长远的经过，也不是三五遍的使用，就可以根深蒂固。对于ES6，达到 ES5的了解(所知仍冰山一角)，还是需要很长的时间，这里就做个对这一项学习的记录吧。 

## 文档知识的学习，阅读，理解

## 使用过程中的一些练习，思考，总结

## 辅助ES6 的一些内容

## 对于 ES6 的一些理解，总结


## 对这一技术的理解

该版本升级，其实主要是对语言的扩展(即语言发展到一定程度需要扩展新的内容，比如 let const, string 模板, symbol, Generator, iterator, for...of), 对语言的简化，模糊内容的明确，升级(对象，数组，函数的扩展，Reflect, Proxy, async)，学习社区或其他语言的思想，扩充(Set, Map, Promise, class, Module)。

- 具体内容
    + Proxy: 替换了之前的 Object.observe, 是对对象进行的监控。而 Object.defineProperty 是对属性做的监控。更全面的监控吧。
    + Set/Map: 语言学习：  HashSet 和 HashMap 学习的把。
    + let/const：  var 满足不了我们的需求，适用新的块级作用域。
    + 解构赋值: 语言发展，简化操作。
    + 字符串： 模板字符串，简化操作，大部分对 Unicode 码点支持。 16， 32， 64
    + 正则: 扩充方法。
    + 数值，函数，对象，数组: 都是简化我们的操作，语言发展，重定义一些之前不清晰的内容。
    + Symbol： 
    + Reflect: 将语言内部的方法放在 Reflect 上。 修改报错为返回结果，更加合理。将某些操作变化函数式(has); 与Proxy 上的方法一一对应。
    + Promise: 异步的解决方案。 回调和事件实现异步。
    + Iterator, for..of: 遍历器和统一处理方法。
    + Generator: 也是ES6提供的一种异步编程解决方案。
    + async: 异步函数，更直观的异步解决方案。 相近于 Generator, 只不过是使用 awiat 代替了 yield; 返回一个 promise 函数，
    + class: 创建对象和对象继承都使用了 构造函数，对于 C++ 和 Java 人员难以理解，所以增加了 Class 作为对象模板。 更加清晰面向对象的语法。
    + Module: 响应模块化，统一了模块化的的解决方案。我们之前使用 AMD, CMD, CommonJS 等。现在都有了替代方案。