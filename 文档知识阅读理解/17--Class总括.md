/*
* @Author: Zhang Guohua
* @Date:   2019-01-15 19:24:12
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-19 17:31:36
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# Class总括
之前实例对象是通过构造函数，ES6 为了接近传统语言的写法，引入了 Class，作为对象的模板。 class 是语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法而已。 

## 基本内容
创建:
1. class 本身就是函数，只是定义了一种构造函数的另外一种写法。 
2. 方法不需要用 function 关键字。
3. 方法间不需要逗号分隔。
4. 方法默认都是不可枚举的。

使用：
1. 必须使用 new 命令。 不使用会报错，不像普通的构造函数。
2. 类的所有方法都定义在 prototype 上面。
3. 增加方法，通过对原型 prototype, assign 多个方法。
4. 属性除非显示定义在 this 上，否则都是定义在原型上。
5. 可以通过 __proto__ 和 getPrototypeOf 获取实例对象。不建议改变类的原始定义。

基本内容：
1. constructor: 默认方法，通过 new 生成时，自动调用。
    1. 如果没有显示定义，则会被添加一个空的 constructor。
    2. 默认返回实例对象，也可以返回其他对象。
