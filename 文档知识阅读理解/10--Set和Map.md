/*
* @Author: Zhang Guohua
* @Date:   2019-01-07 20:02:51
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-09 17:59:48
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

### 创建构造
1. new Map:
    1. params: 
        1. [[key, value]]： 实际上使用的是 forEach([key, value] => {map.set(key, value)}); 任何具有 iterator 接口，并且每个成员都是 [key, value] 的形式都可以作为 map 的参数。 set 和 map 可以用来生成新的 map.
2. 属性采用严格相等，但 NaN 和 NaN 是同一个键。

### 实例属性方法

属性：
1. size： 返回成员总数。

操作方法:
1. set(key, value): 返回 Map 结构，可链式操作。
2. get(key)
3. has(key)
4. delete(key)
5. clear()

遍历方法:
1. keys: 返回键名的遍历器。
2. values
3. entries
4. forEach: (fun(value, key, Map), this)


### 关联其他内容
1. 数据结构转换：
    1. Map 转为数组: 可以转为二维数组.
    2. 二维数组转为map:
    3. Map 转为对象: 如果键不是字符串，则会先转为字符串。
    4. 对象转为 map: 直接遍历，构建。
    5. Map 转为 JSON: 依据具体情况分析吧，当然键如果都是字符串是最简单的，不过这样也没什么意义了。可以选择转为数组JSON。
    6. JSON 转为 Map： 所有键都为字符串时，先转为对象, 再转为 map。当JSON数组，每个位置有两个成员的数组，可以转为Map。
2. WeakMap: 
    1. 结构： 与 map 和 weakSet 类似。
    2. params: 除了对象，可以用null作为键名。 
    3. 弱引用键名：不计入垃圾回收机制。 键值仍然属于正常引用。
    4. 目的：有时我们想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用。必须手动删除这个引用，否则垃圾回收机制就不会释放。专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。
    5. 区别：
        1. 没有遍历方法，没有 size 属性。 不支持 clear。



