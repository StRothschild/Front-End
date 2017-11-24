## Vue 基本概念与语法

- #### Vue 的基本概念
  ##### 1. 传统的页面生命周期是通过事件来驱动的，Vue 页面的生命周期在事件驱动外，主要是通过数据来驱动的。



---
- #### Vue 与 RequireJs 的区别
  > 两者都有工程模块化管理的功能，但两者的模块化是有很大区别的。

  ##### RequireJs 的模块化是物理上的模块化，是针对各个文件进行的模块化管理。
  ##### Vue 的模块化是针对页面结构上的模块化，是针对页面组件进行的模块化管理。




---
- #### Vue 与 Angular 的区别

  |-| Vue | Angular
  |-|-|-
  | 独立模板文件的引用 | 只能用字符串（template属性）或者 \<template\> 标签来定义模板，如果需要引入单独的模板文件，需要通过别的加载工具比如 RequireJs | 可以直接使用独立的模板文件
  | data 属性 | 组件中的 data 只能是函数，并返回一个对象 | 对象








---
- #### Vue 的数据流
  ##### 1. Vue 中数据流是单向的，所以通过 props 向组件传入数据，和组件通过 $emit 向外通知内部数据变化是一种最佳实践。
  ##### 2. 如果在组件内部改变 props 数据，即使不报错也会有 warning，因为这违反了 Vue 单向数据流的原则。需要注意的是，这里的所说的 props 数据，指的是基本类型的数据，比如 String、Number。但如果 props 数据是个引用类型，则对其属性进行增删改操作都不会违反单向数据流原则，因为引用类型的本质是内存地址，在对其属性进行操作时，都不会影响其内存地址。但不可以改变引用类型 props 数据的对象，因为这样会改变内存地址从而违法单向数据流原则。
  ##### 3. 由于 Vue 中数据流是单向的，所以 v-model 实际上是一个语法糖，它结合了 v-bind 和 v-on:change 这两个语法。







---
- #### Vue 的 class 和 style
  ##### Vue 可以绑定 class 和 style 就像绑定普通的变量。
  ```javascript
   /* 绑定class */
   v-bind:class="{fooClass:isActive}"                   // 对象中可以有变量名，变量值是Boolean
   v-bind:class="{fooClass:true, barClass:false}"       // 也可以直接用对象表示
   v-bind:class="[fooClass, barClass]"                  // 数组中存的是对象名
   v-bind:class="fooClass"                              // 也可以用单个对象名



   /* 绑定style */
   v-bind:style="{color:activeColor, fontSize:fontSize + 'px'}"      // 直接用变量名表示，变量值是style的值，而不是Boolen
   v-bind:style="[fooStyle, barStyle]"                               // 数组中存的是对象名
   v-bind:style="objectData"                                         // 也可以用单个对象名
  ```




---
- #### Vue.computed
  ##### Vue.computed 和 data 以及 props 类似，可以设置为组件作用域内的变量，但 computed 变量不能作为参数传入组件。
  ##### Vue.computed 与 Vue.watch 类似，根据所需数据的变化来触发回调函数的执行
  ##### Vue.computed 提供的变量可以通过函数计算得出。
  ```javascript
    /* foo 属性可以直接在模板中引用，得到的值是 foo() 的值 */
    computed: {
        // 回调函数默认为 getter 方法
        foo: function () {
            return this.bar > 0;     // bar 发生改变，都会触发 foo 函数的执行
        }
    }

    /* computed 也可以设置 setter 方法 */
    computed: {
        // 不设置回调函数，而是设置为一个对象，内置 get 和 set 两个属性
        foo: {
            get: function () {
                return 'get function called'
            },
            set: function (v) {
                v += 'calling the set function'
            }
        }

        Vue.foo          // 执行 get 方法
        Vue.foo = 'bar'  // 执行 set 方法, v 的值为 "bar calling the set function"
    }
  ```





---
- #### Vue.filter
  ##### Vue2 已经移除了 Vue1 中的内置过滤器，例如 "uppercase"。
  ```javascript
    /* 调用 my-filter 的回调函数 */
    {{value | my-filter}}

    /* 注册 my-filter */
    Vue.filter('my-filter', function (value) {
        // do something and return
    })
  ```





---
- #### Vue.set(targetObject, key, value)
  ##### 这个方法主要用于避开 Vue 不能检测对象属性被添加/修改的限制。
  ##### Vue.set 方法可以设置对象的属性。如果对象是响应式的，确保属性被创建后也是响应式的，同时触发视图更新。
  ##### 注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。
  ```javascript
    Vue.set(obj, key, value);   // 改变 obj 的 key 属性后，然后触发图更新
  ```







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
  ##### 2. Vue.component(componentName, Obj) 方法接收的第一个参数用于命名组件，有了这个参数，就可以在模板中使用自定义的标签来实例化组件。第二个参数可以是一个构造函数，也可以是一个对象。如果是构造函数则通过该函数生成组件实例，如果是对象则会自动调用 Vue.extend(此对象) 来生成构造函数并实例化。
  ##### 3. 通过 Vue.component 方法注册的组件，并在模板中实例化多次是可以产生多个组件的，但这些组件实际上是共享同一个实例。如果要生成多个不同的实例，需要通过  Vue.component 方法注册多个不同名的组件。





---
- #### Vue.extend
  ##### 1. Vue.extend 方法用于拓展定义(组件)，Vue.extend(obj) 会返回一个构造函数，类似于 Vue，可以直接使用 new 来生成一个拓展实例。
  ##### 2. 通过 new Vue() 方式创建的实例叫做根实例，而还有一种通过实例化 Vue.extend() 后的构造函数来实现的叫扩展实例，可以认为是一个从 Vue 根实例中拓展出来的组件。
  ##### 3. 所有的 Vue.js 组件都是被扩展的 Vue 实例（官方）。
  ##### 4. 扩展实例和根实例一样，需要先被实例化，然后挂载。
  ##### 5. 需要注意的是 Vue.extend() 中 data 必须是一个函数，而 new Vue() 中的 data 是一个对象。应为拓展实例可以有多个，这些实例需要有各自独立的 data 对象。而根实例只有一个，所以直接用对象即可。




---
- #### Vue.component 与 Vue.extend 的区别和联系
  ##### 两者都用于返回一个构造器。
  ```javascript
    // 注册组件，传入一个扩展过的构造器
    Vue.component('my-component', Vue.extend({ /* ... */ }))

    // 注册组件，传入一个选项对象 (自动调用 Vue.extend)
    Vue.component('my-component', { /* ... */ })

    // 获取组件的构造器（getter 方法）
    var MyComponent = Vue.component('my-component')
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






---
- #### v-if 与 v-show
  ##### 1. v-if 是惰性加载，只有在后条件满足后才会开始渲染。但 v-if 会确保在条件切换后，事件监听器和子组件适当地被销毁和重建。注意，v-if 会重新执行组件的生命周期，包括 creat、mount、destroy 等。
  ##### 2. v-show 不管初始条件是什么，元素总是会被渲染。但 v-show 只是简单地基于 CSS（display：none）进行切换。
  ##### 3. display: none。有 Dom，没有占据空间。
  ##### 4. visibility: hidden。有 Dom，有占据空间。

  | | DOM 节点 | 占据空间
  |-|-|-
  | v-if | 没有 | 没有
  | v-show（display:none）| 有 | 没有
  | visibility: hidden | 有 | 有




---
- #### $emit 和 $on
  ##### 1. $emit 和 $on 要绑定在同一个 Vue 实例上。




---
- #### $once 和 $off
  ##### 1. $once 与 $on 类似，用于监听自定义事件，但是 $once 只触发一次，在第一次触发之后自动移除监听器。
  ##### 2. $off 用于手动移除自定义事件的监听器。






---
- #### Vue 的模板绑定

  | | v-bind | v-model | v-on | 绑定class | 绑定style
  |-|-|-|-|-|-
  | 使用方式 | v-bind:valueName=" " | v-model="valueName" | v-on:functionName=" " | v-bind:class="objName/{}/[]" | v-bind:style="objName/{}/[]"
