## 静态模板引擎存在的问题

####  静态模板引擎是通过后端系统将数据源插入到页面中来实现的。由于所有的数据在后端都已经解析完毕，所以整个页面是静态的。



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

如果是 null 值则返回 false，否则返回 true
{$nullValue??}
```
