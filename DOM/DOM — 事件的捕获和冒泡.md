# 事件的捕获和冒泡

## 1. 事件的两种模型
- #### DOM2级事件流包括三个阶段：==事件捕获阶段、处于目标阶段和事件冒泡阶段。==

- #### 根据事件流的不同阶段，对于事件的监听有两种不同的类型：==事件捕获（event capture）和事件冒泡（event bubbling）。==


- #### ==捕获事件先于冒泡事件，== 如下图所示：
![事件模型图](https://github.com/StRothschild/DOM/blob/master/resource/DOM%20%E2%80%94%20%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B%E5%9B%BE.jpg?raw=true)


- #### ==IE8 及以下版本的浏览器只支持冒泡模型，而 W3C 标准浏览器（IE9 及以上）同时支持捕获和冒泡，为了兼容 IE8 一般统一在事件冒泡阶段绑定监听。==

- #### ==IE8 及以下版本的浏览器无法在回调函数中传入 event 对象，只能直接获取 window.event。== FireFox 只支持回调函数参数传入 event 对象。其他 W3C 标准浏览器两种方式都支持。


- #### DOM0 级的事件，==只会在冒泡阶段被执行。==

- #### DOM0 级的事件处理是==给一个事件的处理程序属性赋予一个处理函数==，比如 element.onclick；或 onclick="alert();"。

- #### DOM0 级函数（<div onclick="myClick(event)"）的作用域是==全局作用域（window）==。而 DOM2 级事件（attachEvent、removeEventListener、element.onclick）中的处理函数则处于==事件绑定的元素。==

- #### 在 DOM2 级事件处理时，既可以添加事件，还可以移除事件。==还允许给元素添加多个事件回调函数。==

- #### ==DOM2 级事件处理完全解耦了表现和逻辑。==


```
```
## 2. 捕获

#### 由于 IE8 及以下版本的浏览器不支持事件捕获，所以要绑定事件捕获阶段的事件，必须使用 W3C 标准的浏览器和接口 addEventListener() 和 removeEventListener()。由于这两个接口==默认都是在冒泡阶段执行，所以需要把接口的第三个参数显式的设置为 true，才能在事件捕获阶段上绑定。==

```
/* 第三个参数代表了是否在事件的捕获阶段执行回调函数，默认为 false（冒泡），需要手动设置为 true */
addEventListener(eventName, callbackFn, useCapture);
removeEventListener(eventName, callbackFn, useCapture);


/* 第二个参数最好用回调函数的名称（引用）。如果直接写匿名函数，则用 removeEventListner 删除监听是
无法生效的，因为两个接口用的不是同一个函数（可以理解为两个接口的第二个参数不同）*/
element.addEventListener("click", handlerFn, true);
element.removeEventListener("click", handlerFn, true);
```





```
```
## 3. 冒泡

- #### 由于 IE8 及以下版本的浏览器不支持 DOM2 级事件流中的事件捕获，所以==在 IE8 及以下版本的浏览器的事件监听都是针对冒泡阶段的。==

- #### IE8 及以下版本的浏览器的事件冒泡监听方法
    ##### 在 IE8 及以下版本的浏览器中==分别定义了 attachEvent() 和 detachEvent() 方法来挂载和移除事件。==
```
/* IE8 及以下版本的浏览器是用 attachEvent 绑定冒泡事件的。特别要注意，若同一个事件中绑定了多个
函数，那么这些函数的触发顺序是和绑定顺序相反的。所以，本例中的函数 “callbackFn” 会先执行，然后才是
第一个监听器中的匿名函数 */
element.attachEvent("onclick", function(){
    // 注意！attachEvent/detachEvent 中的事件名要加上"on"前缀，
    例如（"onload"、"onclick"、"onmousemove"）
    // window.event 由于 IE8 及以下版本无法通过参数传入事件对象，但可以直接获取 windwo.event 对象
    // windwow.event.srcElemente 相当于 W3C中的 event.target
});
element.attachEvent("onclick", callbackFn);


/* 注意，绑定了匿名函数的监听是删除不了的，所以绑定的时候就最好用函数名（引用）绑定 */
element.detachEvent("onclick", callbackFn);
```


- #### W3C 标准浏览器的事件冒泡监听方法
```
/* 第三个参数代表了是否在事件的捕获阶段执行回调函数，默认为 false（冒泡）*/
addEventListener(eventName, callbackFn, useCapture);
removeEventListener(eventName, callbackFn, useCapture);


/* 可以同时给一个元素添加多个事件监听，按事件添加的先后顺执行（与 IE 接口不同） */
element.addEventListener("click", function(event) {
    // event 是会被默认传入的事件对象
    // do somthing
});
element.addEventListener("click", handlerFn);



/* 为兼容不同浏览器，添加事件监听的方法 */
function addEvent(type, element, fun) {
    // 判断是否有 addEventListener 方法
    if (element.addEventListener) {
        element.addEventListener(type, fun, false);
    }
    // 判断是否有 attachEvent 方法
    else if(element.attachEvent){
        element.attachEvent('on' + type, fun);
    }
    // 如果都没有，则使用 DOM0 级方法
    else{
        element['on' + type] = fun;
    }
}
```



- #### 所有浏览器的事件冒泡监听方法

```
/* 以下方法兼容所有浏览器，但是它只能捕捉冒泡事件而且每个元素只能绑定一个事件，后面的同元素事件会覆盖前面的事件 */
element.'on' + type = function() {
    // do something
}
element.onload = function() {
    // do something
};
```




![事件原型图](http://files.jb51.net/file_images/article/201310/20131028160201571.jpg)




```
```
## 4. 事件代理
#### 事件代理是利用事件冒泡模型的经典案例。==当需要在多个子孙元素中绑定类似事件时，就可以通过事件代理，简化绑定，避免了在每个目标元素中都做一次类似的绑定的冗余。==

```
/* 在祖先元素中绑定统一处理的代理事件，然后通过默认传入的 event 参数判断具体是哪个子元素的
事件冒泡并处理 */
ancestorElement.addEventListener('click', function(event){
    // window.event.srcElement  IE8 及以下版本获取冒泡源元素的方法
    // event.target             W3C 通过回调函数中的参数获取冒泡源元素的方法
}, false);
```





```
```
## 5. 默认不冒泡事件
#### load、unload、focus、blur（失去焦点）、mouseenter、mouseleave





```
```
## 6. 阻止冒泡

#### 在 W3C 标准中 stopPropagation 是事件对象（Event）的一个方法，==可以阻止目标元素的冒泡事件，但是会不阻止默认行为。==

```
/* IE8 及以下版本阻止冒泡。使用 window.event 对象 */
window.event.cancelBubble = true;

/* W3C 标准停止冒泡。 除 FireFox 外，别的W3C浏览器也可以直接使用 window.event，
但最好通过监听回调函数获得 event 对象，兼容 FireFox */
event.stopPropagation();
```



```
```
## 7. 阻止默认行为

#### 部分元素的默认行为
```html
<a href="xxx">                 // 如果有 href 属性，则会默认跳转
<input type="text">            // 在 form 中存在 submit 或 button 元素时回车会默认提交表单元素
<input type="submit/reset">    // 默认提交/重置
<button type="submit">         // 默认提交
```


#### 阻止默认行为
```javascript
/* IE8 及以下版本阻止默认行为。使用 window.event 对象*/
window.event.returnValue = false;

/* W3C 标准阻止默认行为。 除 FireFox 外，别的W3C浏览器也可以直接使用 window.event，
但最好通过监听回调函数获得 event 对象，兼容 FireFox */
event.preventDefault();
```



```
```
## 8. return false

- #### 原生 JavaScript 中的 return false 只会阻止默认行为，不会停止冒泡。

- #### 如果用 jQuery 绑定事件的话，回调函数返回 false 的话既能阻止默认行为又可以停止冒泡。











```
```
## 9. 获取事件冒泡路径上所有元素的方法
  ```javascript
  ancestorElement.addEventListener('click', function(event){
    // 获取源元素
    let target = event.target;
    // 打印元素
    console.log(target);

    // 判断是到达本当前元素
    while (target != event.currentTarget) {
        // 如果未到达当前元素，则通过获取下一个元素
        target = target.parentElement;
        // 打印元素
        console.log(target);
    }
  });
  ```





```
```
## 参考
http://www.cnblogs.com/blackwood/archive/2013/03/14/2959195.html

https://segmentfault.com/a/1190000000749838

http://blog.csdn.net/psp0001060/article/details/52267078

http://www.cnblogs.com/holyson/p/3914406.html

http://caibaojian.com/javascript-stoppropagation-preventdefault.html

https://segmentfault.com/a/1190000000352393#articleHeader13






http://www.cnblogs.com/yangxiaoguai132/p/5217007.html
