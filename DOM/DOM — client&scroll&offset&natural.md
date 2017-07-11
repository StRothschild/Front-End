# DOM 元素的 client / scroll / offset / natural
#### 1. offset 系列 （获取元素==包含 border 在内的实际占据的宽高==）
- ##### offsetWidth 和 offsetHeight
    ```
    width/height + padding + border
    ```
    ###### offset 代表了元素在页面中的实际占据的范围（不包括 margin）。无论 overflow 是什么值，元素在页面中占据多少 offset 的值就是多少。


- ##### offsetParent
    ###### offsetParent 会返回 ==距离当前元素最近的，并且是已进行过定位（relative、absolute 或 fixed）的祖先元素。如果没有找到或自身是 fixed 定位的元素，则返回 body 节点。== 在元素定位时所用的定位父元素就是这个值。


- ##### offsetTop 和 offsetLeft
    ###### 本元素 border 外侧到 offsetParent 元素的 border 内侧的距离。==在元素的 absolute 和 fixed 定位中通常使用这个属性来获取定位元素的 top 和 left 值。==


---
#### 2. client 系列（获取元素==不包含 border 在内的可视区域宽高，在overlow:visible时，和 offset 只差一个 border 和 滚动条==）
- ##### clientWidth 和 clientHeight
    ```
    width/height + padding - 滚动条（如果有，Chrome 默认 17px）
    /* client 和 offset 很像，可以相互转化 */
    offsetWidth - border - 滚动条 == clientWidth
    ```
    ###### client 是元素的可视区域，==如有 overflow 属性使元素出现了滚动条，则需将滚动条宽度剔除，因为滚动条区域不能显示。最重要的是它和 offset 的关系，同一个元素的 offset 去掉 border 和滚动条就是 client。==

- ##### clientLeft 和 clientTop
    ###### 本元素 padding 外侧到 margin 内侧的距离，也就是本元素的 border。



---
#### 3. scroll 系列（获取元素==在完整包含子元素时的宽高==）
- ##### scrollWidth 和 scrollHeight（整体元素的宽高）
    ```
    content（在完整包含了子元素时的宽高） + padding
    ```
    ###### 注意这里的 content 是指 width 和 height 完全由子元素撑开时的数据。

- ##### scrollLeft 和 scrollTop（可用于实现返回页面顶部的功能）
    ###### 可视区域与元素实际边界位置之间的距离。所以需==要元素的 scrollbar 有滚动之后，这个值才不会是 0。==







---
#### 4. natural 系列（H5新增，IE8 及其一下浏览器不支持，用于获取元素==原始的宽高==）
- ##### naturalWidth 和 naturalHeight
    ```
    imgElement.naturalWidth
    ```
    ###### 用于获取原始图片的宽高。



---
#### 5. 对比总结：
- ##### offset 定义的是元素==实际占据的宽高（包含 border ）。==

- ##### client 定义的是元素的==可视部分的宽高（不包含 border）。== 会受到 overflow 的影响，需要剔除滚动条（因为滚动条会遮盖部分 padding 或 content 的显示区域）；

- ##### scroll 定义的是元素==完整包含子元素情况下的宽高（不包含 border）。==

![image](http://pic002.cnblogs.com/images/2012/389001/2012090315221723.gif)


---
#### 6. 获取浏览器宽高：

```
// 获取浏览器窗口时作用对象都是 body，三种方法结果一样
document.body.offsetWidth/offsetHeight // 不包含 Dev Tool 占用的面积
document.body.clientWidth/offsetHeight // 不包含 Dev Tool 占用的面积
document.body.scrollWidth/offsetHeight // 不包含 Dev Tool 占用的面积
```


![image](http://pic002.cnblogs.com/images/2012/389001/2012090315221723.gif)

---
#### 参考
##### http://blog.csdn.net/vivianhope/article/details/46785251
