---
tags: chinese
---

# 如何设置中文字体的斜体？

一般使用伪斜体, 即_楷体_, 或者其他字体代替, 下面方法使用`skew`函数

```typst
#skew(ax: -12deg)[111]111

```
但是针对一大段效果并不好
```typst
#set text(font: ("New Computer Modern", "Noto Serif CJK SC"), lang: "zh")

#skew(ax: -12deg)[
  Typst 是可用于出版的可编程标记语言，拥有变量、函数、包管理与错误检查等现代编程语言的特性，同时也提供了闭包等特性，便于进行函数式编程。以及包括了 [标记模式]、{脚本模式} 与 数学模式 等多种模式的作用域，并且它们可以不限深度地、交互地嵌套。并且通过 包管理，你不再需要像 TexLive 一样在本地安装一大堆并不必要的宏包，而是按需自动从云端下载。
]
```