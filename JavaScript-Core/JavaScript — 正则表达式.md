## JavaScript 的正则表达式(Regular Expression)
#### JavaScript 生成正则对象
```
// 语法
以 '/' 开头，以 '/' 结尾
/正则表达式主体/修饰符(可选)
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



---
#### 修饰符
```
i 执行对大小写不敏感的匹配。
g 执行全局匹配（默认会在找到第一个匹配后停止）
m 执行多行匹配
```



---
#### 常用的字符串方法
##### search() 和 replace()
```JavaScript
'bar'.search(/a/);         =>1
'foo'.replace(/f/, 't');   =>'too'
```
