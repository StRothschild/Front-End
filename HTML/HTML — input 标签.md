# input 标签
#### input 标签属性

```
/* type */
// text/password 文本框
<input>                       // type 的默认值就是 text
<input type="password">       // 和普通 text 相似，但是输入的值会变成密文符号 *
<input type="text" disabled>  // disabled 禁止输入
<input style="cursor: wait;"> // cursor 默认为 text
<input name="fieldName">      // 字段名，一般用于 form
<input value="fieldValue">    // 字段值，也就是输入的值


/* radio 单选框 */
<input type="radio" checked>  // 选中
<input type="radio" disabled> // 禁止选中
<input type="radio" name="fieldName">   // 字段名，一般用于 form
<input type="radio" value="fieldValue"> // 当前单选框的值

// 实现单选的方式并获取选中值的方式
原生HTML：多个 radio 使用同一个 name，通过 checked 属性获取选中的 radio 元素，再获取元素的 value
regular: 多个 radio 绑定同一个数据模型，如果 radio 被选中，则数据模型中的值会自动取 radio 的 value 值,示例代码如下：
<input type="radio" value={"hello"} r-model={radioValue}>hello
<input type="radio" value={"world"} r-model={radioValue}>world
checkedValue: {radioValue}

// 默认选中
原生HTML：添加标签的 checked 属性
regular: 设置 r-model={radioValue} 的值和 value 的值相同

// 替换元素（input）与文本大致对齐方式
vertical-align: middle;    // 与 strut 居中对齐
margin: 0;                 // 去除默认的 margin, 因为默认 baseline 是 margin-bottom



/* checkbox 复选框 */
<input type="checkbox" checked>  // 选中
<input type="checkbox" disabled> // 禁止选中入
<input type="checkbox" name="fieldName">   // 字段名，一般用于 form
<input type="checkbox" value="fieldValue"> // 当前复选框的值

// 实现多选并取值
原生HTML：通过 checked 属性获取选中的 checkbox 元素，再获取元素的 value
regular: 特别注意在 checkbox 元素中 r-model 绑定的是属性 checked 的值，而不是 value 的值。所以要获取 checkbox 的值没有直接的方式，只能添加 on-click 事件处理或者像原生 HTML 一样获取所有 checkbox 元素后再判断是否选中，然后取值。

// 默认选中
原生HTML：添加标签的 checked 属性
regular: 将通过 r-model 映射的数据模型，设置为 true

// 替换元素（input）与文本大致对齐方式
vertical-align: middle;    // 与 strut 居中对齐
margin: 0;                 // 去除默认的 margin, 因为默认 baseline 是 margin-bottom




/* button / reset / submit 按钮 */
<input type="button/reset/submit">
<input type="button/reset/submit" value="buttonName"> // 按钮显示的文字

/* image 图片 */
<input type="image" src="">  // 在 form 中点击会触发提交

/* file 文件上传 */
<input type="file" accept="image/png"> // 上传的文件的类型

/* hidden 隐藏元素 */
<input type="hidden"> // 不可见，不占空间，但元素还在正常流中
```


### readonly 与 disabled 的区别
- #### readonly 只针对 input（text / password)和 textarea 有效。

- #### disabled 对于所有的表单元素都有效，包括 select, radio, checkbox, button 等。

- #### form 表单中的字段为 diabled 时，提交表单无法获取该字段的值，但 readonly 可以。
