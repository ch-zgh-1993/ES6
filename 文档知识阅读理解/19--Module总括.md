/*
* @Author: Zhang Guohua
* @Date:   2019-01-21 13:23:17
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-29 10:15:57
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

## 基本内容
- import 命令
    + 别名： 使用 name as newName 。
           