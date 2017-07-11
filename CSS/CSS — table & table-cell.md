# CSS — table & table-cell
#### 1. table
- ##### table 元素的宽度等于元素内所有的 table-cell 宽度相加之和。

- ##### table 元素的 table-layout: fixed 可以开启子元素的布局优先模式（内容宽度优先于 width 属性），如果没有开启则是以内容宽度优先（默认）。

特性 | table | block | flex | inline-block
---|---|---|---|---
占据整行 | 是 | 是 | 是 |
margin 可以设置为 auto | 是 | 是 | 是 |
width 默认 100% |  | 是 | 是 |
width 默认 auto | 是 |  | | 是


#### 2. table-cell
- ##### table 元素的宽度等于元素内所有的 table-cell 宽度相加
- ##### table-cell 设置 margin 无效
- ##### table-cell 设置 verical-align: middle 后子元素垂直居中
- ##### 同一行内的 table-cell 高度相同
- ##### 同一列内的 table-cell 宽度相同
