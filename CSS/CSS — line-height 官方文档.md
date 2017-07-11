# line-height 官方文档
##### Value: normal | <number> | <length> | <percentage> | inherit
##### Initial: normal
##### Applies to: all elements
##### Inherited: yes
##### Percentages: refer to the font size of the element itself
##### Media: visual
##### Computed value: for <length> and <percentage> the absolute value; otherwise as specified
```
```
- ### ==block container element==
##### On a block container element whose content is composed of inline-level elements, 'line-height' specifies the minimal height of line boxes within the element. The minimum height consists of a minimum height above the baseline and a minimum depth below it, exactly as if each line box starts with a zero-width inline box with the element's font and line height properties. We call that imaginary box a "strut." (The name is inspired by TeX.).

##### The height and depth of the font above and below the baseline are assumed to be metrics that are contained in the font. (For more details, see CSS level 3.)

- ### ==non-replaced inline element==
##### On a non-replaced inline element, 'line-height' specifies the height that is used in the calculation of the line box height.
```
```
### *Values for this property have the following meanings:*

- #### ==normal==
##### Tells user agents to set the used value to a "reasonable" value based on the font of the element. The value has the same meaning as <number>. We recommend a used value for 'normal' between 1.0 to 1.2. The computed value is 'normal'.

- #### ==<length>==
##### The specified length is used in the calculation of the line box height. Negative values are illegal.

- #### ==<number>==
##### The used value of the property is this number multiplied by the element's font size. Negative values are illegal. The computed value is the same as the specified value.

- #### ==<percentage>==
##### The computed value of the property is this percentage multiplied by the element's computed font size. Negative values are illegal.
```
```
### *The three rules in the example below have the same resultant line height:*


```
div { line-height: 1.2; font-size: 10pt }  /* number */
```

```
div { line-height: 1.2em; font-size: 10pt }  /* length */
```


```
div { line-height: 120%; font-size: 10pt }   /* percentage */
```

##### When an element contains text that is rendered in more than one font, user agents may determine the 'normal' 'line-height' value according to the largest font size.

- #### ==Note.==
##### When there is only one value of 'line-height' for all inline boxes in a block container box and they are all in the same font (and there are no replaced elements, inline-block elements, etc.), the above will ensure that baselines of successive lines are exactly 'line-height' apart. This is important when columns of text in different fonts have to be aligned, for example in a table.