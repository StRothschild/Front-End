## JavaScript 中的作用域链和闭包

- 1.最小作用域
> 在 ES6 之前，JavaScript 的最小作用域是函数级作用域，在 ES6 中添加了块级作用域。

##### 在 ES5 中，为了模拟块级作用域，往往使用立即执行函数的方式。在父函数需要使用块级变量的时候，就将变量声明在一个立即执行函数中。这样，在立即执行函数内可以访问父函数中的变量，而内部的变量则无法被父函数访问到，形成了块级作用域的效果。而在 ES6 中，可以通过 let 和 const 直接定义块级变量，就免除了使用立即执行函数的繁琐。



- 2.执行上下文（execution context）
##### 执行上下文定义了代码的行为和数据的访问范围，引擎在执行代码时， ==会根据调用关系生成执行上下文栈。== 当执行上下文内的全部代码执行完毕后，则该执行上下会出栈，并且上下文内定义的变量也随之销毁（全局执行上下文要直到应用程序退出才销毁，比如关闭浏览器页面）。执行上下文只有 4 种：块级执行上下文（ES6）、函数执行上下文、全局执行上下文和 eval 执行上下文（eval 函数）。浏览器环境中的全局执行上下文就是 window 对象。



- 3.变量对象与作用域链（scope chain）
##### ==每个执行上下文都会有一个对应的变量对象来存储变量。== 这个变量对象和其父级执行上下文的变量对象存在一个链式调用关系。正是由这些变量对象构成了当前执行上下文的作用域链（scope chain），使得当前执行上下文可以有序的访问自身变量及父级执行上下文的变量。==在作用域链的最前端，始终是当前执行上下文中定义的变量对象（也称活动变量 activity object，包括了自定义的变量和 this / arguments）==，然后是外层（父级）执行上下文的变量对象，以此类推直到最后是全局执行上下文的变量对象。==注意：作用域链在执行上下文定义的时候就已经确定，直到执行上下文销毁，作用域链才会一起销毁。==

```javascript
/* 若作用域链上存在相同变量，会取靠近作用域链前端的值 */
var str = "out";
(function ad(){
    var str = "in";
    console.log(str);           // in
    console.log(window.str);    // out
})();

/* arguments 中非 undefined 的变量会和函数自定义的变量同步 */
(function(a, b){
    var a = "innerA";
    var b = "innerB"
    console.log(arguments[0]);    // "innerA"
    console.log(arguments[1]);    // 形参默认为 undefined
})("outerA");
```
![作用域图](https://github.com/StRothschild/JavaScript-Core/blob/master/resource/JavaScript%20%E2%80%94%20%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE.jpg?raw=true)

- 4.延长作用域链
##### 在 JavaScript 中有两种语句可以延长作用域链，==使用其中任何一种，都会在当前作用域的最前端添加一个变量对象。==

- ###### try-catch 语句中的 catch 块

```javascript
try {
    // do something
} catch(err){
    // 在 catch 块中，作用域的最前端有一个错误对象 err，err 只在 catch 块中有效
    // 在 IE8 及以前的版本这个错误对象可以在 catch 块的外部访问，此 bug 已在 IE9 中修复
}
```


- ###### with 语句（执行效率低，不推荐使用）
```javascript
/* with 语句提供了访问某个对象属性的快捷方式，
但不能通过 with 来创建该对象的属性 */

window.forms = {name:""};
with(window.forms) {
    name = "myName";
    age = "myAge";
}
console.log(window.forms.name);  // "myName"
console.log(window.forms.age);   // undefined
```




```
graph LR
作用域类型-->全局作用域
作用域类型-->函数级作用域
作用域类型-->块级作用域

块级作用域-->let/const
块级作用域-->catch块中的形参
块级作用域-->with块中的实参
```








---
- 5.闭包（closure）
> 一句话概况闭包：利用作用域链来保存外层作用域中的变量的一种特性。

> 从命名上看，闭包（closure）就像是对作用域的一种闭合（closing），在闭包定义的时候，其作用域已经决定了，并且后续使用不会再改变，即作用域已经闭合了。

> 函数的执行依赖于作用域链，这个链上包含了所有函数可以引用的变量，无论是函数自己定义的、父级执行上下文中定义的、原型链上继承的还是默认特殊变量（this 和 arguments）。==这个作用域链在函数定义的时候就已经确定了，所以在执行任何函数时，读取的依然是其定义时的执行上下文（作用域链）。==  虽然作用域链在函数定义时就已经确定，但作用域上的变量还是可以改变的，所以==变量的值必须在函数执行时获取。最典型的例子就是活动作用域中的 this 变量，根据函数执行的调用对象不同，this 的指向也不同。==



- 闭包的出现形式:
    ```javascript
    /* 作为返回值 */
    function foo() {
        max = 100;
        var max = 10;
        return function(x) {
            if (x > max) {
                console.log(x);
            } else {
                console.log(max);
            }
        };
    };
    foo()(50);     // 50



    /* 作为回调函数 */
    function addEvent() {
      var name = 'foo';
      element.addEventListener('click', function(){
          console.log(name);
      }, false);
      // 或者
      setTimeout(function(){
          console.log(name);
      }, 1000);
      name = 'bar';
    }
    addEvent();



    /* 作为参数 */
    var foo = function(x) {
        if (x > max) {
            console.log(x);
        } else {
            console.log(max);
        }
    };

    (function(f){
        var max = 10;              // foo 函数中无法获取
        window.max = 100;          // foo 函数可以获取，因为 foo 定义在 window 对象中
        f(50);
    })(foo);       // 100



    /* 与 this 结合 */
    var name = "window";
    var object = {
        name : "Object",
        getNameFunc : function(){
            return function(){
                console.log(name);       // 从作用域链上查找
                console.log(this.name);  // 在调用对象查找
            };
        }
    };
    object.getNameFunc()();   // "window"  "window"
    ```



> 函数级执行上下文的内部变量都会被保存在作用域链上，有父子关系的函数之间是通过作用域链相互关联的，所以看似已经执行完毕的函数可能并没有被销毁，因为它的变量被保存在子孙函数的作用域链上，可以被继续调用。==这种函数的内部变量被保存在子孙函数作用域链上的技术叫做闭包。==



```javascript
    /*
    关键一：函数的可获取的变量必须在函数定义时的作用域链上，不然会报错
    关键二：只有在执行函数的时候，才去作用域链上获取变量的值
    关键三：函数每次执行都会产生新的活动对象，同级的活动对象互不干扰
    */

    /* 例一：闭包的应用，定义内部函数 */
    var result = [];
    (function foo(){
        for (var i=0; i<3; i++){
            result[i] = function() {   //foo 函数正在执行，i 会被接卸
                console.log(i);  //这个 i 是个变量，存储在父函数的活动对象上，子活动对象只有在作用域被执行时才会向父活动对象获取这个变量的值，此时只是内部匿名函数的定义，所以 i 没有被解析
            }
        }
    })();
    result[0]();   // 3
    result[1]();   // 3
    result[2]();   // 3



    /* 例二：为了避免上述情况出现，解决办法是立即执行一个函数来获取当时的变量 */
    var result = [];
    (function foo(){
        for (var i=0; i<3; i++){
            result[i] = (function bar(j){
                return function() {
                    console.log(j); //bar 执行了三次，每次都会产生新的活动对象，每个活动对象中的 j 各自解析
                    console.log(i); //foo 中定义的 i 变量被所有子作用域活动对象共用
                }
            })(i);
        }
    })();
    result[0]();   // 0   3
    result[1]();   // 1   3
    result[2]();   // 2   3



    /* 例三：除了立即执行一个函数来避免例一的问题，还可以通过 let 来保存一个块级活动对象 */
    var result = [];
    (function foo(){
      for(let i=0; i<3; i++) {
        result[i] = function() {
          console.log(i);
        };
      }
    })();
    result[0]();   // 0
    result[1]();   // 1
    result[2]();   // 2



    /* 例四：函数每次执行都就会生成一个独立的活动对象，所以以下代码执行了两次foo函数，生成了两个闭包，它们不会共享n，但是outn所在的全局上下文只执行一次，所以是会共享的。注意与上例的区别 */
    var outn = 99;
    var foo = function() {
            var n = 999;
            return function bar() {
                console.log(n++);
                console.log(outn++);
            };
    };
    var bar1 = foo();
    bar1(); //999 99

    var bar2 = foo();
    bar2(); //999 100

    bar1(); //1000 101
    bar1(); //1001 102
    bar2(); //1000 103
```



---
- 闭包总结：
#### 1. 闭包的实现原理是通过作用域链来保存祖先函数的内部变量。
#### 2. 函数（闭包）的变量只有在执行时才解析。
#### 3. 执行上下文每执行一次，就会生成一个独立的作用域链（见例四）。
#### 4. 常见的闭包应用：
- ##### 1. 模拟私有属性
```javascript
/* 用闭包模拟私有属性 */
(function counter() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {          // 私有属性不是值，而是一个取值方法，真正的值存储在父级作用域中
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
```


- ##### 2. 通过立即执行，可以设置临时变量，避免污染全局环境
```javascript
function foo(){
  var name = "foo";
  (function(){
    console.log(name);   // foo
  })();
};
foo();                   // 定义并执行闭包
console.log(name);       // 报错 Uncaught ReferenceError

// 下例是在 ES5 中拓展 Number.isNaN 方法
(function (global) {
  var global_isNaN = global.isNaN;

  Object.defineProperty(Number, 'isNaN', {
    value: function isNaN(value) {
      return typeof value === 'number' && global_isNaN(value);
    },
    configurable: true,
    enumerable: false,
    writable: true
  });
})(this);
```



---
- 参考
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

[https://www.nowcoder.com/discuss/2085](https://www.nowcoder.com/discuss/2085)
