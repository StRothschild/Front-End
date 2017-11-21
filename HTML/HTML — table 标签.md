## table 标签

- #### rowspan 属性
##### rowspan 是 td 和 th 的属性。
##### rowspan 可以在垂直方向上合并单元格。
```javascript
  // 注意，如果上一行的 <td> 通过 rowspan 占据2行后， 下一行的 <td> 也需要相应的少一个
  <tr>
      <td rowspan="2">占据2行</td>
      <td>占据1行</td>
  </tr> 
  <tr>
      <td>占据1行</td>
  </tr>
```
