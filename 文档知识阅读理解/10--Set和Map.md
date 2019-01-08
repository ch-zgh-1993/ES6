/*
* @Author: Zhang Guohua
* @Date:   2019-01-07 20:02:51
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-08 20:00:54
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# Set, Map
ES6 提供的新的两种数据结构。

## Set
类似于数组，但值是唯一的，即不重复。 Set 本质是构造函数，用来生成 Set 数据结构。
>总有一种类似于 java Array 的感觉。

### 基础内容

1. 创建：
    1. new Set(): (Array<iterable>)

2. 增加值：
    1. 不发生类型转换，判断使用 Same-value-zero equality ，类似于 Object.js。

### 作用
1. 数组去重的好方法。去除字符串中的重复字符(这个一般没啥用)。
2. 通过 Set 结构，可以容易得实现，并集，交集，

### 实例属性方法
属性：
1. constructor: 默认为 Set 函数。
2. size: 实例成员的总数。
3. Set.prototype[Symbol.iterator] === Set.prototype.values. 所以可以直接用 for...of 循环。

操作方法:
1. add(value): 返回 Set 结构。
2. delete(value): 返回 boolean 值。
3. has(value): 返回 boolean 值。
4. clear(): 清除所有成员。

遍历方法： Set结构键名和键值相同。
1. keys: 同 values 一样，返回的都是遍历器对象，需要通过 for...of 进行解析。
2. values: 
3. entries:
4. forEach: (fun(val, key, Set), this);

### 关联内容
1. Array.from 可以将 Set 结构转为数组。 Array.from(new Set(arr));
2. ...： 内部使用 for...of ，可以用于Set结构。
3. WeakSet结构: 不重复值的集合。
    1. 与set 的区别： 值只能是对象。
    2. 对象的引用为弱引用，即依赖引用计数的垃圾回收机制，不会考虑改对象在 weakset 中的引用。因此 weakset 的值是不稳定的，即垃圾回收机制运行前后会发生变化，因此 ES6 规定 weakset 不可遍历。这个特点适用于 weakmap。
    3. 创建: new WeakSet()
    4. params: (arr<iterator>)
    5. 方法：
        1. WeakSet.prototype.add(value):
        2. WeakSet.prototype.delete(value):
        3. WeakSet.prototype.has(value)：

## Map
Object 的本质是键值对的集合(Hash 结构),只能用字符串当做键，这是一个较大限制。Map则是解决了这个问题，他的键可以是任何类型的值，是一种更完善的 Hash 结构实现。
        


