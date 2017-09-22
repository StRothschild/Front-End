# JavaScript 中的迭代
- ## 遍历非数组对象（Object）

#### 1. for...in
##### for...in 语句可以用于返回该==对象所有的可枚举属性和方法，包括原型链上的可枚举属性和方法。==
```
for (var propertyName in object) {
    // do somethin
    object.hasOwnProperty(properyName) // 可以判读是否是自有属性，还是原型链上的属性
}
```

#### Tips:
##### 由于数组也是对象，所以该方法==也可以遍历数组==。当遍历数组时，==会把数组的下标转化为字符串作为键名，== 如“0”、“2”等等。

##### 在遍历对象（包括数组）时，==由于遍历对象是属性，所以遍历的结果也是按属性名（key）的次序排列的，而不是按值（value）排序的。==

##### 在某些状况下，可能会以随机顺序循环对象（数组）。


---
#### 2. Object.keys() （ES5新增，IE8 及以下版本不支持该方法）
##### Object.keys() 方法可以==以数组的形式==返回自身的所有==可枚举的==属性和方法的名称，==但不会返回原型链上的属性和方法。==

##### 返回的数组也是==按属性名排序的。==

```
Object.keys(object);
/* 例如 */
Object.keys({a: 54, b: 5, 0: "sdg", 1: 548}) // 返回 ["0", "1", "a", "b"]
```



---
#### 3. Object.getOwnPropertyNames() （ES5新增，IE8 及以下版本不支持该方法）
##### 和 Object.keys() 方法类似，getOwnPropertyNames()可以==以数组的形式==返回自身的所有属性和方法的名称，但不会返回原型链上的属性和方法。==不同的是，getOwnPropertyNames() 可以返回不可枚举的属性。==

##### 返回的数组也是==按属性名排序的。==


```
Object.getOwnPropertyNames(object);
/* 例如 */
Object.getOwnPropertyNames({a: 54, b: 5, 0: "sdg", 1: 548}) // 返回 ["0", "1", "a", "b"]
Object.getOwnPropertyNames([1,2,3]) // 返回 ["0", "1", "2", "length"] length 为不可枚举属性
```


---
遍历属性方法对比 | 自有 + 可枚举属性 | 自有 + 不可枚举属性 | 继承 + 可枚举属性 | 继承 + 不可枚举属性
---|---|---|---|---
in  | 有 | 有 | 有 | 有
for...in  | 有 |  | 有 |
Object.getOwnPropertyNames(obj) | 有 | 有 | |
Object.keys(obj) | 有 | | |






```
```
- ## 遍历数组（Array）
### 1. for 语句
##### for 语句是遍历数组最通用的方法，但要注意 for 中用 var 定义的变量在循环结束之后依然存在于函数作用域中。
```
/* 避免使用以下方式，因为每次都要计算数组长度，效率低 */
for(var i=0; i<array.length; i++){}

/* 使用以下方式，在初始化时定义数组长度 */
for(var i=0,len=array.length; i<len; i++){}
```



---
### 2. array.forEach （ES5新增，IE8 及以下版本不支持该方法）
##### 在 forEach 语句中，==break 命令和 return 命令都无效==，无法中途跳出 forEach 循环。
```
array.forEach(function (value, index, array) {
    // do something
    // no return
});

```


---
### 3. array.map（ES5新增，IE8 及以下版本不支持该方法）
##### 遍历数组中的元素，每个元素都执行回调函数，回调函数的返回值作为新数组的元素。==map 方法执行结束后得到的就是一个和原始数组长度一样的新数组。==
##### 和 forEach 语句类似，==break 命令和 return 命令都无效==，无法中途跳出 map 循环。
```
var newArray = array.map(function (value, index, array) {
    // do something
    return something;  // 默认返回 undefined
});
```


---
### 4. array.filter（ES5新增，IE8 及以下版本不支持该方法）
##### 遍历数组的每一项，调用回调函数并返回一个布尔值，方法执行结束后，所有返回 true 的数组元素会组成一个新的数组。
##### 和 forEach 语句类似，==break 命令和 return 命令都无效==，无法中途跳出 filter 循环。
```
array.filter(function (value, index, array) {
    // do something
    return true/false; // 默认返回 false
});
```




---
### 5. array.every（ES5新增，IE8 及以下版本不支持该方法）
##### 遍历数组的每一项，调用回调函数并返回一个布尔值，方法执行结束后。==如果每个元素的回调函数返回值都是 true，则返回 true，否则返回 false。==
##### 和 forEach 语句类似，==break 命令和 return 命令都无效==，无法中途跳 every 出循环。
```
array.every(function (value, index, array) {
    // do something
    return true/false; // 默认返回 false
});
```


---
### 6. array.some（ES5新增，IE8 及以下版本不支持该方法）
##### 和 every 方法很像，some  方法也会遍历数组的每一项，调用回调函数并返回一个布尔值，方法执行结束后。==只要有一个元素的回调函数返回值是 true，则返回 true，只有所有的返回值为 false 才返回 false。==
##### 和 forEach 语句类似，==break 命令和 return 命令都无效==，无法中途跳 every 出循环。
```
array.some(function (value, index, array) {
    // do something
    return true/false; // 默认返回 false
});
```


---
### 7. for...of （ES6新增，Edge 以下不支持该方法）
##### 提供了遍历==所有类数组结构数据（Array、Set、Map、String）==的统一操作接口。还可以与 break、continue 和 return 配合使用。
```
for (let value of Array/Map/Set/String) {
    // do something
}
```



---
### 总结
适用情况 | for | for...in | forEach(不能 break/continue/return) | for...of
---|---|---|---|---
Object |  | [x] |  | 
Array | [x] | 遍历所有的可枚举属性,用在数组上不合适 | [x] | [x]
Set | | | [x] | [x]
Map | | | [x] | [x]
