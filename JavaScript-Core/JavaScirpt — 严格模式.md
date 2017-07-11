# JavaScript 的严格模式（IE10 开始支持）
##### ==JavaScript 的严格模式和浏览器的严格模式是不同的概念。== 在 JavaScript 中使用严格模式会有更加严谨的语法，==消除代码运行时存在的一些安全隐患，并且提高运行效率。==


##### 要开启 JavaScript 的严格模式，==必须在作用域内的开头部分声明==，否则会默认使用正常模式：

```javascript
/* 严格模式 */
function strict(){
    "use strict";
　　return this === undefined ? "严格模式" : "正常模式";
}

/* 正常模式 */
function notStrict() {
    var a = "a";
    "use strict";
    return this === undefined ? "严格模式" : "正常模式";
}
```


![JS 严格模式对比图](https://github.com/StRothschild/JavaScript-Core/blob/master/resource/JavaScript%20%E2%80%94%20%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E5%AF%B9%E6%AF%94%E5%9B%BE.png?raw=true)
