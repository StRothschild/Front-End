## jQuery 的基本概念和使用方法

> jQuery 中默认以美元符号 $ 来定义 jQuery 自身

- #### $.extend 方法
  > jQuery.extend([deep ], target, object1 [, objectN ]);

  ```javascript
  /* 将 bar 与 {} 进行合并，并返回这个合并后的对象 */
  let foo = $.extend({}, bar);            // foo !== bar

  /* 第一个属性是可选值，用来设置是否进行深度拷贝，默认值为 false */
  let foo = $.extend(true, [], bar);      // foo 数组中的对象  ！== bar 数组中的对象
  let foo = $.extend([], bar);            // foo 数组中的对象  === bar 数组中的对象
  ```




- #### jQuery DOM
  > 通过 jQuery 获取的元素 DOM 和 通过原生 js 方法（getElementBy）获取的 DOM 是不同的
  ```javascript
  // JQuery对象 转化为 原生JS对象
  $("#foo")[index]
  $("#foo").get[index]

  // 原生JS对象 转化为 JQuery对象
  $(document.getElementById("foo"));
  ```




- #### ajax & post & get
  > $.post 和 $.get 是 $.ajax 的简洁版，精简了一些设置，比如 timeout 只能在 $.ajax 方法中设置。
  ```javascript
  $.ajax(option)                                  // $.ajax 方法中传入一个对象
  $.get(url, [option], callbackFunction)          // $.get/$.post 方法中传入多个参数

  // 可选项
  let option = {
      url: '',
      data: '',
      timeout: ''
  };

  // 回调函数 
  beforeSend     //在发送请求之前调用，并且传入一个 XMLHttpRequest 作为参数。
  success        //当请求之后调用。传入返回后的数据，以及包含成功代码的字符串。
  error          //在请求出错时调用。传入 XMLHttpRequest 对象，描述错误类型的字符串以及一个异常对象（如果有的话）
  complete       //当请求完成之后调用这个函数，无论成功或失败。传入 XMLHttpRequest 对象，以及一个包含成功或错误代码的字符串。
  ```
