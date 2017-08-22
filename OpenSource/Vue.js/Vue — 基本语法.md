## Vue 基本语法
#### 通过 Vue 构造器来实例化一个 Vue 实例
```javascript
  /* 实例化一个 Vue 对象 */
  var instance = new Vue();

  /* 实例化一个 Vue 对象的同时传入参数对象 */
  var instance = new Vue({
    el: '#hookElement',         // 挂载元素
    data: {                     // data 数据
      name: "name"
    }，
    methods: {                  // 事件处理函数
      handleFunction: function (event) {
        console.log(event.target);
      }
    }
  });
````
