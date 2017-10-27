# JavaSCript 中的 Set & Map

### Set
- #### Set 是一组 key 的集合，但不存储 value。
- #### 在 Set 中，key 不能重复。
- #### Set 是一种顺序存储的无序集合。

```javascript
/* 创建并添加 value 到 set */
var s = new Set([1, 2, 3]);     // 方法一   Set {1, 2, 3}

var s = new Set([1]);
s.add(4);                       // 方法二   Set {1, 4}


/* 自动过滤重复的元素 */
var s = new Set([1, 2, 3, 3, '3']);    // Set {1, 2, 3, "3"}

var s = new Set([1, 2, 3, '3']);
set.add(2);                            // Set {1, 2, 3, "3"}


/* 删除 set 中的 value */
var s = new Set([1, 2, 3]);    // Set {1, 2, 3}
s.delete(3);                   // Set {1, 2}
```





---
### Map
- #### Map 是一组键值对的结构，具有极快的查找速度。
- #### 相对于 Array , Map 中的 key 是可以自定义的，而不是 Array 中默认的索引。
- #### Map 是一种顺序存储的无序集合。

```javascript
/* 创建并添加 value 到 Map */
// 方法一   Map {[1, 'Michael'], [2, 'Bob'], [3, 'Jasper']}
var m = new Map([[1, 'Michael'], [2, 'Bob'], [3, 'Tracy'], [3, 'Jasper']]);

// 方法二   Map {[1, 'Michael'], [2, 'Bob']}
var m = new Map([[1, 'Michael']]);
m.set('Bob', 58);


/* 判断是否存在某个键值对 */
m.has('Adam');        // false


/* 获取键值 */
m.get('Bob');         // 58


/* 获取键值 */
m.delete('Bob');     // 删除 key, 成功返回 true
```


####  Map 相对于 Object 的几个区别：

##### 1. Object 对象有原型， 也就是说他有默认的 key 值在对象上面， 除非我们使用 Object.create(null) 创建一个没有原型的对象

##### 2. 在 Object 对象中， 只能把 String 和 Symbol 作为 key 值， 但是在 Map 中，key 值可以是任何基本类型(String, Number, Boolean, undefined, NaN….)，或者对象(Map, Set, Object, Function , Symbol , null….)

##### 3. 通过 Map 中的 size 属性， 可以很方便地获取到 Map 长度， 要获取 Object 的长度， 只能用别的方法，比如 Object.getOwnPrototypeNames(obj).length

##### 4. Map 对象实例中数据的排序是根据用户 push 的顺序进行排序的， 而 Object 实例中 value 的顺序就是有些规律了 (他们会先排数字开头的 key 值，然后才是字符串开头的 key 值)
  ```
    /* Object 的属性会按一定顺序自动排列 */
    var obj = {};
    obj.str = "string";
    obj.[5] = "number5";
    obj.[1] = "number1";

    则 obj 的输出属性结果是：
    {
      1 : "number1"
      5 : "number5"
      str : "string"
    }
  ```




---
### 方法对比

方法 | Array | Set | Map
---|---|---|---
增 | push / unshift | add | set
删 | pot / shift | delete / clear | delete / clear
改 | [] / . |  | set
查 | [] / . |  | get
存在 | indexOf | has | has
遍历 | forEach / for...of | forEach / for...of | forEach / for...of

---
### 总结

类型 | 键名（key） | 键值（value） | 键名称有重复 | 键值有重复 | 是否有序
---|---|---|---|---|---
Object | String | value | 不可 | 可 | key有序，先数字后文本的顺序
Map | key | value | 不可 | 不可 | key无序（按添加的先后来排列）
Array | 索引 | value | 不可 | 可 | value无序，但可以通过 sort 方法变成有序
Set | value | value | 不可 | 不可，因为 Set 中的 key 就是 value | value无序





---
http://blog.csdn.net/downing114/article/details/51602457
