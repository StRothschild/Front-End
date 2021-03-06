## localStorage
- ##### localStorage 作为客户端的持久化方案，一般由浏览器实现，并挂载在 Window 对象下。

- ##### 各个页面（域名）的 localStorage 是相互独立的。

- ##### 浏览器一般把 localStorage 存储在 UserData 中，比如 chrome 的存储地址是 "C:\Users\YourComputerName\AppData\Local\Google\Chrome\User Data\Default\Local Storage"。

- ##### localStorage 的存储格式是字符串

- ##### localStorage 不会被发送到服务器端

- ##### 在绝大部分浏览器中 localStorage 的空间是 4.98M

  ```javascript
  window.localStorage.setItem('foo', '');    // 设置
  window.localStorage.getItem('foo');        // 获取
  window.localStorage.removeItem('foo');     // 移除
  ```


---
## sessionStorage
- ##### sessionStorage 作为客户端的持久化方案，一般由浏览器实现，并挂载在 Window 对象下。

- ##### 在新标签或窗口打开一个页面会初始化一个新的 session, 这一点和 session cookie 是不同的。

- ##### 页面 session 在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面 session。





---
| - | localStorage | sessionStorage | cookie
---|---|---|---
有效期 | 永久 | tab 生命周期 | expires / 浏览器生命周期
存储位置 | 本地硬盘 | 本地硬盘 | 有 expires 的 cookie 存在本地硬盘中，没有的只存储在内存中
发送到服务器端 | 否 | 否 | 是
存储形式 | 字符串 | 字符串 | 字符串("key=value;")
挂载对象 | window.sessionStorage | window.sessionStorage | document.cookie
