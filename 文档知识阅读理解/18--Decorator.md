/*
* @Author: Zhang Guohua
* @Date:   2019-01-26 09:31:57
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-27 17:01:58
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

```

