# HTML 标签的语义和表现
### 1. 块级元素 (block)

#### 水平方向上：
- #### 块级元素在 BFC 中独占一行（==默认 width = auto, padding = 0, margin = 0==）

- #### 如果对元素指定了 width / padding /border 造成==元素的整体（content + padding + border + margin）宽度无法填满父元素，则会通过自动调节 margin-right 来填满其父元素宽度。==

- #### 子元素==可以溢出父元素的 content 区域，但溢出盒模型部分是否显示，取决于父元素的 overflow 属性（默认 overflow: visible）。==

- #### 计算思路：
1. ##### ==撑满==：默认情况下子元素的 content 撑满父元素的 content; 
2. ##### ==计算==：如果子元素的整体宽度 content + padding + border + margin 小于父元素的 content 则通过 margin-right 的自动调节来==补足==；  如果子元素整体大于父元素的 content 宽度，则==溢出==父元素（因为默认 overflow: visible）。
3. ##### ==auto==：如果 width 或 margin 为 auto （padding 不能是 auto） 则==会尽力保证子元素的整体宽度等于父元素的 content 宽度。只能是尽力，比如 margin 可以为负值，而 width 不能是负值。==

4. ##### 结论：块元素一定会填满父元素的 content，甚至可以溢出（取决于父元素的 overflow）。

---
##### 1. div ：Division（分隔）
##### 2. p ：Paragraph（段落）
##### 3. ol ：Ordered List（排序列表）
##### 4. ul ：Unordered List（不排序列表）
##### 5. li ：List Item（列表项目）
##### 6. dl ：Definition List（定义列表）
##### 7. dt ：Definition Title（定义项标题）
##### 8. dd ：Definition Description（定义项标题内容）

##### ==ol/ul 与 dl 区别： 前者是普通列表，而后者是类似于名值对关系==的列表

##### 9. hr : Horizontal Rule (水平线) ==自封闭标签==
##### 10. h1~h6 ：Headword（标题）
##### 11. html
##### 12. body
##### 13. header/footer
##### 14. menu
##### 15. form
##### 16. table
##### 17. pre  保留了标签内的空行及空格，一般用于页面中的代码展示

##### 18. article（h5）
##### 19. nav（h5）
##### 20. aside（h5）
##### 21. hgroup（h5）
##### 22. main（h5）
##### 23. section（h5）







```
```

### 2. 行内非替换元素（inline）

#### 元素的 ==width 和 height 始终为 auto 且无法更改，== 即元素的宽和高完全由内容撑开，所以 inline 元素的内容不会超出盒模型（overflow 无效），但是可以超出行框模型。行内非替换元素（inline）在水平方向上的 margin、padding、border 都产生边距效果，==但在垂直方向上 margin 完全无效， padding 和 border 只对盒模型产生效果，对行框模型和别的元素无影响。==

#### 标签内的==纯文本也应该视为行内非替换元素==，但是这些文本只能从父标签中继承属性而没有自有属性，例如 font-size 、line-height 等。 


#### 水平方向上：
1. ##### ==width 和 height 始终为 auto 且无法更改。== 即元素的宽和高完全由内容撑开。
2. ##### 元素宽度由 width + padding + border + margin 组成。
3. ##### 水平方向上的排列遵守


---
##### 1. a ：Anchor (锚) ==本身是没有伪类的，添加了 herf 属性后就有 :link 伪类了。另外还有 :visited、:hover、:active （love and hate）等伪类。==
##### 2. span ： Span (范围,作为普通的文本的容器)
##### 3. label : Label (标签, label 标签主要==通过将自身的 for 属性值设置成某一表单元素的 id 属性值来形成绑定关系,== 当点击 label 元素的时候，则被绑定的表单元素就会获得输入焦点)

##### 4. i ： Italic (斜体)
##### 5. br ： Break (换行)  ==自封闭标签==
##### 6. strong ： Strong (加粗)




```
```
### 3. 行内替换元素 (inline-block)
- #### 可以将行内替换元素==粗略的理解为 inline-block 元素，== 但由于元素是可替换的，所以实际的结果是可能改变的，比如 img 元素。

- #### ==（IE8 开始支持 inline-block）== 替换元素是浏览器  根据其标签的元素与属性来判断显示具体的内容。元素的 width ==默认为 auto，即元素宽度由内容撑开，但可以手动设置。==

---
##### 1. input 自封闭标签
##### ==2. img 自封闭标签 在 Chrome 和 FireFox 中都默认显示为 inline 元素，但实际上其特性和效果都是 inline-block 元素==
##### 3. textarea   通过属性 resize: none; 可以禁止改变大小
##### 4. select
##### 5. object
##### 6. iframe : Inline Frame
##### 7. ==<button> 和<input type="button/submit/reset"> 的区别：==

#####  ==两者都可以设置三种 type 类型：button, submit, reset。== <button> 标签在 IE 中的默认类型是 "button"，而其他浏览器中（包括 W3C 规范）的默认值是 "submit", ==所以，请务必设置清楚 button 的 type 类型。==

#####  ==如果在表单（form）中使用 <button> 标签并触发 submit 操作，则不同的浏览器会提交不同的值。== IE 将提交 <button> 与 <button/> 之间的文本，而其他浏览器将提交 value 属性的内容（需要设置 name 属性）。而 input 标签只可能提交 value 值（需要设置 name 属性）。==所以，请在 HTML 表单中使用 input 元素来创建按钮。==

##### ==<button>提供了更为强大的功能和更丰富的内容。==<button> 与 </button> 标签之间的所有内容都是按钮的内容，其中包括任何可接受的正文内容，比如文本或多媒体内容。



### 表单中的回车提交情况：
###### 1. 存在 form 表单
###### 2. 存在 type="submit" 的元素。比如， <button>submit</button> 或 <input type="submit">
###### 3. 至少存在一个输入框（type="text"）
###### 4. 任意一个输入框处于 focus 状态
###### 5. 回车会触发 form 表单提交

##### 在 IE8 中存在一个 bug
###### 1. 存在 form 表单
###### 2. 存在 type="buttom" 的元素。比如， <button type="buttom">submit</button> 或 <input type="buttom">
###### 3. 有且仅有一个输入框（type="text"）
###### 4. 该输入框是 focus 状态。
###### 5. 回车会触发 form 表单提交
 



```
```
### 4. 自封闭标签

#### 在 HTML 中，自封闭标签==没有结束标签==（例如：<br>）
#### 在 XHTML 中，自封闭标签必须被==正确地关闭==（例如：<br />）
#### ==在html5 中不要加斜杠，那是不规范的写法。==

##### 1. meta: Meta-Information  元素可提供有关页面的元信息，比如针对搜索引擎和更新频度的描述和关键词。
##### 2. link
##### 3. input
##### 4. img
##### 5. br
##### 6. hr




```
```
### 5. Tips:
#### 严格嵌套约束（严格禁止）：
- ##### 1. a元素里不可以嵌套交互式元素 <a>、<button>、<select> 等。
- ##### 2. <p>里面不可以嵌套<div>、<h1>~<h6>、<p>、<ul>/<ol>/<li>、<dl>/<dt>/<dd>、<form>等

#### 语义嵌套约束（语义上不允许，但浏览器有容错机制）：
##### 每个元素基本都有自己的嵌套规则，除了严格嵌套约束之外的一些规则就是语义嵌套约束，对于语义嵌套约束，如果不遵守，页面==可能正常，但也可能解析错误==，这和浏览器的容错机制有关。