# HTML 的零杂知识点

- #### \<!DOCTYPE html>
  ##### \<!DOCTYPE> 声明位于文档中的最前面的位置，<html> 标签之前。用于告知浏览器文档使用的是哪种 HTML 或 XHTML 规范。
  ##### \<!DOCTYPE html> 是 html5 标准的网页声明，表明当前网页采用的是 html5 标准。





---
- #### ol/ul 与 dl 的区别

  ##### ol 是有序普通列表，每个 li 元素前都会有一个顺序的数字（decimal）

  ##### ul 是有序普通列表，每个 li 元素前都会有一个默认的小点（disc）

  ##### dl 是（title-description）关系对的列表，每一个 dt 对应一个 dd




---
- #### li 的 list-style-type 样式
  ```
    none : 取消样式
    disc : 实心圆（ul 下的 li 默认样式）
    circle : 空心圆
    square : 实心方块
    decimal : 阿拉伯数字（ol 下的 li 默认样式）
    lower-roman : 小写罗马数字
    upper-roman : 大写罗马数字
    lower-alpha : 小写英文字母
    upper-alpha : 大写英文字母
    none : 不使用项目符号
    armenian : 传统的亚美尼亚数字
    cjk-ideographic : 浅白的表意数字
    georgian : 传统的乔治数字
    lower-greek : 基本的希腊小写字母
    hebrew : 传统的希伯莱数字
    hiragana : 日文平假名字符
    hiragana-iroha :　日文平假名序号
    katakana : 日文片假名字符
    katakana-iroha : 日文片假名序号
    lower-latin : 小写拉丁字母
    upper-latin : 大写拉丁字母
  ```




---
- #### \<a> 标签
  ```
    * 单独的 <a> 标签是没有默认样式和事件的
    * 在添加了 href 属性之后，<a> 标签会有默认的样式 text-decoration（下划线）和 cursor（hover样式）
    * 可以通过设置 href 属性来进行本页跳转，例如 <a href="#test"> 点击后会跳转到本页面的 <div id="test"> 元素
  ```






---
- #### url 与 src 与 href 与 \@import 的区别

  ##### url（统一资源定位符），一般用于 CSS 属性。比如，background-image:url("/bg.png");

  ##### src 即资源（source），一般用于引入外部资源，并插入到当前元素中，所以在可替换元素中很常见，比如 <img> 标签，<script> 标签和 <iframe>标签。

  ##### href 即超文本引用（hypertext reference），一般表示元素与外部资源的关系。比如 <a> 标签，<link>标签。

  ##### <link> 标签 和 \@import url() 都是外部引用 CSS 的方式，但是存在一定的区别：

  ##### 1. link是XHTML标签，除了加载CSS外，还==可以定义RSS等其他事务==；@import属于CSS范畴，只能加载CSS。

  ##### 2. link引用CSS时，==在页面载入时同时加载==；@import需要页面网页完全载入以后加载。

  ##### 3. link支持==使用Javascript控制DOM去改变样式==；而@import不支持。





---
- #### HTML 标签大小写（必须小写）
  ##### 在 HTML4.0 以及之前的版本中，W3C标准是不区分标签大小写
  ##### 在 HTML5 中，W3C 明确规定，标签必须用小写格式



- #### HTML 属性大小写（使用小写）
  ##### HTML4 中的属性对大小写不敏感，但推荐小写。HTML5 自定义属性不能包含大写字母。所以HTML 中的属性统一使用小写。


---
- #### HTML 中的引号（使用双引号）
  ##### HTML中可以同时使用双引号和单引号。但是 JavaScript 中也可以同时使用双引号和单引号，为了区分，可以在 HTML 中优先使用双引号，在 JavaScript 中优先使用单引号。
