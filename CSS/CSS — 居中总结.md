# CSS 居中总结

```html
/* 居中结构 */
<div class="father">            // 居中参考对象
  <div class="son">DEMO</div>   // 居中的元素
</div>
```




### 1. 定宽元素水平居中
##### 1. [] + [block / table / flex + width + margin]
```css
.son {
  display: block / table / flex;
  width：50% / 50px;      // block / flex元素的 width 是默认 100%，如果要改变，必须指定值
  margin: 0 auto;
}
// 优点：只需要设置子元素
// 缺点：元素需要指明子元素的宽度
```

##### 2. [flex + justify-content] + [width]
```css
.father{
    display: flex;
    justify-content: fiex;  // 子 itme 默认居中
}
.son {
  width：50% / 50px;  // 定宽
}
// 优点：只需要设置子元素
// 缺点：元素需要指明子元素的宽度
```


##### 3. [flex] + [width + margin]
```css
.father{
    display: flex;
}
.son {
  width：50% / 50px;      // 定宽
  margin: 0 auto;
}
// 优点：只需要设置子元素
// 缺点：元素需要指明子元素的宽度
```




### 2. 不定宽（不设置 width）元素水平居中
##### 1. [text-align] + [inline / inline-block / 文字]
```css
/* 在父元素上添加 text-align 属性，该属性会被子元素继承 */
.father {
  text-align：center;
}
.son {
  display: inline / inline-block;
}
// 优点： 代码兼容性好，IE6/7 可以用 zoom:1;display:inline；来替代 inline-block
// 缺点： text-align 会被子元素继承
```




##### 2. [] + [table + margin]
```css
 /* table 元素非常类似于 block 元素独占一行，而且结合了 inline-block 可以自动计算宽度（auto）的特点 */
.son {
  display: table;
  margin: 0 auto;
}

/* 如果兼容 IE6/7 可以把 son 元素换成 table 结构来替换 display:table */
<div class="father">
  <table class="son" style="margin：0 auto">
    <tbody>
      <tr>
        <td>
          <div>DEMO</div>
        </td>
      </tr>
    <tbody>
  </table>
</div>

// 优点：与上一个例子实现思路相似，但不需要明确子元素宽度
// 缺点：元素只能独占一行
```




##### 3. [relative] + [absolute + left + transform]
```css
.father {
  display: relative;
}
.son {
  display: absolute;
  left：50%;
  transform: translateX(-50%);
}
// 优点：不会对别的元素造成影响
// 缺点：代码兼容性要求较高，transform


// 与上文中避免 dispaly: table 的方法类似，可以通过增加结构来模拟 transform
<div class="father">            // 居中参考对象
  <div class="son">
    <div class="grandSon">DEMO</div>             // 居中的元素
  </div>
</div>

.father {
  display: relative;
}
.son {
  display: absolute;
  left：50%;
}
.grandSon {
  display: relative;
  left：-50%;
}
```




##### 4. [] + [float + relative + left + transform]
```css
.son {
  float: left;                  // 脱离常规流
  display: relative;            // 用定位开启 left
  left：50%;
  transform: translateX(-50%);
}
// 优点：与上一个例子实现思路相似，但这个只需要设置子元素即可
// 缺点：float 可能对别的元素造成影响
```




##### 5. [flex + justify-content] + []
```css
.father {
  display: flex;
  justify-content: center;
}
// 优点：只需要设置父元素
// 缺点：代码兼容性要求较高，flex
```




##### 6. [flex] + [margin]
```css
.father {
  display: flex;
}
.son{
  margin: 0 auto;
}
// 优点：实现思路类似于例3，子元素的宽度 auto，然后通过 margin 居中
// 缺点：代码兼容性要求较高，flex
```






---
### 2. 垂直居中
```html
/* 居中结构 */
<div class="father">            // 居中参考对象
  <div class="son">DEMO</div>   // 居中的元素
</div>
```


##### 1. [table-cell + vertical-align] + []
```css
/* table-cell 元素继承了 table 元素的特性，它们非常类似于 block 元素，
它们还有两个特点：1.同行等高 2.是宽度（width）强制 auto */
.father {
  display: table-cell;
  vertical-align：middle;
}
// 优点： 代码兼容性好，IE6/7 可以用 table 结构来替代 table-cell
```




##### 2. [relative] + [absolute + top + transform]
```css
.father {
  position: relative;
}
.son {
  display: absolute;
  top：50%;
  transform: translateY(-50%);
}
// 优点：不会对别的元素造成影响
// 缺点：代码兼容性要求较高，transform
```



##### 3. [] + [float + relative + top + transform]
```css
.son {
  float: left;
  display: relative;
  top：50%;
  transform: translateY(-50%);
}
// 优点：与上一个例子实现思路相似，但这个只需要设置子元素即可
// 缺点：flat可能对别的元素造成影响
```





##### 4. [flex + align-items] + []
```css
.father {
  display: flex;
  align-items: center;
}
// 优点：只需要设置父元素
// 缺点：代码兼容性要求较高，flex
```







---
### 3.同时水平垂直居中
##### 1. [text-align + table-cell + vertical-align] + [inline / inline-block / 文字]
```css
.father {
  text-align: center;          // 水平方向
  display: table-cell;         // 垂直方向
  vertical-align: middle;      // 垂直方向
}
.son {
  display: inline / inline-block;       // 水平方向
}
// 优点：兼容性好
```




##### 2. [relative] + [absolute + left + top + transform]
```css
.father {
  position: relative;
}
.son {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
// 优点：不影响其他元素
// 缺点：代码兼容性要求较高，transform
```



##### 3. [float + relative + left + top + transform]
```css
.son {
  float: left;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
// 优点：只需要设置子元素
// 缺点：代码兼容性要求较高，transform
```




##### 4. [flex + justify-content + align-items]
```css
.father {
  position: flex;
  justify-content: center;
  align-items: center;
}
// 优点：只需要设置父元素
// 缺点：代码兼容性要求较高，flex
```







---
### 4.总结对比
序号 | 水平居中 | 垂直居中 | 水平垂直同时居中
---|---|---|---
定宽 | [] + [block / flex + width + margin] | - | -
1 | [text-align] + [inline / inline-block / 文字] | - | -
2 | [] + [table + margin] | [table-cell + vertical-align] + [] | 1 + 2
3 | [relative] + [absolute + left + transform] | [relative] + [absolute + top + transform] | 3 + 3 translate(x,y)
4 | [] + [float + relative + left + transform] | [] + [float + relative + top + transform] | 4 + 4 translate(x,y)
5 | [flex + justify-content] + [] | [flex + align-items] + [] | 5 + 5
6 | [flex] + [margin] | - | -
