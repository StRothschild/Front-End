# DOM 事件
#### 1. 事件的特点
##### ==在同一个事件中，所有事件监听得到的都是同一个 event 对象==。这个 event 对象保存着事件的当前状态，而且只在事件触发过程中才存在。==在 IE8 及以下版本中，没有 event 对象，需要使用全局对象下的 window.event 对象。==



---
#### 2. 事件的触发
##### ==事件的触发可以分为浏览器触发和代码模拟触发==。浏览器触发事件就是交互过程中所触发的事件，而代码模拟则是通过 JavaScript 模拟产生事件，并在某个元素上触发该事件。

```
/* 使用 dispatchEvent 方法可以模拟事件的触发 */
element.addEventListner("click", function(){});  // 在 element 元素上监听 click 类型的事件
var event = new Event("click",{bubbles:true,cancelable:true}); // 新增一个 click 类型的事件对象
element.dispatchEvent(event)    // 在 element 元素上触发这个 click 类型的事件

/* event 对象中的属性 isTrusted 属性可以区分是浏览器触发的事件，还是代码模拟事件 */
event.isTrusted == true;    // 浏览器事件
event.isTrusted == false;   // 代码模拟事件
```




---
#### 3. 事件对象（Event）的属性
- ##### type : 事件类型，比如 "load"、click"、"dblclick"
- ##### eventPhase : 当前事件所处的状态（0:没有事件，1：捕获，2：目标节点，3：冒泡）
- ##### isTrusted ：是否是浏览器触发的事件，false 代表是代码模拟的事件
- ##### returnValue ：是否执行默认事件，默认为true。e.returnValue = false; 相当于 e.preventDefault();
- ##### bubbles ：表示事件对象是否冒泡，默认为false，但大部分浏览器事件会设成 true。
- ##### cancelable ：表示事件是否可以被取消，默认为false，但大部分浏览器事件会设成 true。

- ##### currentTarget : 当前事件所在的节点对象
- ##### target : 事件的目标节点对象
- ##### srcElement ：在 IE8 及之前的版本中没有 target，而是 srcElement

- ##### path ：数组，存储了从事件目标对象到 window 对象之间的所有 DOM 对象

- ##### preventDefault()：取消浏览器对当前事件的默认行为
- ##### stopPropagation()：阻止事件在DOM中继续传播
- ##### stopImmediatePropagation：阻止同一事件被元素上的其他监听函数调用





---
#### 4. 鼠标事件对象（MouseEvent）
##### 1. click事件：单击鼠标
##### 2. dblclick事件: 双击鼠标
##### 3. contextmenu事件：右击鼠标

##### 4. mousedown事件：按下鼠标键时触发
##### 5. mouseup事件：释放按下的鼠标键时触发

```
/* mousedown、mouseup 和 click 事件的触发顺序 */
先是 mousedown 然后是 mouseup，最后才是 click
```

##### 6. mouseenter事件：鼠标进入一个节点时触发，==不会冒泡==
##### 7. mouseleave事件：鼠标离开一个节点时触发，==不会冒泡==

##### 8. mouseover事件：鼠标进入一个节点时触发，==会冒泡，造成进入子元素也触发父元素事件的现象==
##### 9. mouseout事件：鼠标离开一个节点时触发，==会冒泡，造成进入子元素也触发父元素事件的现象==


##### 10. mousemove事件：鼠标在一个节点内部移动时每隔一段时间就会触发该事件


- ##### x/y：相对于当前==浏览器窗口左上角==的坐标距离
- ##### clientX/Y ：相对于==浏览器窗口左上角==的坐标距离，==与页面是否滚动无关==
- ##### offsetX/Y：相对于==事件源元素==对象的坐标距离
- ##### pageX/Y ：相对于==文档根元素==的坐标距离，==页面的滚动将会影响这个值==
- ##### screenX/Y ：相对于==显示器左上角==的坐标距离


![鼠标点击时的XY](https://github.com/StRothschild/DOM/blob/master/resource/DOM%20%E2%80%94%20%E9%BC%A0%E6%A0%87%E7%82%B9%E5%87%BB%E6%97%B6%E7%9A%84XY.png?raw=true)


- ##### relatedTarget：返回事件的次要相关节点，具体如下图

![related 属性](https://github.com/StRothschild/DOM/blob/master/resource/DOM%20%E2%80%94%20relatedTarget%20%E5%B1%9E%E6%80%A7.png?raw=true)




---
#### 5. 拖拽事件对象
##### 拖拉的对象可以包括 Element 节点、图片、链接、选中的文字等等。其中，图片、链接、选中的文字都是可以直接拖拉的，但是 ==Element 节点默认不可以拖拉==。为了让Element节点可拖拉，可以==将该节点的 draggable 属性设为 true。==

- ##### dragstart事件：拖拉开始时在==被拖拉的节点==上触发。通常在这个事件中指定拖拉的数据。
- ##### dragend事件：拖拉结束时（释放鼠标键或按下escape键）触发，==与 dragStart 事件在同一个节点上==。不管拖拉是否跨窗口，或者中途被取消。

- ##### dragenter事件：拖拽元素进入当前节点范围时，在当前节点上触发，==事件会冒泡，造成进入子元素也触发父元素事件的现象==
- ##### dragleave事件：拖拽元素离开当前节点范围时，在当前节点上触发，==事件会冒泡，造成进入子元素也触发父元素事件的现象==


- ##### dragover事件：拖拽元素在当前节点上方时，在当前节点上持续触发，每隔35毫秒触发一次。==一般在这个事件上元素的默认事件，使元素成为可拖放的元素。==

- ##### drag事件：拖拽期间在被拖拽元素上连续触发
- ##### drop事件：被拖拽的节点释放到目标节点时，在目标节点上触发。注意，==如果目标节点不允许drop，即使在该节点上方松开鼠标键，也不会触发该事件。drop事件需要阻止默认事件，因为如果是系统文件会变成默认打开文件。==


- ##### dataTransfer 对象：==在拖拽事件中都存在这个对象，里面保存了拖拽元素的信息==，比如 files 属性里面保存了拖拽元素的所有文件数据。



- ##### 关于拖拉事件，有以下几点注意事项：
    ###### 1. 拖放事件的回调函数==默认会冒泡，而且没有 relatedTarget 属性==。所以尽量要在拖拽元素的事件上阻止默认事件和阻止冒泡。

    ###### 2. 拖放过程只触发以上这些拖放事件，尽管鼠标在移动，但是==鼠标事件不会触发。==

    ###### 3. 将文件从操作系统拖拉进浏览器，不会触发dragStart和dragend事件。



---
#### 6. 键盘事件对象
- ##### keydown：按下键盘时触发该事件
- ##### keypress：只要按下的键并非Ctrl、Alt、Shift和Meta，就接着触发keypress事件
- ##### keyup：松开键盘时触发该事件


key属性返回一个字符串，表示按下的键名。如果同时按下一个控制键和一个符号键，则返回符号键的键名。比如，按下Ctrl+a，则返回a。如果无法识别键名，则返回字符串Unidentified。

主要功能键的键名（不同的浏览器可能有差异）：Backspace，Tab，Enter，Shift，Control，Alt，CapsLock，CapsLock，Esc，Spacebar，PageUp，PageDown，End，Home，Left，Right，Up，Down，PrintScreen，Insert，Del，Win，F1～F12，NumLock，Scroll等。

charCode属性返回一个数值，表示keypress事件按键的Unicode值，keydown和keyup事件不提供这个属性。注意，该属性已经从标准移除，虽然浏览器还支持，但应该尽量不使用。





---
#### 6. DOM 对象的事件句柄
##### onclick	当用户点击某个对象时调用的事件句柄
##### ondblclick	当用户双击某个对象时调用的事件句柄

##### onsubmit	确认按钮被点击
##### onreset	重置按钮被点击

##### onmousedown	鼠标按钮被按下
##### onmousemove	鼠标被移动
##### onmouseout	鼠标从某元素移开
##### onmouseover	鼠标移到某元素之上
##### onmouseup	    鼠标按键被松开

##### onkeydown	某个键盘按键被按下
##### onkeypress 某个键盘按键被按下并松开
##### onkeyup	某个键盘按键被松开

##### onfocus	元素获得焦点
##### onblur	元素失去焦点

##### onchange	域的内容被改变
##### onresize	窗口或框架被重新调整大小
##### onselect	文本被选中

##### onload	一张页面或一幅图像完成加载
##### onabort	图像的加载被中断
##### onerror	在加载文档或图像时发生错误
##### onunload  用户退出页面
