# JavaScript 的零杂知识点

- #### 示例命名解释
  ##### 无意义变量命名： foo、bar、baz、qux
  ##### 无意义函数命名： fun




---
- #### 深复制和浅复制
  ##### 1. 浅拷贝与深拷贝，针对的都是对象
  ##### 2. 浅拷贝只会将对象的各个属性进行依次复制，并不会对引用类型属性进行递归复制
  ##### 3. 深拷贝会对引用类型的属性进行递归复制
  #### 对比：浅拷贝时对于引用类型的属性并没有真正复制，只是用了相同的引用；深拷贝则会隔离出两个完全不同的对象。




---
- #### JavaScript 模块化的实现

  浏览器（异步） | NodeJS（同步）
  ---|---
  RequireJS（AMD ）| CommonJS
  SeaJS（CMD）|







---
- #### 严格模式
  ##### 严格模式必须在作用域内的开头部分声明，否则会默认使用正常模式

  ```javascript
  /* 严格模式 */
  function strict(){
      "use strict";
  　　return this === undefined ? "严格模式" : "正常模式";
  }

  /* 正常模式 */
  function notStrict() {
      var a = "a";
      "use strict";
      return this === undefined ? "严格模式" : "正常模式";
  }
  ```





---
- #### var a = b = "foo";
  ```javascript
  var a = b = "foo";
  //等于以下
  b = "foo"; var a = b;

  /* 下例中的 b 会变成全集变量，a 是函数级变量 */
  (function (){
    var a = b = "foo";
  })();
  console.log(b);  // “foo”
  console.log(a);  // ReferenceError: a is not defined

  /* 避免以上情况 */
  (function (){
    "use strict"  // 开启严格模式，b 未定义会报错而不会在全局对象上定义
    var a = b = "foo";  // ReferenceError: b is not defined
  })();
  ```






---
- #### 异步方法的执行时间一定在主线程执行完毕之后
  ##### 异步方法是在异步队列中执行的，当异步方法被触发之后，会被添加到异步队列中，按序执行
  ```javascript
  var i = t = 0;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://www.zealer.com/test', true);
  xhr.onload = function() {             // 异步回调，在主线程执行结束后，并且被触发时添加到异步队列中执行
  	i = 1;
    console.log("async: " + i);
  };
  xhr.send();
  while(t < 10000){                     // 同步函数，按序执行，在异步队列之前执行
    t++;
  	i = 2;
    console.log("sync: " + i);          // 注意 console.log() 本身也是异步方法，被添加到异步队列中按顺序执行
  }

  /* 执行结果*/
  sync: 2              // 输出10000遍，表明先执行完同步
  async: 1             // 再执行异步
  ```









---
- #### 用 new 调用构造函数时，如果没有参数，括号可以省略
  ```javascript
  /* 例如 */
  new Foo() == new Foo
  ```





---
- #### 对于部分引用类型的构造函数来说，关键字 new 不用也可以
  ```javascript
  /* 原因是，在这些 JavaScript 的原生构造函数中，返回值都是相应的数据类型;
  对于大部分引用类型的构造函数来说，这个返回值是个引用值，所以即使用
  new 来调用，这个返回值依然不变。但对于基本类型的构造函数来说，它的返回值
  是个基本类型值，所以用 new 来调用和不用 new 调用返回的是不同的结果。 */

  new Object() == Object()
  new Array() == Array()
  new Function() == Function()

  new Error() == Error()
  new RegExp() == RegExp()

  /* new Date() 返回时间对象 Date() 返回时间对象字符串 */
  new Date() != Date()
  ```





---
- #### 函数名
  ##### 1. 函数声明，必须有函数名，但函数表达式不是必须的。
  ##### 2. 函数名一定可以在函数体内被引用，但外部不一定

  ```javascript
  // 执行字符串
  eval('let t=4; console.log(t)'); => 4
  // 自行表达式
  eval('6 + 9'); => 15
  // eval 执行的函数具有当前作用域
  let x = 10;
  console.log(eval(x + 17)); => 27

  // 非法参数
  eval(''); => undefined
  eval({}); => {} 返回当前对象
  ```







---
- #### eval 函数
  ##### eval 函数可以将传入的字符串类型的参数当成语句执行
  ##### 如果参数中没有合法的表达式和语句，则抛出 SyntaxError 异常
  ``` javascript

  ```





---
- #### null 与 undefined
  ``` javascript
  // null 表示的是意料中的，特意的空
  // undefined 表示的往往是意料之外的空
  /* 在传递空的实参时，最好用 null */
  function f(x, y){};
  f(null, "test");

  // null 转换成 number 时是 0 ，undefined 是 NaN
  ```




---
- #### 或逻辑 "||"
  ##### "exp1 || exp2" 可以用于给 exp1 加一个默认值 exp2
  ```javascript
  /* exp1 || exp2 会首先对 exp1 的值进行 Boolean 运算，如果是 true 则返回 exp1，否则返回 exp2 */
  exp1 || exp2   ==   (!!exp1) ? exp1 : exp2   // 此等式成立

  /* 需要注意的是 exp1 的值为 0 */
  let foo = 0 || 1;         ==>  返回 1， 因为 !!0 为 false
  let foo = -1 || 1;        ==>  返回 -1， 因为 !!-1 为 true
  let foo = '' || 'bar';    ==>  返回 'bar'， 因为 !!'' 为 false
  ```





---
- #### 取整
  ```javascript
  /* Math.round() 四舍五入取整 */
  // 只对小数点后第一位进行计算，四舍五入后返回一个整数
  Math.round(5.45);           // 5
  Math.round(5.54);           // 6

  /* Math.ceil() 向上取整 */
  // 只对小数点后第一位进行计算，只要小数第一位大于0，则进位
  Math.ceil(5.4);            // 6
  Math.ceil(5.0);            // 5

  /* Math.floor() 向下取整 */
  // 直接取整
  Math.floor(5.2);           // 5
  Math.floor(5.0);           // 5
  ```



---
- #### 取随机数
  ```javascript
  /* random 返回 [0,1) 之间的一个随机数，精确到小数点后 15 位 */
  Math.random();                      // 0.551302460829546

  /* 返回 1~100 之内的一个随机数 */
  Math.floor(Math.random()*100+1);      // 55
  ```



---
- #### 对象属性如果不存在会返回 undefined，但对象的属性值也可以是 undefined，比如属性 delete 之后值就被赋予了 undefined
  ```javascript
  /* 可以通过 in 来区别属性 undefined 的具体是哪一种含义 */
  var o = {x:undefined};
  o.x;       // undefined
  o.y;       // undefined
  "x" in o;    // true
  "y" in o;    // false

  /* 对于数组来说，delete 数组项后长度不变，因为数组项只是被赋予了 undefined 值 */
  var arr = [1,2,3];
  arr.length;            // 3
  delete arr[2];
  arr.length;            // 3 长度不变


  /* 两种新建特定长度的数组的方法 */
  var arr = new Array(3);      // 只是设置了 length 属性为3
  "0" in arr;                  // false

  var arr = Array.apply(null, {length:3});  // 不但 length 属性为3，0，1，2都赋值为 undefined
  // Array.apply(null, {length:3}) == [undefined, undefined, undefined]
  "0" in arr;                               // true
  ```
