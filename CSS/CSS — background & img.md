## background

- #### background-image:
  ##### 设置了背景图片, url 中的地址可以加引号，也可以不加。背景可以加多张图片，用逗号隔开，==注意前面定义的图片回覆盖后面定义的图片。==
  ```css
  background-image: url('/test.jpg');   // 默认为 none
  ```


---
- #### background-repeat
    ##### 设置图片是否重复，默认值为 repeat。
    ```css
    background-repeat：no-repeat;     // 还有可选值 repeat-x、repeat-y
    ```



---
- #### background-size
    ##### 属性设置了背景的大小，默认值为 auto, 表示图片原大小。
    ```css
    background-size: 80px 60px;          // 可以设置指定值，此时容易图片发生形变
    background-size: 80px;               // 只设为一个值，则第二个值为 auto
    background-size: cover;              // 按比例放大，直到正好可以覆盖元素
    ```


---
- #### background-position
    ##### 属性设置了背景图像的起始位置，默认值：0% 0%。
    ```css
    background-position: 0% 0%;          // 默认值
    background-position: 0px 0px;        // 分别代表距离元素 padding 左上角的 top 和 left 的距离
    background-position: top center;     // 可选值有 top/center/bottom    left/center/right  第二个参数的默认值是 center
    ```



---
- #### background-color
    ##### 设置背景颜色。默认 rgba(0, 0, 0, 0)
    ```css
    background-color：rgba(0, 0, 0, 0);    // 还有可选值 transparent、rgba、#ddd 、red
    ```


---
- ####  background-attachment
    ##### 属性设置背景图像是否固定或者随着页面的其余部分滚动。当为默认值 scroll 时，背景会随着元素的滚动而滚动；当为 fixed 时，背景会在原地固定，而不会随着元素的滚动而滚动
    ```css
    background-attachment：scroll;    // 还有可选值 fixed
    ```



---
- #### background-origin
    ##### ==设置了背景图片在盒子模型中的起始位置==，默认是 padding-box，可选项有 border-box \ padding-box \ content-box
    ```css
    background-origin: padding-box;   // 此属性会影响 background-color、 background-position 等属性的起始位置
    ```


---
- #### background-clip
    ##### 设置了背景在盒子模型中显示的部分，默认是 padding-box，可选项有 border-box \ padding-box \     content-box。==其中一个应用就是在避免显示 padding 区域的背景色时，可以设置 background-clip: content-box。==
    ```css
    background-clip: padding-box;   // 此属性会影响背景的显示区域，与 background-origin 属性无关
    ```




```
```
## \<img>
- ##### \<img> 与 background 属性不同，它是一个 HTML 标签。\<img> 标签有两个必需的属性，src 和 alt。另外还有 width 和 height, 这两个属性和 background-size 很像，即设置图片的大小。这里需要注意的是，对于 background 属性来说，图片能显示的大小还需要通过父元素的大小来判断。

- ##### 由于 html 标签会优先解析，所以重要的图片放在 \<img> 中。background 是 css 属性，所以可以用于一些优先级不高的图片。

- ##### \<img> 标签有一个 alt 属性，而且这个属性在w3c标准中，要求必须有，这样做的优点还是很多的。比如，加载图片失败时，可以用文字提示图片内容。另外，alt 属性有利于提高页面的 SEO。


```html
<img src="/test.jpg" alt="在图片未正常加载的情况下,可用此处文字替代" width=auto height=auto>
```








```
```
## 总结对比
-| background | \<img>
---|---|---
性质 | CSS 属性 | HTML 标签
图片地址 | url() | src=""
图片大小 | background-size | width / height
图片显示的大小 | 取决于父元素盒模型 | width / height
撑开元素 | | 可
alt 属性 |  | 有
