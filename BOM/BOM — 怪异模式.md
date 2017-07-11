# 标准模式和怪异模式
### 1. 浏览器的渲染模式
- #### 浏览器的页面渲染模式分为标准模式和 怪异模式（quirks mode）。由于老版本的浏览器（主要是IE）有一套自己的页面渲染规则，并不遵循 W3C 的规范（比如 IE6/7 浏览器的盒子模型）。所以==为了在新版浏览器中使用老的渲染规则来解析页面，就出现了怪异模式。==

    ##### 标准模式：以当前浏览器的内核解析方式渲染页面。
    ##### 怪异模式：以其他的解析规范渲染页面，具体是什么规范可以参考下文：
    - ###### IE6、7、8、9 的怪异模式是基于 IE5.5 版本的渲染模式。
    - ###### Chrome、Sofari、FireFox 和 IE10、11 的怪异模式是 interoperable Quirks mode（接近于 Almost Standards Mode）。



---
- #### 如何触发不同的解析模式
##### 要触发浏览器的怪异模式来解析网页，有两种方法。第一种就是手动开启浏览器的怪异模式，比如 IE 浏览器中就可以手动选择老版本的渲染方式。还有一种方法就是设置 DOCTYPE，==通过 DOCTYPE 中的 DTD 信息来告诉浏览器用何种模式来渲染页面。==

> 注意：==如果页面没有 DOCTYPE 声明则会自动触发浏览器的怪异模式==，带来一些诡异的影响，所以要避免。

```
/* DOCTYPE 不同的声明会触发不同的渲染模式 */
<!DOCTYPE HTML>    // 标准的 Html5 声明，不需要 DTD 信息，触发执行标准模式

/* 包含 DTD 信息的 DOCTYPE 声明，适用于 HTML5 以下的文档 */
// 标准的 DTD 声明格式
<!DOCTYPE html + DTD + URI>

// 有 DTD，有 URI，触发标准模式
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

// 有 DTD，没有 URI，触发标准模式
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">

// 有过渡 DTD，没有 URI，触发怪异模式
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

// 没有 DTD，一律触发怪异模式
<!DOCTYPE html>
```



---
- #### 检查当前页面的解析模式
```
/* 检查当前页面的解析模式 */
document.compatMode==='CSS1Compat'?'Standards':'Quirks';
```



---
#### 参考资料：
##### https://hsivonen.fi/doctype/
##### http://www.tuicool.com/articles/2IN3aiv
