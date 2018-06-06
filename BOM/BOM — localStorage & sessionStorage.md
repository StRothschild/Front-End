## localStorage
##### localStorage 作为客户端的持久化方案，一般由浏览器实现，并挂载在 Window 对象下。
##### 浏览器一般把 localStorage 存储在 UserData 中，比如 chrome 的存储地址是 "C:\Users\YourComputerName\AppData\Local\Google\Chrome\User Data\Default\Local Storage"。

##### localStorage 的存储格式是字符串

```javascript
window.localStorage.setItem('foo', '');    // 设置
window.localStorage.getItem('foo');        // 获取
window.localStorage.removeItem('foo');     // 移除
```
