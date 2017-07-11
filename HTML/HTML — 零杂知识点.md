# HTML 的零杂知识点
- #### ol/ul 与 dl 区别 

##### ol 是有序普通列表，每个 li 元素前都会有一个顺序的数字

##### ul 是有序普通列表，每个 li 元素前都会有一个默认的小点

##### dl 是（title-description）关系对的列表，每一个 dt 对应一个 dd 




---
- #### url 与 src 与 href 与 @import 的区别

##### url（统一资源定位符），一般用于 CSS 属性。比如，background-image:url("/bg.png");


##### src 即资源（source），一般用于引入外部资源，并插入到当前元素中，所以在可替换元素中很常见，比如 <img> 标签，<script> 标签和 <iframe>标签。

##### href 即超文本引用（hypertext reference），一般表示元素与外部资源的关系。比如 <a> 标签，<link>标签。

##### <link>标签 和 @import url() 都是外部引用 CSS 的方式，但是存在一定的区别：

##### 1. link是XHTML标签，除了加载CSS外，还==可以定义RSS等其他事务==；@import属于CSS范畴，只能加载CSS。

##### 2. link引用CSS时，==在页面载入时同时加载==；@import需要页面网页完全载入以后加载。

##### 3. link支持==使用Javascript控制DOM去改变样式==；而@import不支持。