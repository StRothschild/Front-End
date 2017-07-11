# border-radius 实现原理
#### ==1. IE9 才开始支持 border-radius 属性==
```
/* 语法 */
border-radius: 左上 右上 右下 左下;

/* 用正方形构造圆形 */
border-radius: 50%; 或者 border-radius: 100%; 

/* border-radius：保留部分的宽度半径 / 保留部分的高度半径 */
border-radius: 100px/50px;
```

#### 实现原理示意图
##### 下图中的椭圆就是通过 border-radius 来定义的。椭圆外的蓝色部分就是被切除的边角。

![border-radius原理图1](http://img.blog.csdn.net/20161207005704619?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveGlhb2VybWluZ24=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

##### 切除后的效果如下：
![border-radius原理图2](http://img.blog.csdn.net/20161207005737525?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveGlhb2VybWluZ24=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


#### 2. 如何让老版本 IE 支持 CSS3 样式
- ##### 引入 ie-css3.htc，这是 IE 专属的脚本文件（类似js），可以让老版本 IE 支持 CSS3 样式。类似的方式还有 CSS3.js 和 CSS3PIE 等等。

- ##### 做一张 png ，中间留出透明的圆圈，四个角用目标元素所处位置的背景色，覆盖在目标元素上。