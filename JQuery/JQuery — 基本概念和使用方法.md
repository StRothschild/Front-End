## JQuery 的基本概念和使用方法

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
  let option = {
      url: '',
      data: '',
      timeout: ''
  };
  $.ajax(option)                                  // $.ajax 方法中传入一个对象
  $.get(url, [option], callbackFunction)         // $.get/$.post 方法中传入多个参数
  ```
