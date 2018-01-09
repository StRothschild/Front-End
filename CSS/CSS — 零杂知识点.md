# CSS 的零杂知识点
- #### 盒模型
  盒模型 | 特点
  ---|---
  content-box | 1. float / absolute / fixed 元素的相对起点；2. W3C 浏览器的盒子模型 width 宽度
  padding-box | 1. background-origin 用来设置 background-img 的默认起点；2. overflow（hidden / srcoll）计算的默认起点
  border-box | 1. background-clipe 和 background-color 相对起点；2. 老版本的 IE 浏览器盒子模型 width；3. 需要注意 border 是一个梯形，可用于绘制三角形
  margin  | 在相同 BFC 内，子元素之间垂直方向上的 margin 会塌陷；垂直方向上的 margin 在行内元素非替换（inline）的盒模型中不存在

  > 注意：盒模型的 box-sizing 只有 border-box 和 content-box。



---
- #### 浮动的特点：
  ##### 脱离常规流（原来位置会被占据）

  ##### 强制 inline-block 化

  ##### 浮动到父元素 content 的左上/右上角

  ##### 浮动元素对页面上所有的行内元素敏感（包括文字和 inline-block 元素等）





---
- #### CSS 优先级
  ##### 以下优先级从低到高 ：

  ##### 1、浏览器默认的样式

  ##### 2、外部样式，即 通过 \<link> 标签引入的样式文件

  ##### 3、内部样式，即写在 \<style> 和 \</style> 标签内的样式

  ##### 4、内联样式，即直接写在标签的 style 属性内的样式

  ##### 5、important, 即使用了 !important 关键字的样式





---
- #### 溢出与 overflow
  ##### 子元素溢出部分不会影响父元素外的其他元素

  ##### overflow 默认为 visible

  ##### overflow 以 padding-box 为作用范围

  ##### overflow: hidden 属性并不会 clip 子元素的盒模型，只是对溢出部分不予显示






---
- #### \<a> 标签的伪类
  #### LVHFA（吕护发）
  ##### a:link     /* 未访问的链接*/
  ##### a:visited  /* 已访问的链接*/
  ##### a:hover    /* 鼠标悬停在链接上*/
  ##### a:focus    /* 链接被选中*/
  ##### a:active   /* 链接被点击*/






---
- #### cursor 属性
  #### auto：默认, 根据不同的元素有不同的光标显示
  #### default：默认的光标，通常是一个箭头
  #### pointer：光标呈现为指示链接的指针（一只手）
  #### text：此光标指示文本
  #### wait：此光标指示程序正忙（通常是一只表或沙漏）
  #### help：此光标指示可用的帮助（通常是一个问号或一个气球）
  #### move：此光标指示某对象可被移动
  #### crosshair：光标呈现为十字线

  #### e-resize：此光标指示矩形框的边缘可被向右（东）移动
  #### ne-resize：此光标指示矩形框的边缘可被向上及向右移动（北/东）
  #### nw-resize：此光标指示矩形框的边缘可被向上及向左移动（北/西）
  #### n-resize：此光标指示矩形框的边缘可被向上（北）移动
  #### se-resize：此光标指示矩形框的边缘可被向下及向右移动（南/东）
  #### sw-resize：此光标指示矩形框的边缘可被向下及向左移动（南/西）
  #### s-resize：此光标指示矩形框的边缘可被向下移动（南）
  #### w-resize：此光标指示矩形框的边缘可被向左移动（西）
  #### url：需使用的自定义光标的 URL。注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。






---
- #### 通过 border 实现三角形
  #### 实现三角形只能用 border 属性，因为只有 border 是由四个梯形组成的，并且只有 border 才能单独控制四个组成部分的颜色
  ```css
  width: 0;
  height: 0;                               // content 不需要宽高
  border: 10px solid transparent;          // border 需要宽度，并设置 tansparent
  border-right: 10px solid;                // 这个一定要写后面，覆盖前面的 border, 默认为黑色
  ```





---
- #### 禁止页面中的文本被选中
  ```css
  /* user-select 是非标准的属性，不支持 IE9 及以下的 IE 浏览器 */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  ```





---
- #### transparent / rgba 和 opacity 的区别
  ##### 1. transparent 是全黑色透明的速记法，可以认为 transparent == rgba(0, 0, 0, 0)。在 CSS3 中，transparent 被延伸到任何一个有 color 值的属性上，比如 background-color、border-color、color。

  ##### 2. rgba(0, 0, 0, 0) 在色彩模式与 rgb 相同，只是在 rgb 模式上新增了 Alpha 透明度。

  ##### 3. opacity 是一个属性，而 transparent 和 rgba 是一个值。这里需要注意的是虽然 opacity 并不会继承，但是 opacity 会强制应用于目标元素的所有内容，包含文字、子元素、背景，基于这个特性，opacit不适用于设置模态框的蒙板透明度。

  ```css
  /* transparent */
  background-color: transparent;
  border-color: transparent;
  color: transparent;

  /* rgba */
  R：红色值。正整数 | 百分数
  G：绿色值。正整数 | 百分数
  B：蓝色值。正整数 | 百分数
  A：Alpha 透明度，取值 0~1 之间

  background-color: rgba(255, 255, 255, 1);  // 白
  border-color: rgba(255, 0, 0, 1);          // 红
  color: rgba(0, 0, 0, 1);                   // 黑

  /* opacity */
  opacity: 0.5;
  ```

  | - | transparent | rgba | opacity
  |---|---|---|---
  example | background-color: transparent; | color: rgba(0, 0, 0, 1); | opacity: 0.5;
  元素的属性 |  |  | 是
  属性的值，并且只能用于 color 类型的属性 | 是 | 是 |
  透明度可调节 | 只能是全透明 | 是 | 是
  颜色可设置 | | 是 |
  强制应用于子元素中 | | | 是







---
- #### text-transform
  ##### text-transform 属性用于设置文本的大小写。兼容性极佳。
  ```CSS
  // text-transform 的属性值
  none	          默认值。带有小写字母和大写字母的标准的文本。
  capitalize	    文本中的每个单词以大写字母开头。
  uppercase	      定义仅有大写字母。
  lowercase	      定义无大写字母，仅有小写字母。
  ```
