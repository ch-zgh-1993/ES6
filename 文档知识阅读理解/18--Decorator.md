/*
* @Author: Zhang Guohua
* @Date:   2019-01-26 09:31:57
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-29 09:58:23
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# Decorator (修饰器)

许多面向对象语言，都有修饰器函数，来修改类的行为。目前有一个提案，将这个功能引入了 ECMAScript。
>目前浏览器没有实现，故先理解其内容吧。

## 基础内容

修饰器的行为： 
1. 以类作为输入。
2. 修饰器也可以接受参数。 
3. 修饰器对类行为的改变是发生在编译时，而不是在运行时。这意味着，修饰器能在编译阶段运行代码。
4. 修饰器不仅可以修饰类，还可以修饰类的属性。
5. 多个修饰器，从外到内进入，从内到外执行。
```js

//////////
//  修饰类 //
//////////
@decorator
class A {}

// 等同于 
class A {}
A = decorator(A) || A;

// 修饰器增加参数
@decorator(true)
class A {}

function decorator(){
    return function(target){

    }
}

//////
// 修饰属性 //
//////

class A {
    @decorator
    name() {

    }
}
// target: 类的原型对象， A.prototype
// name: 要修饰的属性名
// description: 该属性的描述对象
function decorator(target, name, description) {

}

//////
// 多个修饰器 //
//////
class A {
    @dec(1)
    @dec(2)
    method(){}
}
function dec(id){
  console.log('evaluated', id);
  return (target, property, descriptor) => console.log('executed', id);
}
// evaluated 1
// evaluated 2
// executed 2
// executed 1
```

## 实现功能
1. Mixin 混入模式: 

## 相关库
1. core-decorators.js:
    1. @autobind:  this 绑定实例。
    2. @readonly 修饰器使得属性或方法不可写。
    3. @override: 检查子类的方法，是否正确覆盖了父类的同名方法，如果不正确会报错.

## 与其他相关

问题：

1. 修饰器为什么不能用来修饰函数？
    1. 主要原因是，函数存在声明提升。而类就没有这方面的问题。


