## JavaScript 中的数组

#### 数组的本质是 "以数字作为键名" 的对象。
```javascript
/* 以下方法创建了一个 length为10的数组，这种方法可以用来预分配一个数组空间。
注意，数组中索引属性“0”，“1”等还未定义。 所以，可以认为该数组中是既不存在值也不存在索引的。*/
new Array(10)
```

该方法创建了一个长度（length)为10的数组，当预先知道所需的元素个数时，这种方法可以用来预分配一个数组空间。注意，在数组中没有存储值，并且索引属性“0”，“1”等还未定义。


### 类数组
#### 比较常见的类数组如下： arguments、dragEvent.DataTransfer.files、element.querySelectorAll 的返回值 都是类数组。

#### 将类数组转化为数组后，就可以使用数组的方法。

```javascript
Array.prototype.slice.call(arguments) 
```


#### 函数中的 arguments （变长实参列表）就是一个类数组，==类数组不是 Array，是 Object。它有数组的部分方法和属性，比如 length，arguments 的 length 代表的就是传入的实参个数。==
