## JavaScript 的正则表达式
#### JavaScript 生成正则对象
```
以 '/' 开头，以 '/' 结尾
```

#### 检测是否存在英文字母
```JavaScript
/* 区分大小写 */
/[a-z]/.test('d');       // true
/[a-z]/.test('A');       // false


/* 不区分大小写 */
/[a-z]/i.test('d');       // true
/[a-z]/i.test('A');       // true
```


---
#### 检测是否存在中文
```JavaScript
/* 区分大小写 */
/[\u4e00-\u9fa5]/g.test('测试');     // true
/[\u4e00-\u9fa5]/g.test('sgf8');     // false
```
