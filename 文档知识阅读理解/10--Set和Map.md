/*
* @Author: Zhang Guohua
* @Date:   2019-01-07 20:02:51
* @Last Modified by:   zgh
* @Last Modified time: 2019-01-07 20:31:29
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# Set, Map
ES6 提供的新的两种数据结构。

## Set
类似于数组，但值是唯一的，即不重复。 Set 本质是构造函数，用来生成 Set 数据结构。
>总有一种类似于 java Array 的感觉。

### 基础内容

1. 创建：
    1. new Set(): (Array<iterable>)

2. 增加值：
    1. 不发生类型转换，判断使用 Same-value-zero equality ，类似于 Object.js。

### 作用
1. 数组去重的好方法。去除字符串中的重复字符(这个一般没啥用)。

### 实例属性方法
属性：
1. constructor: 默认为 Set 函数。
2. size: 实例成员的总数。
