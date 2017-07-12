# 块格式化上下文（Block Formatting Context）
#### BFC（Block formatting context）块级格式化上下文，==是一个独立的渲染区域，只有 Block-level box 参与，== 它规定了内部的 Block-level Box 如何布局，并且与外部元素的关系。


##### 哪些元素会产生BFC
1. ###### 根标签（是 html 而不是 body）
2. ###### display 为 inline-block, flex, inline-flex, table-cell, table-caption
3. ###### position 为 absolute 或 fixed
4. ###### float 元素
5. ###### overflow 不为 visible（默认值）

##### BFC 布局规则
1. ###### ==内部的==Box 会在垂直方向，一个接一个地放置。

2. ###### 属于同一个BFC的两个相邻 block-box 的 margin 会发生重叠

3. ###### BFC 的内容不会与 float-box 重叠。

4. ###### BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

5. ###### 计算 BFC 的高度时，浮动元素也参与计算

6. ###### 注意：普通的 BFC 元素对内侧和对外侧相邻的 block 元素都可以避免 collapsing margins。==但通过 overflow 生成的 BFC 元素只能避免内侧（父子元素之间）的 collapsing margins。==



常规流块框布局 | BFC 布局
---|---
会忽略外部 float 元素，从而可能被 float 覆盖 | 不会忽略外部浮动元素，并且避免被浮动元素覆盖（==absolute/flex 开启的 BFC 除外，剩余适合用于布局的也只有 overflow + block==）
父子块元素之间会有 margin 塌陷 （inline-block 元素会开启BFC，inline元素的垂直 margin 无效）| 父块元素开启 BFC 可以避免 margin 塌陷
块元素自身的垂直 margin 相交时（height / padding / border 都为 0）会有 margin 塌陷 | 元素开启 BFC 可以避免 margin 塌陷（原理同上）
上下相邻的块元素之间会有 margin 塌陷 | 用除 overflow 属性之外的形式开启 BFC 可以避免 margin 塌陷（==overflow 开启的 BFC 只能避免元素内侧的 margin 塌陷==）
会忽略内部 float 元素（浮动），从而造成元素高度塌陷 | 内部浮动元素也参与计算元素高度（==只适用于 overflow 开启的 BFC, 可用于避免元素高度塌陷==）


#### 总结：
##### 1. 三个改变：外部的 float 不会被忽略；margin 不会塌陷；内部的 float 不会被忽略（清除浮动）
##### 2. 三个作用：用于布局(absolute/flex 除外，且剩下的适合用于布局的只有 overflow + block，因为只有它宽度默认填满剩余空间)；用于避免 margin 塌陷(overflow 只避免内侧塌陷)；用于避免 float 造成的高度塌陷(只有 overflow)



http://w3help.org/zh-cn/kb/010/

http://www.cnblogs.com/fsjohnhuang/p/5364580.html






---
# 行内格式化上下文（Inline Formatting Context）


### IFC（Inline Formatting Contexts）行内格式化上下文"，IFC 的 line box（行框模型）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)
