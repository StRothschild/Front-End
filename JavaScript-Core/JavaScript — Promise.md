## Promise
#### 同时触发多个相同的 HTTP 请求。如何正确执行回调。1. promise 完美解决 2. 通过在请求中加特定参数比如时间戳，并将此参数原样返回。在回调中判断是否是要执行。

```Javascript
/* 链式调用 */
const promise = new Promise(function (resolve, reject) {
    // doSomething1
    resolve();
});
// 在 then 方法中 return 一个 Promise 对象就可以实现链式调用
promise.then(function () {
    return new Promise(function (resolve) {
        // doSomething2
        resolve();
    }
}).then(function() {
   // doSomething3
});
```
