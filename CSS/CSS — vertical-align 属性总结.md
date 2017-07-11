# vertical-align 属性总结

## baseline 的基本概念

#### 1. ==baseline 存在于文本（strut）中，位于文本“x”的下方。==

#### 2. 只有非脱离常规流（normal flow）的行内（inline 和 inline-block）元素的 vertical-align 属性才会在行框内生效，float / absolute 等脱离了正常流，无法参与行框内的垂直方向上的排列。

#### 3. 在行框（line box）中，有一种观点认为应该把==行框内高度最高的子元素（基准元素）的 baseline== 作为整个行框的 baseline，然后别的子元素结合这个 baseline 和自身属性来排列，这是一个角度。但更准确地说，==应该以行框（line box）的 strut 作为基准元素，并以 strut 的 baseline 作为行框的 baseline 更加符合事实，因为 strut 的 vertial-align 始终是  vertical-align。==

#### 4. 对于 inline-block 元素来说，其 baseline 通过以下两个条件判断：
- ##### 条件一： ==该元素存在行框（line box），== 因为元素在垂直方向上的位置（vertical-align）是通过行框模型来计算的。

- ##### 条件二： ==overflow 的值是 visible（默认值就是 visible, 另外 inherit 也可能继承到 visible 属性）。== 这是因为当 overflow 为非 visible 时，将使 inline-block 元素中的 last line box 的渲染处于不确定状态（浏览器可能渲染也可能不渲染）。

- ##### 结论：在同时满足以上两个条件时，元素的 baseline 是其正常文档流内最后一个行框（line box）的 baseline。如果以上两个条件==任意一个没有满足，则为元素盒模型中 margin 的底边。==

- ##### 上述规则的官方文档：The baseline of an 'inline-block' is the baseline of its last line box in the normal flow, unless it has either no in-flow line boxes or if its 'overflow' property has a computed value other than 'visible', in which case the baseline is the bottom margin edge.


![inline-block 元素的baseline](https://segmentfault.com/img/bVlj9J)
   ##### 如上图所示：从左到右分别是: 1.【行框生效，overflow 为默认的 visible】、2.【行框生效，overflow 不为 visible】、3.【行框没有生效（参见“CSS — 元素实际高度计算总结”中的 2.4）】


#### ==5. 注意点：img 标签在图片生效后，行框会消失（line-height 失效，baseline 会变成盒模型的 margin 底边）。==
#### ==6. 注意点：input 标签，行框也会消失（line-height 失效），除了 type="text" 的基线是输入框文字的基线外， 别的 type 类型的 baseline 都是盒模型的 content 底边==



---
```
```
## vertical-align 的属性值
### 以下 5 条都是关于父元素的文本框 baseline 对齐的
### 1. baseline
#### 元素的 ==baseline 与其所在行框（line box）的默认文本框的 baseline== 对齐。



### 2. 长度值
#### 长度值可以使元素在 baseline 对齐的基础上，上升（正值）或下降（负值）指定值的高度。



### 3. 百分比
#### 百分比和长度值的功能相似。可以使元素在 baseline 对齐的基础上，上升（正值）或下降（负值）指定百分比的高度。首先，需要根据==元素自身的实际高度==（行内框高度或盒模型高度）乘以百分比计算出一个长度值，然后通过这个长度值来调整元素的垂直高度。



### 4. super
#### 元素实际高度的顶端（行内框顶边或是盒模型的顶边）与其所在行框（line box）的 \<sup> 文本框的 baseline（比正常默认文本框的 baseline 高）对齐。



### 5. sub
#### 元素实际高度的底端（行内框底边或是盒模型的底边）与其所在行框（line box）的 \<sub> 文本框的 baseline（比正常默认文本框的 baseline 底）对齐。



---
### 以下这 1 条是按默认文本框的 “近似中线” 对齐的
### 6. middle
#### 元素的中点与其所在行框的默认文本框（strut）中==小写字母 “x”== 的中点（大致位于文本框的中线和基线之间）对齐。
![vertical-align:middle](https://github.com/StRothschild/CSS/blob/master/resource/CSS%20%E2%80%94%20vertical-align.jpg?raw=true)



---
### 以下这 2 条是按默认文本框的 顶线/底线 对齐的
### 7. text-top
#### 元素实际高度的==顶端==（行内框顶边或是盒模型的顶边）与其所在==行框（line box）的文本框（strut）的顶端==对齐。



### 8. text-bottom
#### 元素实际高度的==底端==（行内框底边或是盒模型的底边）与其所在==行框（line box）的文本框（strut）的底端==对齐。




---
### 上述 8 条都是以行框的文本框作为对齐对象的，只有以下两条是以==整体行框（line box）== 作为对齐对象的。
### 9. top
#### 元素实际高度的顶端（行内框顶边或是盒模型的顶边）与其所在==行框（line box）的顶端==对齐。



### 10. bottom
#### 元素实际高度的底端（行内框底边或是盒模型的底边）与其所在==行框（line box）的底端==对齐。




## 参考
https://segmentfault.com/a/1190000002668492
http://lingyu.wang/#/post/2014/4/13/vertical-align


```
```
## Bug

#### 在 Chrome 中 ==行内非替换（inline）元素==存在以下 bug:

```html
/* 如果父元素是 inline 元素，则子元素（非文本子元素）永远将父元素在 vertical-align: baseline 时的
位置作为对齐的参考对象。比如， 父元素在 vertical：top 之后相对于 vertical-align: baseline 的位置
发生改变，此时的子元素依然根据父元素 vertical-align: baseline 的位置进行对齐。这一情况在 FireFox
中是表现正常的。*/

<div style="background: #ccc; font-size: 200px;">
  <span style="vertical-align: top; font-size: 100px;">Father
     <div style="display: inline-block; font-size: 20px; vertical-align: text-bottom;">Son
     </div>
  </span>
</div>
```
