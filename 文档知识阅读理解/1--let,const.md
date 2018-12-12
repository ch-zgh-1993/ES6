/*
* @Author: Zhang Guohua
* @Date:   2018-12-12 16:01:04
* @Last Modified by:   zgh
* @Last Modified time: 2018-12-12 16:09:17
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# let,const
两者主要都是为了说明新增的块级作用域。在之前只有函数作用域，全局作用域。

## 共同特点
1. 暂时性死区： 声明后方可使用。

## let 
1. 使用于解决变量泄露到上级环境中的问题，如 for 语句。

## const 
1. 本质上是指变量所对应的内存地址不能改变，改变会报错。
2. 声明时需要赋值，否则报错。
3. 一般用于声明在块内不做改变的变量。


## 差异
1. var, function 还用于声明全局变量。
2. let, const ,class 作为块变量声明。
