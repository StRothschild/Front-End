# 元素定位
## 1. static （默认定位方式）
- #### 常规流（normal flow）：处于常规流中

- #### z-index：无效（一直为 0。两个同级别的元素，后渲染的会覆盖前面渲染的）

- #### 强制 inline-block 化：无

---
- #### 定位过程：
  ##### 元素出现在正常的常规流和文字流中，并且忽略 top, bottom, left, right 和 z-index 等属性值。




```
```
## 2. absolute 绝对定位

- #### 常规流（normal flow）：==脱离常规流==

- #### z-index：==生效==（默认为 auto，会覆盖正常流中的元素，只有当数值被设置为负数（小于0）时才会被正常流中的元素覆盖）

- #### 强制 inline-block 化：==有==（原来是 block 的元素默认的 width 的值从 100% 变成 auto；原来是 inline 的元素可以设置 width、height 等）

- #### 注意：不能和 float 浮动同时使用。


---
- #### 定位过程：

    ##### 1. 如果没有设置 top / right / bottom / left（TRBL） 属性的情况下，==元素会 inline-block 化，但仍处于常规流下应该在的位置上（虽然看起来还在原来的位置，但实际上已经完全脱离了常规流和文本流，后面的元素会填补当前元素的位置，造成重叠的效果）。==

    ##### 2. 如果设置了 TRBL 中的任意项，则元素会==通过包含块（Containing Block）进行定位。==

    ##### 3. absolute 定位以 ==[ 最近的 ]== ==[ 非static（注意 inherit 要取计算后的值来判断）的 ]== ==[ 祖先元素 ]== 作为包含块（Containing Block）。如果没有这样的元素，则==以浏览器窗口（即顶层的 window 对象，而不是 Document 或 Html 节点）作为包含块。==

    ##### 4. 定位的起点是==包含块的 border 左上内侧。==



```
```
## 3. float 浮动

- #### 常规流（normal flow）：==脱离常规流==

- #### 对行内（包括 inline 和 inline-block）元素敏感：是

- #### z-index：不生效，会覆盖常规流中的元素（block 元素），但和文本流元素（inline 和 inline-block）出于同一水平。

- #### 强制 inline-block 化：==有==（原来是 block 的元素默认的 width 的值从 100% 变成 auto；原来是 inline 的元素可以设置 width、height 等）


- #### 注意: 不能和 absolute 同时使用。


---
- #### 定位过程：

    ##### 1. 设置 float 属性为非 none 后，元素会根据 float 属性浮动到所在行框的==最右/左上侧==（定位的==起点是包含块的 padding 右/左上内侧==），或者到==遇到同方向的浮动元素为止。==

    ##### 2. 和 absolute 绝对定位不同的是，float 只是脱离常规流（normal flow），但仍然参与所在包含块的行内排列。所以，它并没有完全脱离常规流，行内（包括 inline 和 inline-block）元素依然对它的存在敏感。

    ##### 3. 在包含块内所有的浮动元素浮动后，剩下块（block） 类型的兄弟元素会填充 float 元素留下的空间（不敏感），而对于行内（inline 和 inline-block）兄弟元素及其子孙行内（inline 和 inline-block）元素来说，它依然占据空间（敏感），所以非 block 元素会依次填充浮动元素之间剩余的空间。 总而言之，==只有非浮动的 block 类型的兄弟元素及其子孙 block 元素会忽略 float 元素的存在。别的兄弟元素及其子孙非 block 元素和所有的文字还是会对 float 元素敏感。== 注意，absolut 元素未被设置 TRBL 之前也会对 float 元素敏感，因为被强制 inline-block 化了。

    ##### 4. 假如在当前行框中剩余的空间不足够浮动元素使用，那么这个元素会跳至下一行，直到到某一行拥有足够的空间为止。

- #### 总结：
    ##### 1. 浮动元素只能==在包含块的行框内左右浮动。==
    ##### 2. ==浮动元素之间相互影响，不能重叠。==
    ##### 3. ==浮动元素排列完成后，再渲染正常元素==，其中块元素可以占据浮动元素的空间，而非 block 元素只能占据浮动元素剩下的空间。



---
### 清除浮动
- #### 为什么要清除浮动？
    ##### 如上文所述，元素浮动之后脱离了常规流（normal flow），只对行内（inline 和 inline-block）元素敏感。对于父元素来说，浮动元素的高度不可感知，在高度为 auto 时，会造成高度塌陷（height = 0）。

- #### 方式一: 利用 overflow （开启BFC）清除浮动
    ##### 这个方法的好处在于：在清除了浮动的同时，还可以避免父子元素的 margin 重叠现象。但一般不用这个方法，因为会导致无法显示需要溢出的元素。
```
/* 将以下样式应用于浮动元素的父节点中 */
.clean {
    overflow: hidden/auto/scroll;
    /* 总之，要让 overflow 的值 不为默认值visilble */
}
```

- #### 方式二: 添加额外的元素来清除浮动
    ##### 这个方法的好处在于: 简单明了，通俗易懂。但一般也不用这个方法，因为添加了额外的元素，违背了结构与表现的分离原则。
```
/* 将以元素添加到浮动元素之后 */
<div style="clear:both;"></div>
```

- #### 方式三: 利用伪元素清除浮动
    ##### ==推荐使用这个方法。没有额外的文本结构。==
```
/* 将以下样式应用于浮动元素的父节点中 */
.clean:after {
    /* 添加伪元素来清除浮动 */
    content: '\20';    /* 空格的 ASCII HEX值，也可以直接用空格替代*/
    clear: both;

    /* 使伪元素不可见 */
    // 大v互粉
    display: block;
    visibility: hidden;
    height: 0;
    font-size: 0;
}
/* for IE6 IE7 不支持伪元素，通过添加 haslayout 来清除浮动 */
.clean {
    zoom: 1;
}

```
- #### 参考
http://blog.csdn.net/lycop/article/details/51283224
http://www.positioniseverything.net/easyclearing.html




```
```
## 4. relative 相对定位
- #### 常规流（normal flow）：处于常规流中

- #### z-index：==生效==（默认为 auto，如果元素偏离文档流位置，会覆盖正常流中的其他元素，只有当数值被设置为负数（小于0）时才会被正常流中的元素覆盖因为定位元素相对正常元素是后渲染的）

- #### 强制 inline-block 化：无


---
- #### 定位过程：

    ##### 1. 由于不脱离常规流，元素会根据当前位置进行定位，通过 TRBL 属性调整定位。




```
```
## 5. fixed 绝对定位
- #### fixed 定位可以视为 absolute 定位的一个子类，因为它们的定位方式和特点完全相同。==唯一不同的是 fixed 定位的 TRBL 永远相对于页面窗口。==


```css
/* 添加一个全页面的蒙版 */
position: fixed;
top: 0;             // 设置 TRBL 来脱离常规流
left: 0;
height: 100%;       // 设置蒙版的宽高
width: 100%;

background: beige;  // 设置蒙版的背景色和透明度
opacity: 0.5;

z-index: 9999;     // 设置一个最高的 z-index ，来覆盖页面中的其他绝对定位元素
```



```
```
## 6. 总结

| 特点 | static | absolute（fixed） | float | relative |
|---|---|---|---|---|---|
| 处于常规流中 | 是 | 否 | 否 | 是 |
| 对页面中的行内（inline / inline-block / 文本）元素敏感 | 是 | 否 | 是 | 是 |
| 强制 inline-block（BFC） | 否 | 是 | 是 | 否 |
| z-index 生效 | 否 | 是| 否 | 是 |






```
```
## TRBL
#### 如图为 TRBL 属性值的作用方式，这四个值也可为负数，==如果为负数，则朝相反的方向移动。==
![TRBL定位图](http://w3help.org/zh-cn/kb/009/009/position_edge.png)
