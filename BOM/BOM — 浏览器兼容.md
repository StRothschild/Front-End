# 浏览器兼容总结
##### 浏览器引擎有两种 —— JavaScript引擎和渲染引擎。浏览器的兼容主要是需要考虑渲染引擎存在的不同。

---
#### 1. DOCTYPE
##### 首先需要确保 HTML 页面开始部分要有 DOCTYPE 声明。DOCTYPE 告诉浏览器使用什么样的规范来解析 HTML 文档，或者可以用于开启'怪异模式'。DOCTYPE是非常关键的，目前的最佳实践就是在HTML文档的首行键入：
```javascript
<!DOCTYPE html>
```



---
#### 2. meta 标签
##### meta 标签用于提供有关页面的元信息。
##### 比如 IE8中有一个'兼容性视图'的概念，也就是怪异模式。IE8 相对于 IE6/7 已经做出了非常大的改进，但是很多老站点仅针对 IE6/7 进行了优化，使用IE8渲染反而会更加糟糕，所以 IE8 加入了'兼容性视图'功能，这样的话就可以在 IE8 中使用 IE6 或 IE7 的内核渲染页面。这种情况下可以使用 meta 标签来强制 IE8 使用最新的内核渲染页面，代码如下：

```javascript
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

##### IE=edge 表示强制使用 IE 最新内核，chrome=1 表示如果安装了针对 IE6/7/8 等版本的浏览器插件 Google Chrome Frame（可以让用户的浏览器外观依然是IE的菜单和界面，但用户在浏览网页时，实际上使用的是 Chrome 浏览器内核），那么就用Chrome内核来渲染。



---
#### 3. 识别 HTML5 元素
##### 如果你在前端代码中使用了HTML5的新标签（nav/footer等），那么在 IE 中这些标签可能无法正常显示。可以使用 html5shiv，具体使用方法见文档。




---
#### 4. 识别 CSS3 属性
##### IE8 不支持 CSS3 的很多新特性，不过现有一些比较成熟的 hack 方法，比如 CSS3 PIE，它支持的特性有这些：border-radius、box-shadow、border-image、multiple background images、linear-gradient等。





---
#### 5. 嵌套 inline-block 下 padding 重叠

```html
<ul>
    <li><a>1</a></li>
    <li><a>2</a></li>
    <li><a>3</a></li>
</ul>

<style>
  ul li{
      display: inline-block;
  }
  ul li a{
      display: inline-block;
      padding: 10px 15px;
  }
</style>
```
##### a 标签之间正常的距离应该是30px，但在IE8中出现了重叠，只有15px。解决方法是使用 float: left 替代 display: inline-block。




---
#### 6. placeholder
##### IE8 下不支持 html5 属性 placeholder，不过为解决此问题的 js 插件挺多的，比如：jquery-placeholder。



---
#### 7. last-child
##### first-child 是 CSS2 的内容，但是 last-child 就不是了，所以 IE8 不兼容。推荐的做法不是使用 last-child，而是给最后一个元素设置一个.last的class，然后对此进行样式设置，这样就全部兼容了。


---
#### 8. 透明度
##### 1. IE8 中不支持 color: transparent。如果使用了 transparent，则和 currentColor 效果一致。

##### 2. IE8 不支持使用 rgba 模式实现透明度，也就是不支持 Alpha，但是 RGB 还是支持的。

##### 3. IE8 中不支持 opacity。在 IE8 中可以使用 filter: Alpha(opacity=50) 来实现透明度。
