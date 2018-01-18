## 浏览器引擎基本概念
####  浏览器引擎一般有两种，分别是 ==“渲染引擎”（Rendering Engine）和"JavaScript引擎"。==

- #### 我们常说的 ==“浏览器内核”一般指的是浏览器的“渲染引擎”，== 它的作用是通过引擎定义的渲染规则，将 HTML 排版和 CSS 样式渲染成用户可见的视图。==各个浏览器的显示结果不同，就是因为使用了不同的“渲染引擎”，所造成的差异。==

- #### =="JavaScript引擎"用于解释执行 JavaScript 脚本，相当于的 JavaScript 的解释器（脚本语言边解释边执行，无需编译，但运行时依赖解释器）。== 比较著名的有 chrome V8 引擎，NodeJs 也是基于 Chrome V8 引擎。


---
##### [浏览器的 HTML 和 CSS 特性支持可以在此查看： http://caniuse.com/](http://caniuse.com/)
##### [浏览器的 JavaScript 特性支持可以在此查看：http://kangax.github.io/compat-table/es5/#experimental-flag-note](http://kangax.github.io/compat-table/es5/#experimental-flag-note)
##### [全球浏览器份额可以在此查看： http://gs.statcounter.com/](http://gs.statcounter.com/)
---


## 1. IE

- #### 浏览器内核：
    ##### ==Trident==，具体版本如下表格所示。在 win10 中搭载的 Edge 浏览器中，使用了全新的渲染引擎 ==Edge HTML。==
- #### JavaScript引擎：
    ##### 在 IE8 （最高适配 win7）及之前的版本中用的是 JScript，从 IE9 （从 win7 开始适配）开始变成 ==Chakra==，中文译名为查克拉，==开始完全的支持ES5特性。==

- #### IE 浏览器各版本特点：
    ##### IE6/7 和 IE8 有较大区别，IE8 和 IE9 有较大区别，edg 和 IE 有较大区别。
    ##### IE8: 完全支持CSS2.1、W3C 盒子模型、支持伪类和伪元素、
    ##### IE9: 完全支持ES5（比如：forEach、trim）、支持HTML5、支持CSS3（比如：border-radius、 box-shadow）、支持事件捕获和DOM2/DOM3级事件接口、
    ##### Edge：支持ES6

    ![IE浏览器版本特性表](http://images.cnitblog.com/i/561179/201407/281921581803533.jpg)

- #### IE8 没有的特性总结：
    ###### 没有数组遍历方法： forEeach、map、filter、every、some
    ###### 没有对象属性获取方法： Object.keys、Object.getOwnPropertyNames
    ###### 没有 event 对象，需要用 window.event
    ###### window.event 对象中没有 target，只有 srcElement
    ###### 没有事件捕获的方法，只有 attachEvent 方法来监听冒泡事件
    ###### 没有 bind 方法
    ###### 没有 trim 方法
    ###### 没有 border-radius、box-shadow 
    ###### 没有 HTMLElement 对象
    ###### 没有 XMLHttpRequest 对象
    ###### 没有 @media 查询


## 2. Chrome
- #### 浏览器内核：
    ##### 用的是和 Opera 共同开发的 ==Blink，== 从 Chrome 28 版本开始应用。Blink 实际上是从 WebKit 的渲染引擎 WebCore 中继承而来的，所以目前为止 Chrome 和 Safari 的渲染结果差不多。

- #### JavaScript引擎：
    ##### 由 Google 丹麦开发的 ==V8== 引擎。


## 3. FireFox
- #### 浏览器内核：
    ##### ==Gecko==

- #### JavaScript引擎：
    ##### SpiderMonkey，用于Mozilla Firefox 1.0～3.0 版本。
    ##### TraceMonkey，用于 Mozilla Firefox 3.5～3.6 版本。
    ##### JägerMonkey，用于Mozilla Firefox 4.0 以上版本。
    ##### IonMonkey，用于Mozilla Firefox 18.0 以上版本。
    ##### ==OdinMonkey，== 用于Mozilla Firefox 22.0以上版本。


## 4. Safari
- #### 浏览器内核：
    ##### ==WebKit 中的 WebCore==

- #### JavaScript引擎：
    ##### ==Nitro，就是 WebKit 中的 JSCore==


## 5. Opera
- #### 浏览器内核：
    ##### Elektra 是 Opera 3.5-6.1 版本使用的内核。
    ##### Presto 是 Opera 7.0 及以后版本的内核。
    ##### ==Blink== 是 Opera 15.0 及以后版本的内核。

- #### JavaScript引擎：
    ##### LinearA，用于 Opera 4.0～6.1 版本。
    ##### LinearB，用于 Opera 7.0～9.2 版本。
    ##### Futhark，用于 Opera 9.5～10.2 版本。
    ##### ==Carakan==，用于 Opera 10.50 及以上版本。

