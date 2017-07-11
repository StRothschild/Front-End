# JavaScript — 数据类型
## 1.简单数据类型（基本数据类型）:
#### 也称为原始值（primitive value）
- #### String
- #### Number
- #### Boolean


## 2. 复杂数据类型（对象类型）
- #### Object
    ##### 由一组无序的名值（key:value）对组成。
    ##### 常见的 JavaScript 内置对象类型：Object、Array、Function、Date、RegExp、Error、Math、Global、 还有3个基本数据类型的包装对象 String、Number、Boolean。

![JavaScript内置对象](http://p.blog.csdn.net/images/p_blog_csdn_net/zhiqiangzhan/EntryImages/20091013/global.jpg)





## 3. 特殊的原始值
- #### null 和 undefined
##### 它们分别代表了==各自类型的唯一成员。==



## 4. JavaScript 中两种数据类型和两种原始值的关系
```
graph LR
JavaScript数据类型-->原始类型
JavaScript数据类型-->原始值
JavaScript数据类型-->对象类型

原始类型-->string
原始类型-->number
原始类型-->boolean
对象类型-->对象
对象-->Object
对象-->Array
对象-->Function
对象-->Date
对象-->RegExp
对象-->Error
对象-->Global
对象-->Math
对象-->String
对象-->Number
对象-->Boolean
原始值-->null
原始值-->undefined
```





## 5. 栈（stack）和堆（heap）

#### JavaScript的变量在内存中有栈（stack）和堆（heap）两种存储方式。其中，栈（stack）的运行效率比堆（heap）要高，但空间相对较小；而堆（heap）的特点则相反。


#### 基本数据类型直接将数据存储在栈（stack）中，而引用类型则在堆（heap）中开辟内存空间存储对象，同时会在栈（stack）中存储数据在堆（heap）中的地址（指针）。


![栈堆内存图](http://images0.cnblogs.com/blog2015/746777/201508/171842170979894.png)






## 6. typeof（获取数据类型操作符）
#### typeof 可以获取数据类型。但==由于引用类型数据大部分返回的都是 object（function 除外），所以 typeof 一般只用来判断基本数据类型。==

```
/* typeof 返回6种结果，特别注意 null 和 function */
typeof 'string'       // 返回 "string"
typeof 1              // 返回 "number"
typeof false          // 返回 "boolean"

typeof undefined      // 返回 "undefined "
typeof null           // 返回 "object"  注意 null 是一个指针，指向一个特殊的对象——“空值”，所以这里返回 object

typeof {}             // 返回 "object"
typeof function(){}   // 返回 "function" 函数本质上也是对象，但这里返回 function
```




## 7. instanceof（原型判断操作符）
#### instanceof 运算符用来==检测参数构造函数是否在当前实例的原型链上，是返回 true 否则返回 false。==

#### 需要注意的是，==instanceof 只能用来判断复杂数据类型（对象、函数），不能用来判断基本数据类型（string、number、boolean）。==

```
/* instanceof 返回布尔值 */
var foo = new Foo(); 
foo instanceof Foo         // true


/* 原型继承 */
function Foo(){} 
function Bar(){} 
Foo.prototype = new Bar(); 

var foo = new Foo(); 
foo instanceof Foo;        // true 
foo instanceof Bar;        // true

```







## 8. null 和 undefined 和 NaN 和 ""
> 在程序中， undefined 的出现往往是出乎意料的错误，一般是考虑不完善造成的运行错误。而 null 往往在赋值时被使用，用来赋予想要为空的变量，所以 null 的出现往往是刻意为之的，意料之中的。

- #### null 是一个特殊==对象==，含义是 ==“非对象”或者说是“空值”。==

- #### undefined 是一个==未被初始化的变量，就会被赋予 undefined 值。==

- #### null 表达的是==没有==； undefined 表达的是==有，但还没赋值。==

- #### null 中派生出 undefined，所以在相等性测试时返回 true，但他们属于不同的数据类型，所以全等性测试时返回的是 false。

- #### NaN 是 Not a Number 的缩写，是一个特殊==数字值==，表示的意思是“一个不是数字的值”，用 typeof NaN 检测，返回“number”。

- #### "" 代表的是空字符串，是一个 String 类型的“空值”。


```
null == undefined;    // true   相等性测试
null === undefined;   // false  全等性测试


NaN == 1/"t"/{}       // false  NaN 与任何数据比较的结果都是不相等的
NaN == NaN            // false 一个不是数值的值也不等于另一个不是数值的值
/* 通过 isNaN 方法来判断是否是 NaN ，
注意 isNaN 在判断之前会给参数做一次类型转化，尝试把参数变成数值类型 */
isNaN(NaN);           // true
isNaN(undefined);     // true
isNaN({});            // true
isNaN(1);             // false

isNaN(true);          // false  由于 boolen 值被转化成了0或1，所以返回 false
isNaN(null);          // false  由于 null 值被转化成了0，所以返回 false
isNaN('');            // false  由于 空字符串被转化成了0，所以返回 false

isNaN(undefined++);   // true   由于 NaN 和任何数据运算的结果都是 NaN，所以返回 true



null == ""            // false  数据类型不同
undefined == ""       // false  数据类型不同
```

## 9. 类型转化

### 1. 显式类型转化
##### 当==不通过 new 运算符==来调用 String()、Number()、 Boolean() 和 Object() 时，这些方法就是相应的类型转化方法，会对传入的参数进行类型转化。
```
String(3)    =>  "3"
Number("99") =>  99
Boolean([])  =>  true
Object(3)    => new Number(3)

/* 或者 */
"" + x  =>  等价于 String(x)
+x      =>  等价于 Number(x) 
!!x     =>  等价于 Boolean(x)
```



#### toString 方法：
- ##### toString 方法返回一个反映该对象的一个字符串
- ##### 除了 null 和 undefined 之外的任何值都有 toString() 方法

```
/* 普通对象 */
({a:5}).toString()   // "[object Object]"
JSON.toString()      // "[object JSON]"
Math.toString()      // "[object Math]"

/* 数组 */
[5, 8].toString()     // "5,8"
 
/* 函数 */
(function(){}).toString()    //"function (){}"

/* Date */
new Date().toString()        // "Tue Apr 18 2017 01:14:57 GMT+0800 (中国标准时间)""
```




#### valueOf 方法：
- ##### valueOf 方法默认返回对象的原始值，但一般来说对象是没有原始值的，在这种情况下就返回对象本身。

```
/* 包装对象返回原始值 */
new String().valueOf()    // ""
new Number().valueOf()    // 0
new Boolean().valueOf()   // false
"test".valueOf()    // "test"
(88).valueOf()      // 88
false.valueOf()     // false


/* Object、Arry、 Function 返回本身 */
({a:5}).valueOf()         // {a: 5}
([1, 8]).valueOf()        // [1, 8]
(function(){}).valueOf()  // function(){}

/* Date 返回毫秒数 */
new Date().valueOf()      // 1492447666731
```




### 2. 隐式类型转化

- #### ==如果有对象，则先将对象转化为原始值，== 对根据不同的情况再进行隐式转化。

- ##### "+" 运算符更喜欢字符串，所以优先转成字符串再运算。
- ##### ">"、"<"、">="、"<="、"=="、"!=" 等比较运算符更喜欢数字，所以优先转成数字再运算。


 
 
 
 
 
 
### 3. 类型转换思维导图
```
graph TB
A[将当前值转化成原始值]-->B{当前值是否是对象类型}


B-->|否|C(转化成 String 类型原始值)
B-->|否|D(转化成 Number 类型原始值)
B-->|否|E(转化成 Boolean 类型原始值)
B-->|是|F(当前值是对象)


C-->G(String方法 / ''+)
D-->H(Number方法 / parseInt方法 / parseFloat方法 / + / -0)
E-->I(Boolean方法 / !!双感叹号)





F-->J{是否是显式的转化对象}

J-->|是|K(显式转化成 String 类型原始值)
J-->|是|L(显式转化成 Number 类型原始值)
J-->|是|M(显式转化成 Boolean 类型原始值)
J-->|否|N{是否是 Date 类型对象}

K-->O(先调用当前对象的 toString 方法)
L-->P(先调用当前对象的 valueOf 方法)
M-->Q(调用 Boolean 方法)

O-->R(若没有 toStirng 方法或结果不是原始值则调用 valueOf 方法)
R-->S(最终结果转化为 string 类型原始值)
P-->T(若没有 valueOf 方法或结果不是原始值则调用 toStirng 方法)
T-->U(最终结果转化为 number 类型原始值)
Q-->V(所有的对象都返回 true)

N-->|否|W(先使用对象的 valueOf 方法)
N-->|是|X(先使用对象的 toString 方法)
W-->Y(没有该方法或没有返回原始值则使用 toString 方法)
X-->Z(没有该方法或没有返回原始值则使用 valueOf  方法)
Y-->结果步转化成特定类型的原始值
Z-->结果步转化成特定类型的原始值


```