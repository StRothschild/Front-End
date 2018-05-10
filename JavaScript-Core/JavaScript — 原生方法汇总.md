# JavaScript 原生对象中的属性和方法

## Array.prototype
- ### 会改变原数组的方法
1. #### array.push(*item.*..)
   ##### 原数组 ：末尾加入 *item*
   #####  返回 ：操作后的数组长度

2. #### array.pop()
   ##### 原数组 ：末尾 *item* 被移除
   #####  返回 ：被移除的*item* || undefined

3. #### array.unshift(*item*...)
   ##### 原数组 ：头部加入 *item*
   #####  返回 ：操作后的数组长度

4. #### array.shift()
   ##### 原数组 ：头部 *item* 被移除
   #####  返回 ：被移除的 item || undefined

5. #### array.reverse()
   ##### 原数组 : 元素排序反转
   ##### 返回 ： 将原数组反转后返回原数组

6. #### array.sort(*[func]*)
   ##### 默认情况下元素被==转化成字符串==，然后按照ASCII码进行排序。这样是==无法对一组数字进行正确的排序的==，例如，结果会是这样 [1, 116, 12, 18, 23, 34, 37, 50, 56, 8]。好在，你也可以通过传入自定义的排序 func 来排序。
   ##### 原数组 : 按规则被排序
   ##### 返回 ：排序后的新数组
   ##### 自定义比较函数会自动接收两个数组项，作为参数：
   ##### 1. 如果第一个参数应该排在前面，则返回一个负数。
   ##### 2. 如果第一个参数应该排在后面，则返回一个正数。
   ##### 3. 如果两个参数相等，则返回0。

   ```
   /*以下比较函数可以给一组数字升序排序*/
   array.sort(function(a, b){
      return a-b; 
   });

   /*如果同时有字符串和数字，则需要分4种情况处理:
   （num,num）(str,num) (num,str) (str,str)*/

   /*拓展一个 string.localeCompare(str) 方法， 用本地排序规则比较 string 和 str：
     如果 string 小于 str，则返回负数；
     如果 string 大于 str，则返回正数; 
     如果相等则返回 0.
   */
   ```


7. #### array.splice(*start, deleteCount, [item...]*)
   ##### 从原数组中的 ==*start*== 位置开始，删除 *deleteCount* 个元素, 然后替换上若干个 *item...* 元素。==如果 *item...* 为 undefined， 则功能类似于删除==。
   ##### 原数组 :  被替换元素
   ##### 返回 ：从原数组中被删除的那段元素。






---
- ### 不改变原数组的方法
1. #### array.join（*separator*）
   ##### 把原数组中的每一项item用给定的连接符 separator 拼成一个字符串。
   ##### 原数组 : 不变
   ##### 返回 ：产生的新字符串

   ```
   // 注意 array.join() 与 array.join("") 的区别
   [1,3,5].join()      // "1,3,5"
   [1,3,5].join("")    // "135"
   ```



2. #### ==array.concat（*item...*）==
   ##### 通过原数组的==浅复制==产生一个新数组，在新的数组里加入item。
   ##### 原数组 : 不变，但由于是==浅复制，所以元数组内的对象元素可能被新数组 的操作改变==。
   ##### 返回 ：产生的新数组




3. #### ==array.slice（*[start]*, *[end]*）==
   ##### 对array指定段 ==[*start*, end)== 的元素，进行==浅复制==。
   ##### 原数组 : 不变，但由于是==浅复制，所以元数组内的对象元素可能被新数组 的操作改变==。
   ##### 返回 ：从缘数组浅复制的新数组
   ##### 注意 ：
   ##### 1. ==*start* 默认为0，*end* 默认为array.length。==
   ##### 2. 如果 *start* 或 *end* 中任意一个为负数, 则会通过==和 array.length 相加的方式==来试图把它变回正数。 
   ##### 3. ==如果 *start* 大于 array.length 或者大于 *end* 都会返回一个新的空数组==。





---
## String（可视为==只读数组，== 数组中不改变自身的方法在字符串中都有）
1. #### ==string.split（*separator*, *[limit]*）==
   ##### ==与 Array 的 join 方法相反==，把字符串通过 *separator* 分隔成数组并返回。*separator* 可以是字符串，也可以是正则表达式。
   ##### *[limit]* 是可选的。它==控制了返回数组的长度。==

   ```
   // 注意 string.split() 与 string.split("") 的区别
   "1,3,5".split()      // ["1,3,5"]
   "1,3,5".split("")    // ["1", ",", "3", ",", "5"] 可以用于遍历字符串
   "1,3,5".split(",")   // ["1", "3", "5"]
   ```


2. #### ==string.concat（*str...*）==
   ##### 和 Array 的 concat 方法相似，把若干个字符串组合在一起返回一个新的字符串，可以用 “+” 代替，不常用。



3. #### ==string.slice（*[start]*, *[end]*）==
   ##### 与 Array 的 slice 方法类似。==用于获取 [*start*, *end*) 中间的字符串==。*start* 默认为0， *end* 默认为 string.length。==具体可以参考 Array.slice()。==





4. #### ==string.substring（*start*, *[end]*）==
   ##### 与 slice 方法一样，但是 substring 方法不能处理负数。==不建议使用。用 slice 方法替代。==


5. #### ==string.substr（*start*, *[length]*）==
   ##### 非EcmaScript标准化方法。==不建议使用。用 slice 方法替代。==


6. #### ==string.indexOf（*str*, *[pos]*）==
   ##### 获取 *str* 字符串在 string 中==第一次出现的位置==。 如果有 *pos* 则指定开始查找的位置。如果没有找到则返回 -1。


7. #### ==string.lastIndexOf（*str*, *[pos]*）==
   ##### 等同于 indexOf ,不过 lastIndexOf 是从末尾开始找。


8. #### ==string.search（*regexp*）==
   ##### 与 indexOf 方法类似，但它是通过 reg 正则表达式进行查找， 并且只返回第一个匹配的位置。


9. #### ==string.match（*regexp*）==
   ##### 通过 reg 正则表达式进行匹配并返回。结果与 regexp.exec(*string*) 一样。


10. #### ==string.replace（*searchValue*, *replaceValue*）==
    ##### 查找并替换字符串，并返回一个新的字符串。
    ##### *searchValue* 可以是字符串，也可以是正则表达式。
    ##### *replaceValue* 可以是字符串，也可以是函数。如果是函数，每一次匹配，都会调用一次。



11. #### ==string.charAt（*pos*）==
    ##### 获取 *pos* 位置的字符。

12. #### ==string.charCodeAt（*pos*）==
    ##### 获取 *pos* 位置的字符码位。

13. #### ==string.charCodeAt（*pos*）==
    ##### 获取 *pos* 位置的字符码位。

14. #### ==string.toLowerCase（）==
    ##### 返回一个新的全小写字符串。

15. #### ==string.toUpperCase（）==
    ##### 返回一个新的全大写字符串。



16. #### ==string.repeat（*number*）==
    ##### ES6 中新增的方法，可以返回一个新字符串，是由 number 个重复的 string 来构成的。





---
## Function
1. #### ==function.apply（*[thisArg]*, *[argArray]*）==
   ##### 指定 ==在 *thisArg* 的上下文环境中执行 function。==
   ##### 如果 *argArray* 不是数组或者 arguments 对象，那么将导致 TypeError。
   ##### 如果没有提供 thisArg 参数，那么 Global(浏览器中就是window) 对象会被用作thisArg。


2. #### ==function.call（*[thisArg]*, *[arg1,arg2...]*）==
   ##### function.call 的功能和 function.apply 一样。但传入参数的方式不一样。 前者是参数序列 ，后者将参数合入一个 array 中。


3. #### ==function.bind（*thisArg*, *[ arg1, arg2...]*）== 
   ##### EcmaScript5中的扩展方法。==IE6,7,8不支持。==

   ##### ==功能和 apply 、call 类似，参数和 call 一样==

   ##### ==apply 和 call 是立即执行，而bind 则是返回一个新的函数。==




---
## Number
1. #### ==number.toString（*[radix]*）==
   ##### 把数字转换为一个字符串。其中 *radix* 表示要转化成的进制，默认是10进制。


---
## Object
1. #### ==object.hasOwnProperty（*name*）==
   ##### 如果对象中包含 *name* 属性，则返回 true, 如果不包含或者是原型链上包含则会返回 false。





```
```
## toString、toLocaleString、valueOf 的区别

- ### toString
- ### toLocaleString
- ### valueOf
