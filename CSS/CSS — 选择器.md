# CSS 选择器
### 1. 传统 CSS 选择器
- #### 全部选择器
  ```css
  * {
      margin: 0;
    }
  ```

- #### 标签选择器
  ```css
  p {
      margin: 0;
   }
  ```

- #### id 选择器
  ```css
  #id {
      margin: 0;
   }
  ```

- #### 类型选择器
  ```css
  .className {
      margin: 0;
  }
  ```

- #### 属性选择器
  ```css
  a[src] {
      margin: 0;
  }

  a[src="表示src的值，需要与引号中的内容相同"]
  a[src~="表示src的值，需要与引号中的内容相同，适用于 src 有多个值并且以空格隔开的情况"]
  a[src*="表示src的值，需要包含引号中的内容"]
  a[src^="表示src的值，需要以引号中的内容作为起始"]
  a[src$="表示src的值，需要以引号中的内容作为结束"]
  ```

- #### 后代元素选择器
  ```css
  div a {
      margin: 0;
  }
  ```

- #### 子元素选择器
  ```css
  div > a {
      margin: 0;
  }
  ```

- #### 相邻兄弟元素选择器
  ```css
  div + a {
      margin: 0;
  }
  ```

- #### 后续兄弟元素选择器
  ```css
  div ~ a {
      margin: 0;
  }
  ```

- #### 伪类选择器
    ```css
    a:hover {
        margin: 0;
    }
    ```

- #### 伪元素选择器
  ```css
  a:after / a::after {
      margin: 0;
  }
  ```



---
### 2. CSS3 选择器
- #### 第一个子元素选择器
  ```css
  li:first-child() {
      margin: 0;
  }
  ```

- #### 最后一个子元素选择器
  ```css
  li:last-child() {
      margin: 0;
  }
  ```

- #### 顺数子元素选择器
  ```css
  li:nth-child(1) {       // 顺数第 1 个子元素
      margin: 0;
  }
  li:nth-child(n)         // n 从 0 开始逐个增加
  ```

- #### 倒数子元素选择器
  ```css
  li:nth-last-child(1) {  // 倒数第 1 个子元素
      margin: 0;
  }
  li:nth-last-child(n)    // n 从 0 开始逐个增加
  ```

- #### 顺数特定类型子元素选择器
  ```css
  li:nth-of-type(1) {        // 顺数第 1 个 li 类型的子元素
      margin: 0;
  }
  li:nth-of-type(n)          // n 从 0 开始逐个增加
  ```

- #### 倒数特定类型子元素选择器
  ```css
  li:nth-last-of-type(1) {   // 倒数第 1 个 li 类型子元素
      margin: 0;
  }
  li:nth-last-of-type(n)     // n 从 0 开始逐个增加
  ```

- #### 反向选择器
  ```css
  li:not(selector){
      margin: 0;
  }
  ```
