## class
> 在 ES6 之前的 JavaScript 版本中，并没有“类”的概念，但是可以用一些变通，模拟出“类”的效果。

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

- #### ES6 中提供了更接近于传统语言的模板继承实现，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。
