/*
* @Author: Zhang Guohua
* @Date:   2018-12-12 16:39:30
* @Last Modified by:   zgh
* @Last Modified time: 2019-03-21 20:42:49
* @Description: create by zgh
* @GitHub: Savour Humor
*/
# 字符串的扩展

## 总括
- 字符串模板
- Iterator 接口
- repeat: (n) 重复当前字符串 n 次。
- padStart
- padEnd
- includes
- startsWith
- endsWith
- matchAll

## 不常用内容
1. 将字符使用 Unicode 进行表示。
    1. 使用 \u{}
2. codePointAt() 
3. fromCodePoint()
5. normalize()将字符的不同表示方法统一为同样的形式。

## 常用内容
1. Iterator 接口。 遍历字符串。
2. 查询字符串扩展：
    1. includes(str, fromIndex)
    2. startsWith(str, fromIndex)
    3. endsWith(str, fromIndex)
3. repeat: 重复字符串 n 次。
    1. 小数会向下取整。
    2. 负数或 Infinity 会报错。
    3. -1 ~ 0 会取 0;
4. 字符串补全功能:
    1. padStart(length, str);
    2. padEnd()
5. matchAll: 返回一个正则表达式在当前字符串的所有匹配。
6. 模板字符串：  
    1. 定义多行
    2. 嵌入变量，js 表达式，调用函数。
        1. 值将转换为字符串。
    3. 如果为多行，则保持，空格和缩进
7. raw: 用来获取一个模板字符串的原始字面量值的。
