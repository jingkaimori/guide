---
tags: [layout]
---
# 为什么第一段没有缩进？

<details>
<summary>参考阅读：</summary>
Typst 官方也意识到了这个问题，希望我们可以早日看见这一问题的解决。

Tracking Issue：https://github.com/typst/typst/issues/311

</details>

首先，英文排版是这样的，LaTeX 默认第一段也是不缩进的。其次，这部分实现有一些 bug，当前还不能通过修改设置来实现缩进。要修复这个问题，可以使用下面的方法：

## 方法 1：假段落（推荐） {#first-line-indent-fake}

```typst
#set par(first-line-indent: 2em)
#let fakepar=context{box();v(-measure(block()+block()).height)}
#show math.equation.where(block: true): it=>it+fakepar // 公式后缩进
#show heading: it=>it+fakepar // 标题后缩进
#show figure: it=>it+fakepar // 图表后缩进
#show enum.item: it=>it+fakepar
#show list.item: it=>it+fakepar // 列表后缩进
// #show xxx: it=>it+fakepar // 其他需要修复缩进的元素
#let noindent()=h(-2em)

= 标题
缩进修复了

$ E=m c^2 $
#noindent() 其中，$c$ 表示光速。 // 缺点是这里要手动 #noindent()

```

优点：简单优雅

缺点：图表和公式后面的段落也会默认缩进。当你需要写“其中，XXX”的时候，要手动取消缩进。

## 方法 2：使用 indenta 包 {#first-line-indent-indenta}

```typst
#set par(first-line-indent: 2em)
#import "@preview/indenta:0.0.3": fix-indent
#show: fix-indent()

= 标题

缩进修复了

$ E=m c^2 $
其中，$c$ 表示光速。
```

优点：方便自由控制图表和公式后面的段落是否缩进

缺点：可能存在一些缩进失效的情况