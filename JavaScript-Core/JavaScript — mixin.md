# mixin（混入）
### mixin 的概念
##### 1. JavaScript 是一种单继承的语言，无法在语法上实现多重继承。如果要模拟出类似于多重继承的效果，可以通过 mixin 来实现。

##### 2. mixin 的本质是通过对目标类的 prototype 进行拓展，达到外部功能混入（mixin）的效果。

##### 3. 目前市面上流行的框架和库大都已经实现了 mixin 功能，比如 jQuery 和 Underscore.js 的 extend(Target.prototype, obj) 方法。这些方法就是在 Target 类的原型对象中拓展了 obj 对象的属性和方法，从而实现 mixin。那么 Target 的实例对象就可以通过继承得到 obj 中的属性和方法。


---
### 实现 mixin 的简单示例
```javascript
function extend(destClass, srcClass) {
     var destProto = destClass.prototype;
     var srcProto  = srcClass.prototype;
     for (var method in srcProto) {
         if (!destProto[method]) {
             destProto[method] = srcProto[method];  // 本例中是浅拷贝，jQery 中的 extend 可以实现深拷贝
         }
     }
 }
```




---
### 利与弊

- ##### mixin 可以减少代码的重复，增加代码的复用。比如一个对象在需要使用其他对象中已定义的功能时，就可以使用 mixin 来复用代码。

- ##### 但是，mixin 也有值得商榷的一面。把方法注入到其他的对象里会造成 prototype 污染，也会增加本来定义的对象的不确定性。





---
### 参考
http://blog.csdn.net/future_challenger/article/details/51729937
