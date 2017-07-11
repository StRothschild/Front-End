# flex 布局
1. ### flex 布局的基本概念
  #### 任何一个容器都可以指定为 Flex 布局，包括行内元素。
  ![image](https://github.com/StRothschild/CSS/blob/master/resource/CSS%20%E2%80%94%20flex.png?raw=true)



---
2. ### flex 容器的属性
- #### flex-direction
  ##### flex-direction 决定主轴的方向。默认是 row（水平从左到右），还有 row-reverse 、 column 、 column-reverse。

- #### flex-wrap
  ##### flex-wrap 定义如何换行。默认是 nowrap（不换行），还有 wrap （在第一行下方）、wrap-reverse（在第一行上方）。

- #### flex-flow
  ##### flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为row nowrap。


- #### justify-content
  ##### justify-content 属性定义了项目在主轴（水平方向）上的对齐方式。默认值为 flex-start（左对齐），还有 flex-end（右对齐)、center(居中)、space-between（两端对齐，项目之间的间隔都相等）、space-around（每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍）。


- #### align-content
  ##### align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

- #### align-items
  ##### align-items 属性定义项目在交叉轴（垂直方向）上如何对齐。。默认值为 stretch（拉伸），还有 flex-start（上对齐)、flex-end（下对齐)、center(居中)、baseline（项目的第一行文字的基线对齐）。



---
3. ### 属性值对比

-|justify-content|align-items|align-content
--|--|--|--
flex-start|有（默认）|有|有
flex-end|有|有|有
center|有|有|有
stretch|--|有（默认）|有（默认）
baseline|--|有|--
space-between|有|--|有
space-around|有|--|有


---
4. ### flex-item 的属性
- #### flex-grow
  ##### flex-grow 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

- #### flex-shrink
  ##### flex-shrink 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

- #### flex-basis
  ##### lex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

- #### flex
  ##### flex属性是flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选，比如 flex:1 就等于 flex：1 1 0%;


- #### order
  ##### order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。


- #### align-self
  ##### align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。


---
5. ### flex 属性取值
默认|1（非负数字）|auto|none
--|--|--|--
0 1 auto|1 1 0%|1 1 auto|0 0 auto



---
### 参考
  http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool
