# JavaScript 中的 this 关键字

> this 关键字是对定义当前方法的对象的引用。
##### 概念：JavaScript 中函数的 this 指向==当前执行环境的上下文（Execution Context），也就是调用该函数的对象==。和函数作用域链不同的是，==执行环境上下文是在函数执行的时候才能确定的，而作用域链则是在函数定义的时候就已经确定了。== 通过 this 来引用执行上下文环境，可以帮助函数获取执行环境的变量和方法。

##### 与作用域的区别：作用域是函数==可引变量的集合，这个集合里边包含了 this。== 而 this 是对当前函数调用对象的引用。

### 1. 作为全局函数调用（默认绑定）
```
/* 作为普通的全局函数执行时，this 指向 window */
var bar = "window"
function foo(){
    var bar = "bar";
    console.log(this.bar);
};
foo();         // window
```

### 2. 作为对象方法调用（隐式绑定）
```
/* 作为对象的方法调用时，this 指向函数所属对象 */
var a = "window";
var bar = {
    a: "object",
    foo: function() {
    	var a = "function";
    	console.log(a);
    	console.log(this.a);
    }
};
bar.foo();     // function
               // object
```
### 3. 作为构造函数调用（new 绑定）
```
/* 作为构造函数调用时，this 指向新对象 */
var name = "window";
var Bar = function(name) {
    var name = "function"
    this.name = name;
};
var bar = new Bar("newBar");
console.log(bar.name);    // newBar

/* 在 new Bar() 过程中 new 运算符的工作 */
var obj = {};                    // 新建一个空对象 
obj.__proto__ = Bar.prototype;   // 将空对象的__proto__成员指向了构造函数的原型对象
Bar.this = obj.this;             // 构造函数中的 this 被指向了 obj 对象
Bar();                           // 执行构造函数
```



---
### 4. this 的绑定缺陷
##### 在 JavaScript 中，关于 this 的指向有一个设计缺陷。==内部函数（包括回调函数）在执行时，this 始终指向全局变量。==

```
/* 执行内部函数 */
var name = 'window';
var foo = {
    name: 'foo',
    bar: function() {
        var name = "bar";
        function test() {
            console.log(this.name);
        };
        test();
    }
};
foo.bar();    // "window"



/* 解决方法，在作用域链上存储当前执行环境，供内部函数引用 */
var name = 'window';
var foo = {
    name: 'foo',
    bar: function() {
        var that = this;
        var name = "bar";
        function test() {
            console.log(that.name);
        };
        test();
    }
};
foo.bar();    // "foo"


 
/* 执行回调函数 */
var name = "window";
var foo = {
    name: "foo",
    bar: setTimeout(function() {
            console.log(this.name);
        }, 1000)
};            // "window"


/* 解决方法，在回调函数上用 bind 绑定 */
var name = "window";
var foo = {
    name: "foo",
    bar: setTimeout(function() {
            console.log(this.name);
        }.bind(foo), 1000)
};            // "foo"

```




### 5. 关于 this 不易理解的例子
```
/* 注意隐式赋值操作，赋值操作会返回操作所赋的值 */
var name = "window";  
var bar = { 
    name : "bar",
    foo : function() {
        var name = "foo";
        console.log(this.name);
    }
};

bar.foo();              // "bar"
(bar.foo)();            // "bar"    普通的括号只有优先级提升功能，没有 getValue 操作，所以 bar.foo 还是 bar.foo，没有被转化为实际的函数
(bar.foo = bar.foo)();  // "window" 从右到左进行了一次赋值操作，赋值操作会对赋值进行 getValue 操作并返回，所以括号内已经是实际的函数了
(bar.foo, bar.foo)();   // "window" 逗号运算符用于隔开表达式，被分隔开的表达式会从左到右执行 getValue 操作，并返回最后一个表达式的操作结果。
                        // 所以最后一个 bar.foo 是在变成了实际的函数后才被返回的。这个情况很像执行回调函数，所以回调函数都指向调用时的对象而不是定义时的对象。
                        
                        
/* 内置方法中的回调函数是立即执行的，相当于执行一个内部函数 */
array.filter(function(value,index,list){
	console.log(this);      // window
});


/* 事件监听函数立即执行的是绑定工作，而回调函数的执行要等到事件触发 */
element.addEventLinstener("click", function(event){
	console.log(this);      // element
});
```





---
### 6. 显式指定 this
> 改变函数的执行环境对象的意义在于，分离了对象与方法，同一个方法可以用于多个对象中，减少了耦合。

#### 1. function.apply(arg1，arg2)
##### apply 方法可以通过第一个参数 arg1 来指定一个函数的执行上下文，==如果 arg1 为 null 或 undefined，则默认为全局对象==。方法的第二个参数 arg2 需要的是类数组（Array like）类型，并不需要严格的 Array 类型。所以==只要是 Object 类型，并且有 length 属性就可以了。==

```
/* 以下三个调用 function 的效果相同 */
(function(1, 2, 3){})();                            // 不使用 apply，在全局对象中执行 function
function.apply(null, [1,2,3]);                      // 用 apply 方法调用 function 在全局对象中执行
function.apply(null, {length:3, 0:1, 1:2, 2:3}});   // 使用 Object 加上 length 属性作为 apply 的第二个参数

/* 以下两个函数调用结果相同 */
function.apply(null, {p:"8", length:3, 1:2}});      // 传入的 p 属性无效果
(function(undefined, 2, undefined){})();
```


#### 2. function.call(arg1，arg2...)
##### call 方法和 apply 方法的功能相同，但是传递函数参数的方式不同，==call 方法从第二个参数开始，后面的所有值都作为作用函数的调用参数。==

```
/* 以下两个个调用 function 的效果相同 */
(function(1, 2, 3){})();                            // 不使用 call，在全局对象中执行 function
function.call(null, 1, 2, 3);                       // 用 call 方法调用 function 在全局对象中执行
```


#### 3. function.bind(arg1，arg2...) （ES5 新增，IE8 以及之前版本不支持）
##### bind 方法的第一个参数是要绑定的执行环境对象，第二个及以后的参数是函数的调用参数。==bind 方法和 apply/call 方法最大的区别是，bind 只是给函数绑定执行环境对象，但不执行==。而 apply/call 方法在绑定的同时会执行函数。
```
/* 以下三个效果相同 */
var name = "window";
var bar = {
    name: "bar",
};
function foo(arg) {
    console.log(this.name);
    console.log(arg);
};
foo.bind(bar, "arg2")();       // "bar"
                               // "arg2"
```

### 7. this 绑定的优先级别

##### 1. new 绑定（new object）
##### 2. 显式绑定（apply、call、bind）
##### 3. 隐式绑定（object）
##### 4. 默认绑定（window）



### 参考：
http://blog.csdn.net/u013063153/article/details/52424155
https://www.nowcoder.com/discuss/3433?pos=1149&type=0&order=0