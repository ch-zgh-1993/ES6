/*
* @Author: Zhang Guohua
* @Date:   2019-01-10 11:11:03
* @Last Modified by:   zgh
* @Last Modified time: 2019-03-21 16:25:21
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# Reflect 总括
Reflect 与 Proxy 一样，为了操作对象而提供了新的API。

## 设计目的
1. 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。 目前某些方法可能同时再两个对象上部署，未来将只在 Reflect 上部署。

2. 修改某些 Object 方法的返回结果，让其变得更加合理。如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。

3. 让 Object 的某些命令式的方法变为函数行为，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。

4. Reflect 对象上的方法和 Proxy 对象一一对应。可以在 Proxy 的操作方法中，调用 Reflect 完成默认行为。

## 方法和属性总括

- apply: 
- constructor:
- deleteProperty:
- get:
- set:
- getOwnPropertyDescriptor:
- getPrototypeOf:
- has:
- isExtensible:
- ownKeys:
- preventExtensions:
- setPrototypeOf:

## 静态方法
公共内容：
- 与定义在 Object 上的方法相比，所有的方法，都会对参数中不是对象的值，报错而不是转为对象。
- 与 Object 的同名方法，最好使用 Reflect ,这也是他的一个意义。

方法列表：
- Reflect.apply(target, thisArg, args)
    + 等同于 Function.prototype.apply.call(func, thisArg, args); 给函数绑定 this 对象后执行给定函数。

- Reflect.construct(target, args)
    + 相等于 new Person(args);

- Reflect.get(target, name, receiver)
    + params: (target, name, receiver)
    + target: 目标对象，如果不是对象，则报错。
    + name: 属性名
    + receiver: 如果属性部署了getter，则以 receiver 作为 this。 无 receiver ，则使用 target 作为 this;

- Reflect.set(target, name, value, receiver)
    + params: (target, name, value, receiver)
    
- Reflect.defineProperty(target, name, desc)
    + 等同于 Object.defineProperty(), 未来这些方法 Object 的方法可能会被废除，所以最好使用 Reflect。
    
- Reflect.deleteProperty(target, name)
    + 相等于 delete obj[name]

- Reflect.has(target, name)
    + 相当于 key in obj 操作。

- Reflect.ownKeys(target)
    + 等同于 Object.getOwnPropertyNames, Object.getOwnPropertySymbols 之和。‘
    
- Reflect.isExtensible(target)
    + 等同于 Object.isExtensible, 判断一个对象是否可扩展。
    
- Reflect.preventExtensions(target)
    + 等同于 Object.preventExtensions,将一个对象变为不可扩展。
    
- Reflect.getOwnPropertyDescriptor(target, name)
    + 基本等于 Object.getOwnPropertyDescriptory。
    
- Reflect.getPrototypeOf(target)
    + 对应于 Object.getPrototypeOf(obj), 但是 Object 会自动将非对象转换为对象，而 Reflect 则是直接报错。

- Reflect.setPrototypeOf(target, prototype)
    + 设置原型对象，对应 Object.setPrototypeOf()。同样，如果目标不是对象，则会报错。
