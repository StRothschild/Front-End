## JavaScript 中的数组

> 数组的本质是 "以数字作为键名" 的对象。

#### 创建数组
```javascript
/* 以下方法创建了一个 length 为 10 的数组，这种方法可以用来预分配一个数组空间。
注意，此时数组中索引属性 "0"，"1" 等还未定义。 所以，可以认为该数组中是既不存在值也不存在索引的。 */
new Array(10)
```



---
#### 类数组
##### 1. 比较常见的类数组如下： arguments、dragEvent.DataTransfer.files、element.querySelectorAll 的返回值 都是类数组。

##### 2.  函数中的 arguments （变长实参列表）就是一个类数组，==类数组不是 Array，是 Object。它有数组的部分方法和属性，比如 length 属性，arguments 的 length 属性代表的就是传入的实参个数。==

##### 3. 将类数组转化为数组后，就可以使用数组的方法。

```javascript
/* 将类数组转化为数组 */
Array.prototype.slice.call(arguments) 
```


---
#### 内置方法
| 方法名 | 描述 | 使用方式 | 跳过此项 | 结束循环 | 改变原数组 | 返回值 |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| forEach | 遍历 | array.forEach(function(currentValue, index, arr), thisValue) | return | 不能 | 不能 | undefined
| map | 遍历 | array.map(function(currentValue, index, arr), thisValue) | return | 不能 | 不能 | 新数组
| some | 遍历 | array.some(function(currentValue, index, arr), thisValue) | return false | return true | 不能 | boolean
| every | 遍历 | array.every(function(currentValue, index, arr), thisValue) | return true | return false | 不能 | boolean