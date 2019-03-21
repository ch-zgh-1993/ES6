/*
* @Author: Zhang Guohua
* @Date:   2019-01-09 18:00:57
* @Last Modified by:   zgh
* @Last Modified time: 2019-03-21 19:10:00
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# Proxy
代理，即在对象增加一层拦截，外界对该对象的访问，必须先通过这层拦截。类似于 getter 和 setter ，对操作进行过滤和改写。 根据目标对象生成一个实例，而不是在目标对象上左拦截。

替换了之前的 Object.observe, 是对对象进行的监控。而 Object.defineProperty 是对属性做的监控。


## 创建
1. new Proxy(obj, handler);


## 支持的拦截操作
1. get(target, propKey, receiver)               读取
2. set(target, propKey, propValue, receiver)               设置              返回一个布尔值。
3. has(target, propKey)                         拦截property in操作 返回一个布尔值。
4. deleterProperty(target, propKey)             拦截delete          返回一个布尔值。
5. ownKeys(target)                              拦截getOwnPropertyNames,getOwnPropertySymbols, Object.keys, for...in 返回一个数组。
6. getOwnPropertyDescriptor(target, propKey)    拦截getOwnPropertyDescriptor  返回属性的描述对象。
7. defineProperty(target, propKey, propDesc)    拦截define(Pro, Pros)  返回一个布尔值。
8. preventExtensions(target)                    拦截preventExten..   返回一个布尔值。
9. getPropertyOf(target)                        拦截getPropertyOf   返回一个对象。
10. isExtensible(target)                        拦截isExtensible    返回一个布尔值。
11. setPrototypeOf(target, proto)               拦截setPrototypeOf  返回一个布尔值, 如果目标是对象，还有另外两种操作可以拦截。
12. apply(target, object, args)                 拦截Propxy作为函数调用的操作，比如propxy()propxy.call()propxy.apply()             
13. contructor(target, args)                    拦截Proxy实例作为构造函数调用时的操作    new proxy().


## 注意

- 与 Reflect 都属于反射。
- 对对象进行监控的方式： observe, get/set, watch/unwatch, proxy.