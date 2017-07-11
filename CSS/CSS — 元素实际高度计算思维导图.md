# 元素实际高度计算思维导图
```
graph TD
A[元素在正常流中实际占据高度的计算]-->B{是否是 inline 元素}

B-->|是|C(inline元素高度取决于行内框模型的高度)
B-->|否|D(inline-block 和 block 元素高度取决于盒模型的高度)

C---E[line-height可以设置行内框模型的最小高度]
D-->F{是否有 height 属性}

F-->|是|G(元素的height属性决定了盒框模型content的高度)
F-->|否|H(元素的行框高度决定了盒模型中content的高度)

H-->I{是否有line-height属性}

I-->|是|J(line-height设置了行框的最小高度)
I-->|否|K(子元素在垂直高度上排列后得出各行框高度)

K-->L(各行框高度相加得出content高度)
J-->M{行框高度是否大于line-height}

M-->|是|N(取行框高度计算content)
M-->|否|O(取line-height高度计算content)
```