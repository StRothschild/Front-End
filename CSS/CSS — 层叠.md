## CSS 的层叠

- ### 层叠上下文（stacking context）
  > 那些能够提供 Z 轴方向上的栈空间特性并影响子元素渲染顺序的结构，我们称之为层叠上下文（stacking context）。

  - #### 层叠上下文（stacking context）的特点
    ##### 1. 层叠上下文（stacking context）元素和兄弟元素之间相互独立。其内部子元素的在外部层叠上下文（stacking context）中的层叠水平，取决于当前层叠上下文（stacking context）元素在外部层叠上下文（stacking context）中的层叠水平。

    ##### 2. 层叠上下文（stacking context）元素，在其父层叠上下文（stacking context）中，也是被当成普通元素对待，按规则参与层叠顺序的计算。

    ##### 3. 层叠上下文（stacking context）可以阻断元素的混合模式。

  - #### 生成层叠上下文（stacking context）的方式
    ##### 1. 根元素（root）
    ##### 页面的根元素，也就是滚动条的默认的始作俑者 \<html> 元素。这就是为什么，绝对定位元素在 left/top 等值定位的时候，如果没有其他定位元素限制，会相对根元素定位的原因。

    #### 2. absolute / relative 定位并且 z-index 不为 auto
    ##### 对于包含有 position: absolute / relative 的定位元素，以及 FireFox/IE 浏览器（不包括Chrome等webkit内核浏览器）的 position:fixed 元素，当其 z-index 值不是 auto 时，会创建层叠上下文（stacking context）。

    #### 3. 父元素 flex 并且子元素 z-index 不为 auto
    ##### 需要父级是 display:flex / inline-flex，并且子元素的 z-index 不是 auto。此时，这个子元素会创建层叠上下文（stacking context）。

    #### 4. opacity 属性值不为 1

    #### 5. transform 属性值不为 none

    #### 6. filter 属性值不为 normal

    #### 7. isolation 属性值为 isolate

    #### 8. mix-blend-mode 属性值不为 normal






---
- ### 层叠顺序（stacking order）

  ##### 1. 背景和边框：建立层叠上下文元素的背景和边框，作为层叠顺序中的最低级（最先绘制）。

  ##### 2. 负 z-index：z-index 为负的后代元素建立的层叠上下文。

  ##### 3. 块级元素（block）：常规流内非行内非定位后代元素。

  ##### 4. 浮动：非定位浮动元素（排除了 float + relative 的元素）。

  ##### 5. 行内元素（inline + inline-block）：常规流内行内非定位后代元素。

  ##### 6. z-index: 0 / auto 。这些元素建立了新层叠上下文（不一定，详见后文）。

  ##### 7. 正 z-index：（z-index 为正的）定位元素，层叠的最高等级。

![CSS—层叠顺序](https://github.com/StRothschild/CSS/blob/master/resource/CSS%20%E2%80%94%20%E5%B1%82%E5%8F%A0%E9%A1%BA%E5%BA%8F.png?raw=true)

> 处于相同层叠上下文（stacking context）中的元素，首先依据上述规则的先后的优先级进行渲染。如果两个元素的在层叠上下文（stacking context）中的层叠顺序相同，则通过比较两者在文档常规流中所处的位置来确定渲染顺序，先出现的先渲染，后出现的后渲染。

> 产生层叠上下文（stacking context）元素和普通元素有个明显的不同点：普通元素的子元素可以通过 z-index 把自己隐藏在普通元素的背景后面，因为它们处于同一个层叠上下文（stacking context）中；而对于产生了层叠上下文（stacking context）元素来说，其子元素不可能隐藏在层叠上下文（stacking context）元素的背景后面，原因如上图所示，层叠上下文（stacking context）元素最先渲染的一定是背景/边框，然后才是负值的 z-index。











---
### 参考
[http://web.jobbole.com/83409/](http://web.jobbole.com/83409/)

[https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context)

[http://www.cnblogs.com/shytong/p/5121441.html](http://www.cnblogs.com/shytong/p/5121441.html)
