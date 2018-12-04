
import {firstName, lastName, sum} from '1.js';
// 整体加载
// import * as one from '1.js';
// 模块整体加载所在的那个对象（上例是one），应该是可以静态分析的，所以不允许运行时改变。下面的写法都是不允许的。
// one.firstName = 'gg';


console.info('name :' + firstName + ' ' + lastName);