# 伪类和伪元素

#### 语法：CSS3 中明确规定了伪类用一个冒号来表示（:link），而伪元素则用两个冒号来表示（::before）。但为了兼容老版本的浏览器（比如 IE8，前提是需要声明 DOCTYPE），建议==统一使用单引号。== 因为==对于大部分浏览器来说，单冒号和双冒号的写法作用是一样的。==


---
## 1. 伪类（Pseudo-classes）

#### CSS 伪类可以==配合 CSS 选择器给元素添加一些的特殊效果。==

#### 和普通 CSS 类不同的是，==伪类主要是为了体现元素的在不同状态下的表现。== 因为元素在页面中随着用户的操作，会出现不同的状态，而普通的CSS 在页面加载之后就已经渲染完毕，这时候可以通过伪类来监听元素的不同状态，来动态渲染出预设样式。


```
/* 作用于普通元素的伪类语法 */
selector:pseudo-class {
    property:value;
}
a:link {color:#ccc;}

/* 作用于普通 CSS 类的伪类语法 */
selector.class:pseudo-class {
    property:value;
}
a.red:link {color:#ccc;}
```


- ### anchor 伪类
    #### 1. ：link       （未被访问的链接状态）
    #### 2. ：visited    （已访问的链接状态）
    #### 3. ：hover      （鼠标覆盖元素时的状态）
    #### 4. ：focus      （元素获得输入焦点时的状态，可以同tab实现）
    #### 5. ：active     （鼠标点击元素时的状态）

    #### ==使用顺序：lvhfa（吕护发）后者的样式会覆盖前者==

    #### ==<a> 标签本身是没有伪类的，添加了 herf 属性后就有 :link 伪类了。== 另外，由于 :hover 和 :active 不会同时存在，所以这两个的覆盖顺序可以改变。


- ### 其他伪类
    #### :checked     选中状态的元素
    #### :disabled    被禁用状态的元素
    #### :empty       空的元素 
    #### :invalid 	  无效状态的元素
    #### :last-child  最后一个子元素





```
```
## 2. 伪元素（Pseudo-elements）

#### CSS 伪元素允许我们给页面添加额外元素而不扰乱文档本身。

```
/* 在选择器上插入伪元素的语法 */
selector:pseudo-element {
    property: value;
}
selector:after {
    content: "";
}

/* 在CSS类上插入伪元素的语法*/
selector.class:pseudo-element {
    property: value;
}
selector.red:before	{
    color: #ccc;
}
```




### ::before（IE8 开始支持，需要声明 DOCTYPE）
- #### 在元素内容的==开始处插入伪元素，插入的伪元素处于目标父元素的流中，相当于目标父元素的子元素。== 

- #### ==默认伪元素是行内（inline）元素，== 且继承元素可继承的属性。不过该内容的框类型可以用属性 display 控制。





### ::after（IE8 开始支持，需要声明 DOCTYPE）
- #### 在目标父元素的==内容结束处插入伪元素，插入的伪元素处于目标父元素的流中，相当于目标父元素的子元素。== 

- #### ==默认伪元素是行内（inline）元素，== 且继承元素可继承的属性。不过该内容的框类型可以用属性 display 控制。





### 常见的伪元素
![image](http://images.cnitblog.com/i/613712/201406/042055205362355.png)
---
### 滚动条
- ### webkit 浏览器的伪元素

#### 1. ::-webkit-scrollbar         
#### 滚动条整体部分

#### 2. ::-webkit-scrollbar-thumb             
#### 滚动条里面的==滑块==，能上下/左右移动

#### 3. ::-webkit-scrollbar-track      
#### 滚动条的==轨道==，里面装有 thumb 滑块

#### 4. ::-webkit-scrollbar-track-piece   
#### 内层轨道，==滚动条除去滑块的部分==

#### 5. ::-webkit-scrollbar-button      
#### 滚动条==轨道两端的按钮==，点击可以调整滑块

#### 6. ::-webkit-scrollbar-corner     
#### 边角，及两个==滚动条的交汇处==

#### 7. ::-webkit-resizer       
#### 两个滚动条的交汇处（覆盖 corner ），可以通过拖动==调整元素大小==的小控件


- ### webkit 浏览器的伪类

#### 1. :vertical    
#### 选择竖直方向滚动条

#### 2. :horizontal
#### 选择水平方向滚动条

#### 3. :decrement    
#### 应用于按钮和内层轨道(track piece)。它用来指示按钮或者内层轨道是否会减小视窗的位置(比如，垂直滚动条的上面，水平滚动条的左边。)

#### 4. :increment    
#### increment伪类与和decrement类似，用来指示按钮或内层轨道是否会增大视窗的位置(比如，垂直滚动条的下面和水平滚动条的右边。)

#### 5. :start    
#### 应用于按钮和滑块。它用来定义对象是否放到滑块的前面

#### 6. :end     
#### 类似于start伪类，标识对象是否放到滑块的后面

#### 7. :double-button   
#### 该伪类可以用于按钮和内层轨道。用于判断一个按钮是不是放在滚动条同一端的一对按钮中的一个。对于内层轨道来说，它表示内层轨道是否紧靠一对按钮

#### 8. :single-button   
#### 类似于double-button伪类。对按钮来说，它用于判断一个按钮是否自己独立的在滚动条的一段。对内层轨道来说，它表示内层轨道是否紧靠一个single-button

#### 9. :no-button    
#### 用于内层轨道，表示内层轨道是否要滚动到滚动条的终端，比如，滚动条两端没有按钮的时候

#### 10. :corner-present    
#### 用于所有滚动条轨道，指示滚动条圆角是否显示

#### 11. :window-inactive    
#### 用于所有的滚动条轨道，指示应用滚动条的某个页面容器(元素)是否当前被激活。(在webkit最近的版本中，该伪类也可以用于::selection伪元素webkit团队有计划扩展它并推动成为一个标准的伪类)

#### 12. :enabled、:disabled、:hover、和 :active等伪类同样在滚动条中适用


### webkit 浏览器的滚动条 DEMO 地址: 
#### http://trac.webkit.org/export/41842/trunk/LayoutTests/scrollbars/overflow-scrollbar-combinations.html


```

```

- ### IE 浏览器

## IE 浏览器只能调整部分滚动条的颜色
### scrollbar-track-color
### scrollbar-arrow-color
### scrollbar-shadow-color
### scrollbar-face-color

![image](http://www.lyblog.net/usr/uploads/2013/07/win-8-ie-scrollbar_thumb.jpg)
