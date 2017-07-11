# CSS 布局总结

### 1. 定宽 + 自适应
```html
/* 布局结构 */
<div class="father">
  <div class="left"> This is left !</div>
  <div class="right"> This is right !</div>
</div>
```


##### 1. [float] + [margin-left]
```css
.left{
    width: 200px;             // 定宽
    float: left;              // 脱离正常流
}
.right{
    margin-left: 200px;
}
// 优点： 简单，容易理解
```



##### 2. [absolute] + [margin-left]
```css
.left{
    width: 200px;           // 定宽
    position: absolute;     // 脱离正常流
}
.right{
    margin-left: 200px;
}
// 实现原理与上一例子相似
// 优点： 简单，容易理解
```


##### 3. [table] + [[table-cell] + [table-cell]]
```css
.father{
    display: table;         // 设置成 table 元素
    width: 100%;            // 默认是 auto, 设置成 100% 撑满窗口
    table-layout: fixed;    // 设置布局优先，而不是内容优先
}
.left{
    display: table-cell;    // 设置成单元格元素
    width: 200px;           // 单元格宽度
}
.right{
    display: table-cell;    // 设置成单元格元素
}
// 通过 table-layout: fixed 设置布局优先
// 优点： 简单，容易理解
```






### 2. 不定宽 + 自适应
##### 1. [float] + [overflow]
```css
.left{
    float: left;            // BFC 对外部 float 元素敏感
}
.right{
    // 以下任选一条开启 BFC 模式即可
    overflow: hidden(非默认值atuo即可);
    display: inline-block;
    display: table;
    display: table-cell;
    display: flex;
}
// 优点： 简单，容易理解
```



##### 2. [table] + [[table-cell] + [table-cell]]
```css
.father{
    display: table;    // 设置成 table 元素
    width: 100%;       // 默认是 auto, 设置成 100% 撑满窗口
}
.left{
    display: table-cell;    // 设置成单元格元素
    width: 0.1%;            // 单元格宽度设成很小，由内容撑开
}
.right{
    display: table-cell;    // 设置成单元格元素
}
// 去掉了 table-layout: fixed 并且 width: 0.1% 让 cell 由内容撑开
// 优点： 简单，容易理解
```



##### 3. [flex] + [flex: 1]
```css
.father{
    display: flex;
}
.left{
  // 不定宽，自动成为 flex-item
}
.right{
    flex: 1;               // 等于 flex: 1 1 0;
}
// 优点：简单方便
// 缺点：flex 兼容性不佳
```



---
### 3. 等分布局
```html
/* 布局结构 */
<div class="father">
  <div class="son">son</div>
  <div class="son">son</div>
  <div class="son">son</div>
  <div class="son">son</div>
</div>
```
#### 1. 定宽
##### 1. [float] + [width]
```css
.son{
  float：left;          // 浮动元素，inline-block 化
  width: 25%;           // 给子元素定宽
}
```



#### 2. 不定宽
##### 1. [[table] + [width]] + [table-cell]
```css
.father{
  display: table;
  width: 100%;            // 设置父元素的宽度撑满 100%
  table-layout: fixed;    // 设置布局优先，而不是内容优先
}
.son{
  display: table-cell;    // 把子元素设置为 table-cell，不设置 width 时,同行内的 table-cell 等宽
}
```


##### 2. [flex] + [flex: 1]
```css
.father{
  display: flex;
}
.son{
  // 自动成为 flex-item
  flex: 1;             // flex:1 平均分配剩余空间
}
```




---
### 4. 等高布局
##### 1. [table] + [table-cell] + [table-cell]
```css
.father{
  display: table;
}
.son{
  display: table-cell;
}
// table 布局自然的同高
```



##### 2. [flex]
```css
.father{
  display: flex;
}
.son{
  // 自动成为 flex-item
}
// flex 布局，内部的所有 flex-item 默认的 align-items：stretch
```







---
### 5. 多列布局
#### 1. 定宽 + 定宽
##### [清除浮动] + [[float] + [float]]


#### 2. 定宽 + 中间自适应 + 定宽
##### [float] + [margin] + [float]
##### [position] + [margin] + [position]




---
### 6. 总结
类型 | 定宽 + 自适应 | 不定宽 + 自适应 | 等宽 | 等高
---|---|---|---|---
absolute| [absolute ]+ [margin] | - | - | -
float | [float] + [margin] | - | [float] + [width] | -
overflow | [float] + [overflow] | [float] + [overflow] | - | -
table | [table + width:100% + table-layout] + [table-cell] + [table-cell] | [table + width:100%] + [table-cell + width: 0.1%] + [table-cell] | [table + width:100% + table-layout] + [table-cell] + [table-cell] | [table + width:100%] + [table-cell] + [table-cell]
flex | [flex] + [flex:1] | [flex] + [flex:1] | [flex] + [flex:1] | [flex]




http://blog.csdn.net/bazingaea/article/details/50880460
