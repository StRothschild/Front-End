## 文本换行
### 1. white-space（强制不换行）
#### white-space: nowrap;
##### 这个属性强制不换行，所以文字过长会溢出。white-space 属性的==优先级高于 word-wrap 和 word-break。==




---
### 2. word-break（先截断再换行）
#### word-break: break-all;
##### 如果单词过长，本行剩余的空间不足，还可以设置 word-break：break-all。==这时，则先填充满剩余空间并在结尾断词，然后换行。此属性的优先级比 word-wrap 属性高。==

![文字截断换行](https://github.com/StRothschild/CSS/blob/master/resource/CSS%20%E2%80%94%20%E6%96%87%E5%AD%97%E5%85%88%E6%88%AA%E6%96%AD%E5%90%8E%E6%8D%A2%E8%A1%8C.png?raw=true)





---
### 3. word-wrap（先换行再截断）
#### word-wrap: break-word;
##### 如果单词过长，本行剩余的空间不足，可设置 word-wrap:break-word。==这时，依然会先自动换行，== 如果新一行的空间还不够，==则切断单词。==

![文字换行截断](https://github.com/StRothschild/CSS/blob/master/resource/%E6%96%87%E5%AD%97%E6%88%AA%E6%96%AD.png?raw=true)




---
### 4. 默认处理（先换行后溢出）
####  white-space: normal;word-wrap: normal; word-break: normal
##### 如果单词过长，本行剩余的空间不足，则==先换行，== 若新一行空间依然不足，则==允许文本溢出盒模型。==

![默认处理方式](https://github.com/StRothschild/CSS/blob/master/resource/%E6%96%87%E5%AD%97%E8%BF%87%E9%95%BF.png?raw=true)





---
### 5. 总结

 -| white-space| word-break  | word-wrap | 默认 normal
 ---|---|---|---|---
默认值 | normal | normal | normal |
常用值 | nowrap | break-all | break-word |
效果 | 不换行 | 立即截断后换行 | 先换行后截断 | 先换行后溢出
优先级 | 高 | 中 | 低 |




```
```
## 设置文字最大行数，并在末尾添加省略号

```
/* 单行溢出省略号 */
overflow: hidden;           // 设置成非 visible
white-space: nowrap;        // 强制不换行
text-overflow: ellipsis;    // 超出部分显示省略号


/* 多行溢出省略号 */
display: -webkit-box;          // webkit-box 布局
-webkit-line-clamp: 5;         // 设置最大行数
-webkit-box-orient: vertical;  // 子元素排列
overflow: hidden;              // 设置成非 visible
text-overflow: ellipsis;       // 超出部分显示省略号
```
