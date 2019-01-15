/*
* @Author: Zhang Guohua
* @Date:   2018-12-09 12:47:55
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-07 20:16:44
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# Iterator 遍历器

## what,why
### what
1. 产生原因： 当我们组合 JS 原有的数据结构，形成自己的数据结构时，我们需要一种统一的接口机制，来处理这些数据结构。

2. 内容： 为各种不同的数据结构提供统一的访问机制，任何数据结构只要部署了 Iterator 接口，就可以完成遍历操作。

3. 作用： 
    1. 为各种数据结构提供统一访问，遍历的接口。
    2. 为 for...of 遍历使用。

4. 过程：
    1. 创创建指针对象，指向当前数据结构的起始位置。
    2. 调用 next 指向下一个成员。 返回当前的 成员信息和遍历状态。
    3. 直到结束位置。

5. 注意： 
    1. 遍历器和数据结构是两码事。


## content

### base
1. ES6 默认的 Iterator 接口部署在 **数据结构** 的 Symbol.iterator 属性。
2. Symbol.iterator 对应的就是一个遍历器对象生成函数。

### 原生部署了 遍历器接口 的数据结构
1. Array
2. Map
3. Set
4. String
5. TypedArray
6. arguments
7. NodeList
8. 其他数据结构，需要你在数据结构上，手动实现 Symbol.iterator属性 接口，才可以被 for...of 遍历。
9. 对象：
    1. 其一是 遍历不是线性的，无法决定顺序问题。
    2. 其二是 已经有了 Map 结构。

### 哪些方法使用了 Iterator 接口
1. 解构赋值： 
    1. Array，Set
2. ...： 扩展运算符
3. yield*
4. 数组的遍历会调用遍历器接口，接收数组作为参数的，都调用了？ forEach 内部应该是用了，但是 map ， find 等没有使用，nodelist 无法直接使用这些方法，但可以使用 forEach 方法。


### 属性

### 方法
1. return:
2. next:
3. throw:

