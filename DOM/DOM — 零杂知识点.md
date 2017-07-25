## DOM 的零杂知识点

- #### ducment 获取元素
  ##### 非 W3C 标准的 document.elementId 和 document.elementName 可以获取 img / form / ifram / embed 等元素
  ```javascript
  <img id="img_id" name="img_name"></img>
  <div id="div_id" name="div_name"></div>

  <script>
      window.onload = function(){
          console.log(document.img_id);       // 获取到元素
          console.log(document.img_name);     // 获取到元素

          console.log(document.div_id);       // undefined
          console.log(document.div_name);     // undefined
      }
  </script>
  ```
  ##### 由于上述两个属性并不是标准的，所以各个浏览器的支持也不一致，具体如下：

  ![docment获取元素的浏览器支持](https://github.com/StRothschild/Front-End/blob/master/DOM/resource/DOM%20%E2%80%94%20document%20%E8%8E%B7%E5%8F%96%E5%85%83%E7%B4%A0.jpg?raw=true)
