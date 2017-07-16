## class 类
> 在 ES6 之前的 JavaScript 版本中，并没有“类”的概念，但是可以通过原型对象，模拟出类似于“类”的效果。

> ES6 中引入了 JavaScript 的类语法，实际上它并不是一个新的面向对象的继承模型，依然是一种基于原型的继承的语法糖。但 class 类提供了一个更简单和更清晰的语法来创建对象并处理继承。


- #### JavaScript 中对象创建的三种方式：1. 构造函数（Function）；2. Object.create() ; 3. 直接量。通过这三种方式可以实现对象的继承，其实现的本质都是基于原型链。这种实现方式与传统的面向对象语言（比如 Java、C++）基于模板的继承，差异很大。

  ```javascript
  /* 构造函数 */
  var Foo = function(bar) {
    this.bar = bar;                  // 通过传入参数来初始化数据
    this.initial = "test";           // 自定义初始化
    return this;                     // 此处的 this 在 new 调用时就是新对象，在非 new 调用时指向全局对象
  }
  /* 函数原型对象 */
  this.prototype = {
    bar: '',                         // 原型对象中的属性，会被对象本身的同名属性屏蔽
    initial: '',
    f: function(){}
  }
  /* 通过 new 调用构造函数，产生新对象 */
  var obj = new Foo('');             // new 方法产生的新对象，原型默认指向构造函数的原型对象
  ```



---
- #### 类声明
  ##### 定义一个类的第一种方法是使用类声明。要声明一个类，可以使用 class 关键字来声明类名。
  ```javascript
  class Foo {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  ```

- #### 类表达式
  ##### 定义一个类的第二种方法是使用类表达式。和函数表达式类似，类表达式也可以是匿名的。
  ```javascript
  /* 类表达式 */
  var bar = class Foo {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  /* 匿名的类表达式 */
  var bar = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  ```
