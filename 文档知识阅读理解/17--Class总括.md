/*
* @Author: Zhang Guohua
* @Date:   2019-01-15 19:24:12
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-25 15:20:56
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# Class总括
之前实例对象是通过构造函数，ES6 为了接近传统语言的写法，引入了 Class，作为对象的模板。 class 是语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法而已。 

## 基本内容
创建：

1. class 本身就是函数，只是定义了一种构造函数的另外一种写法。 
2. 方法不需要用 function 关键字。
3. 方法间不需要逗号分隔。
4. 方法默认都是不可枚举的。
5. 可以使用 class 表达式创建，类似于函数表达式。
```js
// 类的名字为 Person, Me 只在类内部使用，指代类。
// 如果内部不用 Me, 可以省略。
// 
// 可以写出立即执行类，类似于函数。
const Person = class Me {

}
```

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
2. getter: 类似于 es5 的 getter.
3. setter: 类似于 es5 的 setter. 且 存取函数都是定义在对象属性的 Descriptor 上。
4. 像对象一样，可以使用 **属性表达式**;
5. static 静态方法： 即不被实例继承的方法。 如果静态方法中包含 this, 则这个 this 指向类，而不是实例。 静态方法可以与非静态方法重名，由实例调用时 指向非静态方法，由类调用时，指向静态方法。
    1. 父类的静态方法，可以被子类继承。
    2. 静态方法也可以从 super 对象上调用。
6. 实例属性除了定义在 constructor 中，也可以写在类的最顶层。 不需要加上 this。
    1. 清晰，简洁。
7. 静态属性，对应实例属性。
    1. 定义静态属性可以通过 Person.prop = '..'; 因为在类定义完成后，才能声明静态属性，这个写法不符合代码组织原则。
    2. ES6 规定， Class 内部只有静态方法，没有静态属性。
    3. 现在有一个提案，即在属性前，加上 static 。。
8. 私有方法和私有属性:
    1. 类似于 java 类。 类的内部可以访问，外部不能访问。这是常见的需求，利于代码的封装。
    2. ES6 没有提供，只能通过模拟方法实现。
    3. 一种方法时加上 _ 表示。但是仍然可以调用。
    4. 另一种方法是讲私有方法移除模块，在模块内通过 call 进行调用。
    5. 将私有方法命名为一个 Symbol 值，达到无法调用的结果。
    6. 提案，将在属性方法名前 加一个 #，表示私有属性。 私有属性也可以设置 getter, setter。
9. new.target: 之前构造函数，一般通过 new 构建，但是不通过 new 也可以完成。 现在可以通过判断 new.target 确保通过 new 生成。如果构造函数不是通过 new ,则 new.target = undefined。 子类内部调用 new.target 返回 子类。

## 继承

实现继承：

1. 通过 extends, 比 修改原型链实现继承，清晰方便。

基本内容：

1. super: 表示父类的构造函数，新建父类的 this 对象。 子类必须在 constructor 中调用 super ，否则新建实例时会报错。 原因是子类的 this ，必须先经过父类的构造函数完成塑造，得到与父类实例同样的属性和方法，再构建子类的实例和方法。
    1. ES5 的继承，是先构建子类的实例对象 this, 再将父类的方法添加到 this 上面。
    2. 如果子类没有定义 constructor ，那么这个方法会被默认添加。
    3. 因此，只有调用 super 后，才可以使用 this 方法。
2. super 用法： 作为关键字，不能直接使用，必须指定为函数还是对象。
    1. 作为函数使用，表示父类的构造函数。 super 调用父类的构造函数，返回的是子类的实例。 this 指向子类。 所以 super 相当于 Class.prototype.constructor.call(subClass); 作为函数时，只能用在子类的构造函数中。
    2. 作为对象： 在普通方法中，指向父类的原型对象。在静态方法中，指向父类。 构造函数中的属性和方法无法取到。调用方法同样，其中的 this 指向子类实例。
        1. 通过 super 对某个属性赋值，这时时赋值在子实例上。
        2. 静态方法中，super 的 this 指向子类。

2. 父类的静态方法与属性。
3. Object.getPrototypeOf(subClass) 可以获取子类的父类。
4. extends: 不仅可以继承类，也可以继承原生的构造函数。

继承:
1. 之前的继承都是继承原型链的方法和属性，要么就是讲实例的属性和方法作为原型链上的一环。没有做到像 class 一样，有两条继承链。
```js
// 实例的原型指向构造函数的原型对象
B.prototype = b.__proto__

// 子类原型对象的原型，指向父类的原型对象
B.prototype.__proto__ === A.prototype

// 子类的原型，指向父类。
B.__proto__ === A

// 类继承实际上是
// 原型链的继承
Object.setPrototypeOf(B.prototype, A.prototype);
// 实例的继承，构造函数的继承
Object.setPrototypeOf(B, A);
```

原生构造函数的继承：

1. 之前，原生构造函数无法继承，因为子类无法获得原生构造函数的内部属性。原生构造函数会忽略 apply 传入的 this。 可以继承原型上的方法和属性，但是构造函数内部的属性和方法无法获取。
2. 之前的继承是，先创建之类的实例对象 this, 在将父类的属性添加到之类上。由于父类的内部属性无法获取，导致无法继承原生的构造函数。
3. 先新建父类的实例对象 this, 然后在用之类的构造函数修饰 this,使得父类的所有行为都可以继承。
4. ES6 规定，对象的构造函数，会忽略其他形式调用传递的参数。

Mixin 模式：
将多个类的接口混入另一个类。
```js
function mix(...mixins) {
  class Mix {}

  for (let mixin of mixins) {
    // 类继承实现的两个链继承
    copyProperties(Mix.prototype, mixin); // 拷贝实例属性
    copyProperties(Mix.prototype, Reflect.getPrototypeOf(mixin)); // 拷贝原型属性
  }

  return Mix;
}
function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== "constructor"
      && key !== "prototype"
      && key !== "name"
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}
```

## 使用总括
1. 私有属性，私有方法 (#), (置顶的)静态属性，置顶属性， 目前在浏览器中是不可用的。 
2. 静态方法通常用于应用程序的工具函数。
3. 我们通常想要的是，使用原型实现方法的继承，使用实例属性实现属性的继承。

## 注意内容
1. 类和模块内的代码，默认使用严格模式。
2. 类不存在变量提升。
3. 拥有函数的 name 属性。
4. 类可以包含 Generator 方法，如果 * 在 Symbol.iterator 方法前，这可以使用 for...of 循环遍历。
5. 类的 this 默认指向类实例。 类的本质是函数，也是对象，所以可以只导出或者引用一个方法，此时 this 就会指向方法的运行环境了。要小心。
    1. 可以在构造函数中绑定 this, 其实语境已经不一样了。
    2. 使用 Proxy 代理，在使用方法时判断，在取不到方法时，绑定 target.