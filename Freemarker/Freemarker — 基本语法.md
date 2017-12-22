## Freemarker 的基本语法
> 参考文档： http://freemarker.foofun.cn/dgui_template_exp.html#dgui_template_exp_missing_default

- #### 判断 null
  ##### 1. ??
  ##### 2. ?exists（被废弃，请使用??）
  ```Freemarker
    /* 返回的 Boolean 值可以作为 if 的判断 */
    <#if expr??></#if>

    /* 结果和上述一致 */
    <#if expr?exists></#if>
  ```



- #### 判断并给 null 设置默认值
  ##### 1. !""
  ##### 2. ?defualt("") （被废弃，请使用 !）

  ```Freemarker
    /* !可以在expr为null的情况下指定一个默认值，这个默认值可以是任何类型的 */
    expr!expr2
    /* 如果!没有指定一个默认值，则默认值为"" */
    expr!

    /* 结果和上述一致 */
    expr?defualt("")
  ```






- #### 其他内置标签
  ##### 1. 
  ```Freemarker
    /* ?size 用于获取list的长度 */
    ${fields?size}
    <#if list?size>0></#if>
  ```






- #### <!--> 与 <#--> 的区别
  ##### 1. <!--> 渲染后依然会展示
  ##### 2. <#--> 渲染后依然不会展示

  
  
  

---
- #### 内建函数
>内建函数通过 ? 来引导使用，可以通过使用内建函数来处理表达式数据。常见内建函数如下：http://freemarker.foofun.cn/ref_builtins.html
  ```Freemarker
    /* 常见的内建函数 */
    expr?size                  // 给出 expr 序列中 项目 的数量，常用于 list

    expr?length                // 给出 expr 值中 字符 的数量(对于 "John Doe" 来说就是8)

    expr?html                  // 给出 expr 的HTML转义版本， 比如 & 会由 &amp; 来代替。

    expr?upper_case            // 给出 expr 值的大写版本 (比如 "JOHN DOE" 来替代 "John Doe")

    expr?cap_first             // 给出 expr 的首字母大写版本(比如 "Mouse" 来替代 "mouse")



    /* 如果在 <#list animals as animal> 和对应的 </#list> 标签中 */
    animal?index               // 给出了在 animals 中基于0开始的 animal的索引值

    animal?counter             // 也像 index， 但是给出的是基于1的索引值

    animal?item_parity         // 基于当前计数的奇偶性，给出字符串 "odd" 或 "even"。在给不同行着色时非常有用，比如在 <td class="${animal?item_parity}Row">中。
  ```
