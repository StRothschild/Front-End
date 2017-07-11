# 元素实际高度的计算

## 1. 元素的实际高度：

#### 元素的实际高度指的是元素在常规流中==实际所占据的高度==。在CSS中，==每一个元素都会有“行框模型”（line box）和“盒模型”（Box Model）==，通过这两个模型就可以计算出元素的实际占据的高度。

- #### 对于行内非替换（inline）元素来说，它的实际高度是==通过“行框模型”（line box）的高度来确定的==，虽然行框（line box）模型只是浏览器渲染模型中的一个概念，无法实际显示。


- #### 对于块（包括 inline-block 和 block）元素来说，它的实际高度是==通过“盒模型”（Box Model）的高度来确定的==。“盒模型”（Box Model）在计算 content 高度的时候，需要依次按照 height 非auto值、行框高度计算值这样的优先次序来获取 content 的高度，从而确定 “盒模型”（Box Model）的实际占据高度。






```
```
## 2. 行内非替换（inline）元素高度计算：

#### ==注意: line-height 属性和 font-size 属性存在于所有元素中，而且会被继承。==


#### 1. 如果元素中的==文本字符没有被标签包裹==，则属于“匿名行内元素”。也可以视为行内非替换（inline）元素，所以也有行内框（inline box）模型。

#### 2. 对于行内非替换（inline）元素的行内框模型（inline box）来说，==line-height 属性可以定义最小高度==，但如果 inline 元素中有子元素的高度高于 line-height 的值，则元素整体的行内框（inline box）高度还会被继续撑大。


#### 3. 对于行内非替换（inline）元素的盒模型（Box Model）来说，==其 content 高度只与自身的文本内容高度（也可以引申认为是 font-size，因为 height 始终 auto）有关==， 即使元素内还存在其他盒模型（Box Model）高度更高的子元素。


#### 4. 上述两个模型是==共用元素中线==的，但是它们之间==不会相互影响==，所以行内框（inline box）的高度是可以大于或小于盒模型内容区（content）的高度的。


#### 5. 虽然不能通过盒模型（Box Model）的高度来影响行内非替换（inline）元素的==实际高度==。但需要注意有一种情况：当 line-height 属性为默认值 normal 时，line-height 的值会取正好包裹元素内容的高度，此时恰好和盒模型（Box Model）中 content 的高度取值一致的，这就很容易误以为是盒模型撑开了行内框（inline box），但实际上还是由 line-height 撑开的，只不过此时他们恰好取值一致罢了。


#### 6. 在行内非替换（inline）元素的盒模型（Box Module）中，==height 值始终为 auto==，另外垂直方向上的 ==margin 属性也是完全无效==的。而垂直方向上的 ==padding / border 属性还是可以设置的，只不过它们无法是影响自身行内框的高度的。所以设置它们只能产生视觉效果（比如添加背景色）==。此外，还有一个用处，就是使行内框模型（inline box）中的 line-height 属性生效（参看第4.4）。例如 padding: 10px, border: 5px solid blue。



#### 7. 行内非替换（inline）元素的两种模型总结：
行内框模型 | 盒模型 | 两种模型的联系
---|---|---
line-height 默认 normal，决定元素高度最小值 | height 始终 auto，设置不生效 | 二者共用中线，但相互之间没有影响
 vertical-align 默认 baseline | padding 生效，但不影响元素高度
 - | border 生效，但不影响元素高度
 - | margin 无效，设置不生效




```
```
## 3. line-height 属性

#### 1. line-height 属性定义的是基线之间的最小距离。但换一个角度，也可以把它理解为行内非替换（inline）元素的行内框（inline box）最小高度和块（包括 block 和 inline-block）元素的行框（line box）最小高度。行内框（inline box）的结构如下图所示：
![行内框模型图](https://github.com/StRothschild/CSS/blob/master/resource/CSS%20%E2%80%94%20%E8%A1%8C%E5%86%85%E6%A1%86%E6%A8%A1%E5%9E%8B%E5%9B%BE.png?raw=true)



#### 2. line-height 对于行内框来说平均分布于文本中线的上下两侧，也就是说行内框模型（inline box）与盒模型（Box Module）是共中线的。




#### 3.如果要让元素（无论是行内元素还是块元素）的 line-height 属性生效，则需要在元素的内部产生行内框（inline box），有了行内框才会有行框（line box）。所以，为了让 line-height 属性生效，可以通过以下四种方式：
- ##### 第一种是在==元素内==添加行内框（inline box）。
```
<div style="line-height:100px">
    <span>any valid inline box</span>
</div>
```

- ##### 第二种是在==元素内==直接添加文本，因为文本本质上是“匿名行元素”，本质上就是一个只能继承属性的行内框。
```
<div style="line-height:100px">
    any text
</div>
```
- ##### 第三种是在==元素内==添加 inline-block 子元素。
```
<div style="line-height:100px">
    <div style="display:inline-block"></div>
</div>
```
- ##### 第四种是在==元素上==通过设置元素的盒模型属性来生成行框：这条规则==只适用于行内非替换（inline）元素==， margin / border / padding 属性都可以使行内非替换（inline）元素的 line-height 属性生效。
```
/* margin / border / padding 任意一个有宽度即可*/
<span style="line-height:100px; margin:10px"></span>
```


#### 3. 当元素（所有元素，包括行内元素和块元素）通过上一步形成行内框（inline box）或行框（line box）后，会有一个特别需要注意的现象：元素的内容里即使里没有任何文本，实际显示的效果，却像有一个文本行内框（inline box）存在一样。但这个虚拟文本行内框是不可见的，也没宽度，只能在行框高度上感知它的存在。==这个 zero-with inline element 在正式文档中被称之为 “strut”==。具体可以参考如下两个例子：

```
/*例一：在父元素中添加没有高度的 inline-block 子元素，行框生效同时出现了虚拟文本行内框。*/

<div style="background: #ccc;">
    <div style="display: inline-block;"></div>
</div>
```
![虚拟文本框效果图1](https://github.com/StRothschild/CSS/blob/master/resource/CSS%20%E2%80%94%20%E8%99%9A%E6%8B%9F%E6%96%87%E6%9C%AC%E6%A1%86%E6%95%88%E6%9E%9C%E5%9B%BE1.jpg?raw=true)


---
```
/*例二：在父元素中添加有高度但是没有行框的 inline-block 子元素, 此时子元素的 baseline 是其盒模型的
margin-bottom，在虚拟文本行内框的作用下会出现空白间隙。*/

<div style="background: #ccc;">
<div style="display:inline-block;height:50px;width:50px;background:#a52a2a;"></div>
</div>
```
![虚拟文本框效果图2](https://github.com/StRothschild/CSS/blob/master/resource/CSS%20%E2%80%94%20%E8%99%9A%E6%8B%9F%E6%96%87%E6%9C%AC%E6%A1%86%E6%95%88%E6%9E%9C%E5%9B%BE2.jpg?raw=true)








```
```
## 4. 块（包括 block 和 inline-block）元素的高度：

#### 关键: 盒模型中 content 的高度计算。

#### 1. 对于块（包括 block 和 inline-block）元素来说，==盒模型 （margin + border + padding + content）的高度值是元素的实际高度。==



#### 2. 在块（包括 block 和 inline-block）元素的盒模型中 content 的高度通过 height 或行框（line box）高度来计算。 其中，==height 属性的优先级最高，如果 height 是非auto值，那么 content 的高度就是 height 属性的计算值。==



#### 3. 在元素的 height 属性是默认值 auto 的情况下。则 content 高度是行框（line box）模型的高度。



#### 4. 在对行框（line box）的处理上，行内非替换（inline）元素和块（包括 block 和 inline-block）元素的策略是完全不同的。在行内非替换（inline）元素中，行框模型（line box）与盒模型的 content 完全没有影响，而在块（包括 block 和 inline-block）元素中，在 height 属性为默认值 auto 的情况下，行框模型（line box）可以撑开盒模型的 content 高度。



#### 5. ==这里还需要明确的是，height 属性和 line-height 属性并不冲突，在指定了 height 属性后，line-heigt 属性对行框模型的高度的影响依然生效。因为两者对 content 高度的产生影响的方式是不同的，height 属性是直接确定盒模型中 content 的高度，而 line-height 属性则是在 height 为 auto （没有指定）的情况下，通过设置最小行框高度来影响 content 的高度，== 具体请看下一条。



#### 6. 上一条说到 line-height 属性可以设置 content 的最小行框高度。实际上，如果没有设置 height 属性，那么块（block 和 inline-block）元素的 content 高度是由内容区中==各个行框（line box）的高度累加而成的。== 所以，如果 line-height 属性生效，实际上就是设置了 content 的最小高度，也是块（block 和 inline-block）元素的最小实际高度。



#### 7. 如果既没有设置 height 属性，也没有设置 line-height 属性，那么 height 会取默认值 auto， content 将根据子元素的高度来自动计算高度。比如：在没有子元素或子元素实际高度为 0 的情况下 content 的值也为 0 ，那么块（block 和 inline-block）元素的实际高度就是 margin + border + padding + 0。





```
```
## 5. 行框模型（line box）

#### 1. 元素的 line-height 属性指定了基线之间的最小距离，也就是行框的最小高度。

#### 2. ==行框的高度是同一行内，最上面行内框的顶边和最下面行内框的底边的垂直距离。这个高度肯定不会小于元素的 line-height 属性。==

#### 3. ==垂直方向上，每个行框的排列中间没有空隙。==

#### 4. 在 Chrome 上解析行框内的元素时发现在处理行内非替换（inline）元素时有bug，如果要让==行内非替换（inline）元素的行内框在行框中被识别存在特定的条件（FireFox 不存在这个bug）。== 具体代码如下：
```
/* 以下代码在 Chrome 中是解析的结果是父元素的行框无法识别并包裹 inline 子元素。
解决的方法就是确保 inline 子元素的行内框可以包裹住自身的 baseline （可以设置 line-height：normal 或使 line-height的计算值足够大）。*/

<div style="font-size: 300px; line-height: 70px; background: #ccc;">
    <span style="font-size: 40px;line-height: 30px;">Xgf</span>
</div>
```

#### 5. 当行内非替换（inline）元素里面嵌套有其他非文本元素时，行内框（inline box）应该被当成行框（line box）来处理。





```
```
## 关于溢出：

#### 关键：由于“行框模型”和“盒模型”是两个不同概念，所以溢出分两种类型：行框模型的溢出和盒模型的溢出。

#### 1. 对于行内非替换（inline）元素来说， height 属性始终是 auto，且不可设置，所以它是没有盒模型溢出的用 line-height 指定了行内框（inline box）的最小高度后，内容依然可以溢出“行内框模型”和“行框模型”，溢出的内容依然可见，还可能和上下行的内容重叠。

#### 2. 对于块元素来说，溢出分两种：
- ##### 第一种是内容溢出元素外（溢出盒模型）。如果元素的 height 属性不是默认值 auto，则内容可能溢出元素外，但溢出的部分是显示还是隐藏，取决于属性 overflow。
- ##### 第二种是元素内的溢出（溢出行框模型）。这种情况和上一条的行内框溢出相似，如果有元素内容有多行，则内容可能溢出行框，还可能和上下行的内容重叠。




---

## 关于 line-height 和 height 相同时，内容垂直居中的原理
#### 1. 文本继承了父元素的 line-height 值。
#### 2. 文本自身的行框（line box）关于文本上下高度对齐，所以文本的中线就是自身行框（line box）的中线。
#### 3. 文本自身的行框（line box）的起始位置是父元素的 content 左上边，与父元素的 height 属性起点相同。
#### 4. 当文本行框（line box）与 height 属性相等（==line-height == height==）时，文本也在内容区（content）中居中。
