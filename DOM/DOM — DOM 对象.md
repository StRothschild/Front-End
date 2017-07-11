# 文档对象模型（Document Object Model）
##### DOM 是针对 HTML 和 XML 文档的 API（应用程序编程接口）。

---
### DOM 树结构
##### 在浏览器环境的全局对象中，document 属性用来指代当前文档的 DOM 对象。还可以使用 document.documentElement 访问根对象（包含了所有子元素），如下图所示。

![DOM树](https://github.com/StRothschild/DOM/blob/master/resource/DOM%20%E2%80%94%20DOM%20%E6%A0%91.gif?raw=true)




---
### DOM 模型中各个对象的继承关系
![DOM对象继承关系](https://github.com/StRothschild/DOM/blob/master/resource/DOM%20%E2%80%94%20DOM%E5%AF%B9%E8%B1%A1%E7%BB%A7%E6%89%BF%E5%85%B3%E7%B3%BB.png?raw=true)






---
- ### EventTarget（事件绑定）
  ##### 1. addEventListener()
  ##### 2. removeEventListener()
  ##### 3. dispatchEvent(event)  // 用于手动触发事件



---
- ### Node（nodeType；插入/操作节点；获取父节点、子节点、兄弟节点）
  #### 1. appendChild(newNode)
  #### 2. insertBefore(newNode, existingNode)     // 如果 exitingNode 为 null, 则在父元素的末尾插入，效果和 appendChild 方法一致
  #### 3. removeChild()
  #### 4. replaceChild()
  #### 5. getRootNode()
  #### 6. cloneNode()
  #### 7. contains(otherNode)     // otherNode 是否是其子节点
  #### 8. hasChildNodes()         // 是否拥有子节点

  #### 9. nodeName（元素节点的 nodeName 就是 tagName）
  #### 10. nodeValue（元素节点的 nodeValue 就是 null）
  #### 11. nodeType

  #### 12. parentNode
  #### 13. parentElement
  #### 14. childNodes（会获取文本节点）
  #### 15. previousSibling
  #### 16. nextSibling


  ![nodeType](https://github.com/StRothschild/DOM/blob/master/resource/DOM%20%E2%80%94%20NodeType.jpg?raw=true)

  ```JavaScript
  <html>.nodeType       // 1

  document.nodeType     // 9
  ```


---
- ### Element（获取 element 节点、innerHTML）
  ##### Element 类继承于 Node 类，是 Node 类型中的一种（nodeType 为 1）。Element 还对 Node 做了拓展, 拥有 children、id、innerHTML 等属性。

  #### 1. getElementsByClassName()
  #### 2. getElementsByTagName()
  #### 3. querySelector()
  #### 4. querySelectorAll()
  #### 5. getAttribute()
  #### 6. setAttribute()
  #### 7. append()
  #### 8. prepend()

  #### 9. id
  #### 10. innerHTML

  #### 11. children
  #### 12. childElementCount
  #### 13. previousElementSibling
  #### 14. nextElementSibling


- #### 下表是 Node 和 Elment 对象获取其他元素的方法总结，在页面中最好用 Element 方法，因为页面中容易出现空格，空格会被 Node 方法获取，而 Element 方法不会。

  - | 父 | 子 | 子 | 兄
  ---|---|---|---|---
  Node | parentNode | childNodes | firstChild / lastChild | previousSibling / nextSibling
  Element | parentElement | children | firstElementChild / lastElementChild | previousElementSibling / nextElementSibling





---
- ### HTMLElement（事件接口）
  ##### HTMLElement 类继承于 Element 类，主要添加了 on-* 事件的绑定接口。

   #### 1. focus()
   #### 2. click()
   #### 3. blur()

   #### 4. tagName

   #### 5. onclick
   #### 6. onblur
   #### 7. onkeydown
   #### 8. onmouseenter
   #### 9. onscroll
   #### 10. onload







---
- ### Document（查询 Element, 创建 Element / Node / Attribute）
  ##### Document 类继承于 Node 类。

  #### 1. getElementById()           // 通过节点的 id 属性，查找对应节点
  #### 2. getElementsByName()        // 通过节点的 name 属性，查找对应节点
  #### 3. getElementsByTagName()     // 通过节点标签名称，查找对应节点
  #### 4. getElementsByClassName()   // 通过节点的类，查找对应节点

  #### 5. createElement()
  #### 6. createTextNode()
  #### 7. open()
  #### 8. close()
  #### 9. append()
  #### 10. prepend()

  #### 11. URL
  #### 12. domain
  #### 13. doctype
  #### 14. head
  #### 15. body
  #### 16. forms



---
- ### HTMLDocument
  ##### HTMLDocument 类继承于 Document 类。

  #### 1. captureEvents()



---
- ### innerHTML、innerText、outerHTML

  #### 1. innerHTML 返回元素内容，innerText 返回元素内 trim 之后的文本。
  #### 2. 在设置 innerHTML 属性时，赋值字符串里的"<span>"会被解释成 HTML 标签， 而 innerText 只会解释成文本。
  #### 2. innerText 不包含当前元素的标签，outerHTML 包含。
