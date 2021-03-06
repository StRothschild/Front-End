# JavaScript 的函数

## 1. 函数的创建方式
- ##### 函数声明
- ##### 函数表达式
- ##### Function 构造函数


## 2. 函数声明
- ##### 函数声明的开头一定是 function 关键字，而且必须有函数名。
- ##### 相同作用域内，函数声明不要使用相同的函数名，因为后定义的函数指针会覆盖前面定义的同名函数。尤其是 ifelse、switch 等结构，因为这些结构中的同名函数声明看起来相互独立，各自定义函数体，但是由于声明提升的存在，这些结构中的同名函数声明都会被最后一个覆盖。

```
/* 函数声明 */
function functionName() {
    // do something
}
```

## 3. 函数表达式
##### 函数表达式有两种形式, 但函数表达式的开头一定不能是 function 关键字：
- ###### 第一种是将函数体赋值给一个变量。
- ###### 第二种是在函数体的外侧加上圆括号。
##### 函数表达式的函数名不是必须的，==如果有函数名，也只能在函数的内部使用，指代它自己（一般用于递归）。==

```
/* 函数表达式 */
var f = function functionName() {
    // do something
}
var f = function() {
    // do something
}

// 以下两个函数表达式可以立即执行
(function functionName() {
    // do something    
})
(function() {
    // do something    
})
```

##### 函数声明和函数表达式在使用方面有一个主要的区别，就是函数声明在执行之前会有一个声明提升的操作。由于函数声明是必须有函数名的，所以==函数声明在定义的时候其实就已经完成了函数名的赋值操作==，所以函数声明可以在作用域内的任何地点被调用。而函数表达式的赋值操作是按顺序执行的，所以只有在赋值操作完成后才可能被调用。




## 4. Function 构造函数（不推荐）
##### 函数的本质也是对象，所以函数也可以通过构造器的方式来构建。JavaScript 中已经内置了 Function 构造函数，可以直接调用。

```
/* 直接通过 new 关键字调用内置构造函数 
所有参数都是字符串，最后一个参数是函数体，之前的参数都是函数形参 */
new Function("a1", "a2", "return a1+a2;")
// 不推荐以上写法来构建函数，因为效率低下
```


## 5. 函数以构造函数的形式执行
- ##### 当函数以 new 关键字作为开头来调用时，此时的函数就是构造函数，优先级如下：

```
/* 调用构造函数的优先级如下 */
function A(){}
A.f = function() {};
function B(){}

new A.f() == new (A.f)()
new A().B() == (new A()).B()
new new A().B() == new ((new A()).B)()

// 由上例子可知，new A().B() 会先执行表达式 A，再执行 new , 最后执行 B
```

- ##### 当构造函数有返回值时==一定返回一个对象==，具体是什么对象，需要==判断 return 的类型==。如果 return 值是基本类型或者没有 return 语句（其实返回 undefined），则返回一个新的对象。如果 return 值是引用类型，则直接返回该引用值。





## 6. 立即执行函数表达式 Immediately-Invoked Function Expression (IIFE)
##### 函数表达式是可以立即执行的，而函数声明却不可以。

```
/* 以下两种括号的方式都会把函数声明变成函数表达式，可以执行 */
(function() {
    console.log("excuted");   // excuted
})()
// 或者
(function() {
    console.log("excuted");   // excuted
}())

/* 以下是函数声明，无法立即执行 */
function() {                  // 报错
    console.log("excuted");  
}()
```
