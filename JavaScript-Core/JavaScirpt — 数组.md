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
| map | 遍历 | array.map(function(currentValue, index, arr), thisValue) | return | 不能 | 不能 | 返回长度和原数组相同的新数组
| filter | 遍历后生成新数组 | array.filter(function(currentValue, index, arr), thisValue) | return | 不能 | 不能 | 返回符合条件的item组成的新数组
| some | 是否存在符合条件的值 | array.some(function(currentValue, index, arr), thisValue) | return false | return true | 不能 | boolean
| every | 是否全部符合条件 | array.every(function(currentValue, index, arr), thisValue) | return true | return false | 不能 | boolean
| find | 第一个符合条件的值 | array.find(function(currentValue, index, arr), thisValue) | 不能 | 不能 | 不能 | 第一个为true的item,如果没有返回undefined
| findIndex | 第一个符合条件的索引 | array.findIndex(function(currentValue, index, arr), thisValue) | 不能 | 不能 | 不能 | 第一个为true的索引,如果没有返回 -1
| splice | 删除/添加/替换 | array.splice(index,howmany,item1,.....,itemX) | 不能 | 不能 | 能 | 返回被删除的item组成的新数组
| slice | 根据入参返回一个新数组 | array.slice(start, end) | 不能 | 不能 | 不能 | 返回start开始，到end结束的新数组