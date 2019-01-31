/*
* @Author: Zhang Guohua
* @Date:   2019-01-21 13:23:17
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-31 16:10:09
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# module 总括
这里主要记录一些概念的内容，具体实践放在了一个项目中，后续可以建立一个完整的ES实践或测试项目，来容纳这些内容。

## 引子
1. 但 web 项目较大时，我们面临的模块化内容，解决拆分拼装。像Ruby的require, Python的import,CSS的@import.
2. 社区方案： CommonJS(服务器), AMD(浏览器), CMD.
3. ES6 就是吸收他们，采取更好的实现，统一这个内容。

## 设计思想
1. 尽量静态化，在编译时就能确定模块的依赖关系，以及输入输出变量。而社区的解决方案是在运行时决定依赖和输入输出关系。
2. CommonJS require 的模块就是对象。运行时加载，只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。 
3. ES6 的模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。 
4. ES6 这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。

```js
// CommonJS 的对象模块
// 即所有方法都加载
let { stat, exists, readFile } = require('fs');
// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;

// // ES6模块， 只加载这三个方法。
import { stat, exists, readFile } from 'fs';
```

优势：
1. 由于 ES6 模块是编译时加载，使得静态分析成为可能。有了它，就能进一步拓宽 JavaScript 的语法，比如引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能。
2. 不再需要UMD模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。
3. 将来浏览器的新 API 就能用模块格式提供，不再必须做成全局变量或者navigator对象的属性。
4. 不再需要对象作为命名空间（比如Math对象），未来这些功能可以通过模块提供。

## 基本内容

- 整体
    + 自动采用严格模式。
    + script type=module;
    
- export 命令
    + 输出模块内部的变量，供其他模块使用。
    + 输出格式要提供对外接口，不能直接输出值。在接口名与模块内建立一一对应关系。
    + 输出值是动态绑定关系，即通过接口，取到实时值。
    + 必须出现在模块的顶级作用域，import 也一样。 原因是由于 编译时确定关系，所以设计理念要求必须在顶层作用域。

```js
//////////
// 基本导出 //
//////////
export var first = '';
// 优先使用，可以看出模块输出了哪些变量。
export {
    first: '',
};
// 可以使用 as 进行重命名。 同一变量可以输出多次不同命名。
export {
    first as v,
    first as v1, 
}
// 输出格式
export var m = 1;
export { m };
```

- import 命令
    + 别名： 使用 name as newName 。
    + 输入的命令本质是输入接口，所以是只读的。不能重新赋值。但是可以改写属性，类似于 const 声明。 但是比较难以查出错误，类似于修改类库的原型。不建议。
    + from 后的文件位置，可以是相对路径，也可以是绝对路径， .js 后缀也可以省略。
    + import 命令具有提升效果，会提升到整个文件的头部。类似于 var 声明的变量。
    + 由于 import 是静态执行的，所以不能使用表达式和变量等运行时才能得到结果的语法结构。
    + import 会执行所加载的模块，可以不输入值。 如果多次执行，只会执行一次。
    + import 是单例模式(Singleton)，所以多次引用同一模块的不同变量，相当于一次引用多个变量。
    + 整体模块加载，使用 import * as math from 'Math'; 此对象不应该在运行时改变，是静态分析的。
    + 静态分析的导入方式，有利于编译器效率提供，但导致无法在运行时加载模块。那么我们经常会使用的条件加载就不能实现了。 import 无法取代 node 的 require 运行时加载命令。 所以目前有一个提案, 即 import() 实现动态加载。
        - 即 import(模块路径) 返回一个 Promise 对象，运行时加载，可以运行在非模块脚本。。类似于 node 的 require. 只不过 require 是异步加载，import() 是同步加载。 
        - 使用场景： 按需加载， 动态路径。

```js
// 基本使用
import { a, b } from 'a.js';
import {c as a } from 'a.js';

// 执行加载的模块, 只会执行一次 lodash 模块。
import lodash;
import lodash;
```

- export default 命令
    + 为了给用户提供方便，让他们不需要知道哪些方法和属性，可以直接加载模块。就需要为模块指定默认输出。
    + 显然，一个模块只能有一个默认输出。 import 后面不需要使用 {}。 本质上就是输出一个叫做 default 的变量或方法，你可以随意起名字。
    + default 后不能跟变量声明语句。因为是将变量或值赋值给 default 变量。所以可以将值直接放在 default 后面。

```js
// 基本使用
export default 1;
export default a;
export default foo;
export default function function_name (argument) {
    // body... 
}
export class {

}

// 导入时
import _ from 'a.js';
```

- 导入并导出模块(复合写法)
    + 相当于转发接口，当前模块并不能使用接口。

```js
// 联合使用
export {a, b} from 'a.js';
export {a as b} from 'a';
export * from 'a'; // 此时不能重命名。
// 默认接口导出
export { default } from 'a';
// 具名接口改为默认接口
export { es6 as default } from 'a';
// 默认接口改为具名接口
export { default as es6 } from 'a';


// 有三种是没有复合写法的。 不过已经有提案写法了。
import * as a from 'a';  // 即不能重命名
import someIdentifier from "someModule";
import someIdentifier, { namedIdentifier } from "someModule";

```

- 模块的继承
    + * 会忽略模块的 default 方法。
    + 所以一个模块可以导入另一个模块的所有方法，并且扩展后再次导出。

- 跨模块的常量
    - 其实就是我们平常做的，将常量放在一个模块中，导出。使用时引用。
    - 不过他说的是引用一个js。

## 加载与实现

- 浏览器加载
    + 通过 script 标签进行加载。 默认为同步加载，当脚本体积较大时，可以使用 defer, async 等属性异步加载脚本。
        * defer: 等整个页面在内存中正常渲染结束(DOM 结构完全生成，其他脚本执行完成)。
        * async： 一旦下载完，就执行这个脚本，执行完以后，在继续渲染。
        * defer 是按照出现顺序进行加载，而 async 是不能保证加载顺序的。
    + 加载 es6 的模块，需要使用 type=module 属性; 而浏览器对于 type=module 的 script 都会异步加载，等页面渲染完，再执行模块脚本。类似于 defer。 
        * 多个依次执行。
        * 可以添加 async 属性，再加载完就执行。 此时，不再依据出现顺序执行。
        * 支持网页内，和外联脚本。
    + 注意事项：
        * 模块顶层的变量，对外不可见。
        * 默认 use strict;
        * 模块之中可以 import, export;
        * 模块顶层的 this 为 undefined;
        * 加载多次，执行一次。

- Node 加载
    + Node 有自己的 模块加载格式，原型是 CommonJS。
    + 目前为两者结合使用，即采用各自的加载方案。

- 循环加载
    + 循环加载，可能会导致递归加载，表示存在强耦合。因此应该避免出现。
    + 实际上，这种情况出现的可能性较高。所以模块加载机制一般会考虑循环加载的问题。
    + CommonJS 的循环加载：
        * 遇到循环加载时，先输出第一个文件加载的部分值，然后执行完第二个文件时，再执行第一个文件。
    + module 的循环加载:
        * 如果模块a依赖模块b, 模块 b 依赖 a, 执行 a 时，会先执行 b。 执行 b 时会默认已经有了 a 接口，继续往下执行。 如果变量没有被定义，则会报错。
        * 可以使用函数，来提升变量定义。此时因为 a.js 中已经执行，所以不会报错。


## ES6 的 module 与 commonJS 的差别
- commonJS 是值得拷贝， module 是值得引用。
    + 值得拷贝，一旦输出，模块内变化就影响不到这个值。
    + es6 是动态引用，即脚本执行时，再去模块里找值，并不缓存。 只读。单一实例模式。
- commonJS 运行时加载， module 是编译时加载。
    + commonJS 加载的是一个对象，该对象只有在脚本运行时才会生成。
    + module 不是对象，他的对外接口只是一种静态定义，在静态解析阶段就会生成。


## ES6 的 ployfill
- ES6 module transpiler: 将 es6 的模块转为 AMD 或者 CommonJS 的写法。
- SystemJS: 调用 google 的 Traceur 转码器。