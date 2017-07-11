## Symbol（标志）
> ES6 中新添加了 Symbol 类型的原始数据类型（primitive type），表示独一无二的值。

- #### 原始数据类型（primitive type）：
  ##### 1. Undefined
  ##### 2. Null
  ##### 3. String
  ##### 4. Number
  ##### 5. Boolean
  ##### 6. Symbol            // typeof Symbol() === 'symbol'

- #### 对象数据类型（object type）：
  ##### 7. Object




---
#### Symbol 特点
- ##### symbol 值是独一无二的
  ###### symbol 值是用来避免冲突的，所以每一个 symbol 实例都是独一无二的。可以利用这个特性来避免对象中的 key 被意外的覆盖。
  ```JavaScript
  /* 新建对象 */
  var obj = {t: "test"};

  /* 往对象添加属性，属性名用 symbol 类型的值 */
  obj[Symbol("key")] = "s1";
  obj[Symbol("key")] = "s2";

  /* 打印结果，两次调用 Symbol 方法产生了不同的 symbol 实例，所以并没有发生覆盖 */
  obj;       // {t: "test", Symbol(key): "s1", Symbol(key): "s2"}
  ```


- ##### symbol 作为对象属性名时有“非私有内部属性”的效果
  ###### 在 JavaScript 中对象检测特性是会忽略 symbol 类型作为属性名的属性。比如，for...in、for...of、Object.key(obj) 和 Object.getOwnPropertyNames(obj) 等遍历方法。如果要遍历 symbol 类型的值，可以使用 Object.getOwnPropertySymbols(obj)，该方法会遍历对象的 Symbol 键。这有点类似于私有属性的概念，但实际上 symbol 还是公有属性，但可以利用这个特性实现非私有内部属性的效果。



- ##### 创建 Symbol
  ###### Symbol 与其他原生类型的构造函数不同，创建 Symbol 不能用 new 来调用，不然会报错。可以通过直接调用 Symbol 方法来来创建一个新的 symbol 值。

  ```JavaScript
  var symbol = Symbol();         // 直接调用 Symbol 方法来创建 symbol
  ```


- ##### symbol 值不与其他 symbol 值相同，更不与其他类型值相同
  ```JavaScript
  /* 每一个 symbol 实例的值都不相同，这个特点类似于 Object */
  var s1 = Symbol();
  var s2 = Symbol();
  s1 == s2;                  // false

  /* 输入的参数与 symbol 的值并没有关系，可以认为这个名字就是个注释，如下例，结果还是一样的 */
  var s1 = Symbol('key');
  var s2 = Symbol('key');
  s1 == s2                   // false

  /* symbol 不与其他类型的值相同 */
  Symbol() == ""             // false
  Symbol() == 0              // false
  Symbol() == false          // false

  /* symbol 可以显示的转换成 string 和 number */
  String(s1)                 // 'Symbol(key)'
  s1.toString()              // 'Symbol(key)'
  ```


- ##### symbol 值作为对象的属性名时，不能用点运算符
  ###### 由于点运算符后面总是被解析为字符串，所以用 symbol 值作为时会被认为是 string 值而不是 symbol 值。所以必须放在方括号中。
  ```JavaScript
  var s = Symbol();

  // 第一种写法
  var a = {};
  a[s] = 'Hello!';

  // 第二种写法
  var a = {
    [s]: 'Hello!'
  };

  // 第三种写法
  var a = {};
  Object.defineProperty(a, s, { value: 'Hello!' });

  // 以上写法都得到同样结果
  a[mySymbol]              // "Hello!"
  ```
