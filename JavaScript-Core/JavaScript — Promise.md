## Promise


```javascript
/* 链式调用 */
const promise = new Promise(function (resolve) {
    // doSomething1
    resolve();
});
// then 方法中 return 一个 promise 就可以实现链式调用
promise.then(function () {
    return new Promise(function (resolve) {
        // doSomething2
        resolve();
    }
}).then(function() {
   // doSomething3
});
```
