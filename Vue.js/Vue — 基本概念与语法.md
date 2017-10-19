## Vue 基本概念与语法

- #### Vue 的基本概念
  ##### 1. 传统的页面生命周期是通过事件来驱动的，Vue 页面的生命周期在事件驱动外，主要是通过数据来驱动的。




---
- #### Vue 的数据流
  ##### 1. Vue 中数据流是单向的，所以通过 props 向组件传入数据，和组件通过 $emit 向外通知内部数据变化是一种最佳实践。
  ##### 2. 如果在组件内部改变 props 数据，即使不报错也会有 warning，因为这违反了 Vue 单向数据流的原则。需要注意的是，这里的所说的 props 数据，指的是基本类型的数据，比如 String、Number。但如果 props 数据是个引用类型，则对其属性进行增删改操作都不会违反单向数据流原则，因为引用类型的本质是内存地址，在对其属性进行操作时，都不会影响其内存地址。但不可以改变引用类型 props 数据的对象，因为这样会改变内存地址从而违法单向数据流原则。
  ##### 3. 由于 Vue 中数据流是单向的，所以 v-model 实际上是一个语法糖，它结合了 v-bind 和 v-on:change 这两个语法。




---
- #### Vue 与 RequireJs 的区别
  > 两者都有工程模块化管理的功能，但两者的模块化是有很大区别的。
  ##### RequireJs 的模块化是物理上的模块化，是针对各个文件进行的模块化管理。
  ##### Vue 的模块化是针对页面结构上的模块化，是针对页面组件进行的模块化管理。





---
- #### Vue 与 Angular 的区别

  | | Vue | Angular
  |-|-|-
  | 独立模板文件的引用 | 只能用字符串（template属性）或者 <template> 标签来定义模板，如果需要引入单独的模板文件，需要通过别的加载工具比如 RequireJs | 可以直接使用独立的模板文件
  | data 属性 | 组件中的 data 只能是函数，并返回一个对象 | 对象







---
- #### 通过 Vue 构造器来实例化一个 Vue 实例
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
- #### Vue.component
  ##### 1. Vue.component 方法用于注册组件。
  ##### 2. Vue.component(componentName, Obj) 方法接收的第一个参数用于命名组件，有了这个参数，才可以在模板中使用自定义的标签来实例化组件。第二个参数可以是一个构造函数，也可以是一个对象。如果是构造函数则通过该函数生成组件实例，如果是对象则会自动调用 Vue.extend(此对象) 来生成构造函数并实例化。





---
- #### Vue.extend
  ##### 1. Vue.extend 方法用于拓展定义(组件)，Vue.extend(obj) 会返回一个构造函数，类似于 Vue，可以直接使用 new 来生成一个拓展实例。
  ##### 2. 通过 new Vue() 方式创建的实例叫做根实例，而还有一种通过实例化 Vue.extend() 后的构造函数来实现的叫扩展实例，可以认为是一个从 Vue 根实例中拓展出来的组件。
  ##### 3. 所有的 Vue.js 组件都是被扩展的 Vue 实例（官方）。
  ##### 4. 扩展实例和根实例一样，需要先被实例化，然后挂载。
  ##### 5. 需要注意的是 Vue.extend() 中 data 必须是一个函数，而 new Vue() 中的 data 是一个对象。应为拓展实例可以有多个，这些实例需要有各自独立的 data 对象。而根实例只有一个，所以直接用对象即可。




---
- #### Vue.component 与 Vue.extend 的区别和联系
  ##### 1. Vue.component 与 Vue.data 和 Vue.props 类似，可以定义组件内的 data 数据
  ##### 2. Vue.component 与 Vue.watch 类似，根据所需数据的变化来触发回调函数的执行
  ```javascript
  /* foo 属性可以直接在模板中引用，得到的值是 foo() 的值 */
  computed: {
      foo: function () {
          return this.bar > 0;     // bar 发生改变，都会触发 foo 函数的执行
      }
  }
  ```



---
- #### Vue 的挂载
  ```javascript
     /* Vue 实例的挂载有两种方式：设置 el 属性和 $mount 手动挂载 */
     new Vue({
         el: '#hookElement'        // 在生成 Vue 实例的同时挂载元素
     });

    var foo = new Vue();           // 生成 Vue 实例
    foo.$mount('#target');         // 手动挂载挂载元素
  ```
