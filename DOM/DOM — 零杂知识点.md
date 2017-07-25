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
