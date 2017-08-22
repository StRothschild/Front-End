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




---
#### Vue 与 Angular 的区别

- | 独立模板文件的引用 | data
-|-|-
Vue | 只能在组件中用字符串定义 | 组件中的 data 只能是函数，并返回一个对象
Angular | 可以 | 对象
