/*
* @Author: Zhang Guohua
* @Date:   2019-01-06 15:20:52
* @Last Modified by:   zgh
* @Last Modified time: 2019-03-21 17:31:38
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# Symbol

引入原因，防止属性命名冲突。即你引入的对象，与你即将增加的方法，属性名一样造成的问题。

## 属性方法总括
- for: 寻找一个以该字符串作为参数的 Symbol 值。
- keyFor: 返回一个已经登记过 symbol 值得 字符串key。 

## 基本内容

### 生成
1. 通过 Symbol 函数。 不能使用 new，Symbol值不是一个对象，所以不能添加属性。
    1.  对象的属性名就可以有两种形式，字符串，Symbol。
    2.  可以接受一个字符串，作为 Symbol 值的描述。 主要用于控制台显示，转为字符串时，容易区分。 toString() 。 可以转为 Boolean ,但是不能转为 Number.

### 注意
1. 不能与其他值进行运算。
2. 作为对象名时，不能用 . 操作符。 定义时，必须使用表达式属性。
3. 作为对象属性时，还是公开属性，不是私有属性。
4. 不会被遍历方法，JSON.stringify() 等返回，可以通过 getOwnPropertySybmols 返回。

### 作用
1. 定义常量，保证常量值不相等。
2. 消除魔术字符串，即我们不需要知道值是什么，只要知道他代表一类内容即可。
3. 可以用于，定义非私有的，但只用于内部的方法。
4. 可以用于确定某个对象的属性值，不被覆盖。

### 方法
1. Symbol.for: 寻找一个以该字符串作为参数的 Symbol 值，如果有，就返回。没有就新建一个，并返回。 该字符串必须以 Symbol.for 声明。 Symbol 值创建的是全局的 Symbol。
2. Symbol.keyFor： 返回一个已经登记过 Symbol 值的 key。 
    1. param: Symbol值

## 内置使用 Symbol 值
作用：
1. 对某一个对象，重定义字符串的方法。
2. 

内容：
1. Symbol.hasInstance: 指向一个方法，instanceof 调用的内部方法。
2. Symbol.isConcatSpreadable: 指向一个值，表示该对象用于 Array.prototype.concat 时，是否展开。
    1. 数组默认为 undefined, 可展开。
    2. 其他的假值。
3. Symbol.species: 指向一个构造函数，创建衍生对象时，会使用该属性。
    1. 作用：
        1. 有些类库是在基类的基础上修改的，那么子类使用继承的方法时，作者可能希望返回基类的实例，而不是子类的实例。
4. Symbol.match: 指向一个函数，当使用 str.match(obj) 时，会调用他。
    1. param: str();
5. Symbol.replace: 原理同上。
    1. params: (obj, replaceStr <String>)

6. Symbol.search: 
7. Symbol.split: 
8. Symbol.iterator: 指向默认遍历器属性。
9. Symbol.toPrimitive: 指向一个方法，对象被转为原始类型时，会调用这个方法，返回对象对应的原始类型的值。
    1. param: (hint<String>(表示当前运算的模式))
        1. Number: 转为数值
        2. String: 转为字符串
        3. Default: 可以转为数值，也可以转为字符串。
    2. 一般是计算时。
10. Symbol.toStringTag: 指向一个方法，在改对象上调用 Object.prototype.toString 方法，如果存在，返回值作为对象的类型。即 [Object returnValue];
    1. 内置对象的Symbol.toStringTag属性:
        - JSON[Symbol.toStringTag]:  'JSON'
        - Math[Symbol.toStringTag]:  'Math'
        - Module 对象M[Symbol.toStringTag]:  'Module'
        - ArrayBuffer.prototype[Symbol.toStringTag]:  'ArrayBuffer'
        - DataView.prototype[Symbol.toStringTag]:  'DataView'
        - Map.prototype[Symbol.toStringTag]:  'Map'
        - Promise.prototype[Symbol.toStringTag]:  'Promise'
        - Set.prototype[Symbol.toStringTag]:  'Set'
        - %TypedArray%.prototype[Symbol.toStringTag]:  'Uint8Array'等
        - WeakMap.prototype[Symbol.toStringTag]:  'WeakMap'
        - WeakSet.prototype[Symbol.toStringTag]:  'WeakSet'
        - %MapIteratorPrototype%[Symbol.toStringTag]:  'Map Iterator'
        - %SetIteratorPrototype%[Symbol.toStringTag]:  'Set Iterator'
        - %StringIteratorPrototype%[Symbol.toStringTag]:  'String Iterator'
        - Symbol.prototype[Symbol.toStringTag]:  'Symbol'
        - Generator.prototype[Symbol.toStringTag]:  'Generator'
        - GeneratorFunction.prototype[Symbol.toStringTag]:  'GeneratorFunction'
11. Symbol.unscopeables: 指向一个对象，该对象指定了使用with关键字时，哪些属性会被with环境排除。 当使用 with 作用域时，会排除指定为 true 的属性。