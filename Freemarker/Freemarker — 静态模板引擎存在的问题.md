## 静态模板引擎存在的问题

####  静态模板引擎是通过后端工程来实现页面输出的。由于模板中所有的数据和逻辑在后端都已经解析完毕，所以从客户端的角度来看这只是一段静态页面代码，灵活性较差。静态模板一般只用于搭建页面的整体框架，而不用于组件的开发。




---
#### freemarker
##### freemarker 是基于 Java 开发的，运用较为广泛的一种静态模板，与之类似的还有 JSP。






---
#### 注释
##### freemarker 中的注释是  <#---->
##### html 中的注释是  \<!---->
##### 由于 freemarker 中的内容最终会被解析成 html，所以在实际使用的过程中  \<!----> 也是可以用来注释的。但这两者还是有区别的， <#----> 属于 freemarker 原生的注释方式，所以在解析过程中会被自动过滤，不会出现在 html 页面当中。而  \<!----> 属于解析后的 html 的注释内容，所以其中的内容可以在客户端中被发现。






---
#### if...else
```freemarker
<#if>
<#elseif>
</#if>
```





---
#### 判断是否为 null
```freemarker
如果是 null 值则设置为空字符串 ""
{$nullValue!''}


? 后面加关键字来指定功能
{$nullValue?exists}        // 如果不为 null 值则返回 true，否则返回 false
{$nullValue??}             // 如果不为 null 值则返回 true，否则返回 false

{$value?string}            // 以 String 形式返回这个值
{$nowDate?date}            // 以 日期 格式返回 nowDate（当前时间）
{$nowDate?time}            // 以 时间 格式返回 nowDate（当前时间）
```




---
#### 大于小于
```freemarker
freemarker 里面不能包含 '>' 和 '<' 所以要用到大于和小于就要用 gt（ Greater than） 和 lt（Less than）

<#if content?length gt 100>  
    ${content[0..100]}...  
<#elseif content?length lt 50>      
    ${content}  
</#if>
```
