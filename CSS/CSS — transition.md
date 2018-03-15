## transition

---
- #### 不支持 display 属性
##### transition 不支持 display 属性。所以在控制元素的 展示/隐藏 时不能用 display 作为 transition 的动画条件。

```css
  /* 通过 opacity 来作为 transition 的动画条件 */
  transition: opacity 0.5s ease;
  /* 但元素在 opacity 为 0 时元素对象依然存在于文档中，并且还保留了事件绑定，只能实现 transition 过度效果，但不能实现元素的 '消失'。
     此时可以用 visibiity 属性，他既可以被 transition 识别，也可以实现元素事件的解绑（但依然占据空间）
  */
  opacity: 0;
  visibility: hidden;      // 两者组合来替代 display: none
```
