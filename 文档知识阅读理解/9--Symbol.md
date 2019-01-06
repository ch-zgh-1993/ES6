/*
* @Author: Zhang Guohua
* @Date:   2019-01-06 15:20:52
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-06 15:58:17
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# Symbol

引入原因，防止属性命名冲突。即你引入的对象，与你即将增加的方法，属性名一样造成的问题。

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

### 方法
1. Symbol.for: 寻找一个以该字符串作为参数的 Symbol 值，如果有，就返回。没有就新建一个，并返回。 该字符串必须以 Symbol.for 声明。 Symbol 值创建的是全局的 Symbol。
2. Symbol.keyFor： 返回一个已经登记过 Symbol 值的 key。 
    1. param: Symbol值