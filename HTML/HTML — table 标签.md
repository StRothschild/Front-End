## table 标签

- #### rowspan 属性
  ##### rowspan 是 td 和 th 的属性。
  ##### rowspan 可以在垂直方向上合并单元格。
  ```javascript
    // 注意，如果上一行的 <td> 通过 rowspan 占据1列2行后， 下一行的 <td> 也需要相应的少一个
    <tr>
        <td rowspan="2">占据1列2行</td>
        <td>占据1列</td>
    </tr> 
    <tr>
        <td>占据1列</td>
    </tr>
  ```
  
  - #### colspan 属性
    ##### colspan 是 td 和 th 的属性。
    ##### colspan 可以在水平方向上合并单元格。
    ```javascript
      // 注意，如果上一行的 <td> 通过 rowspan 占据2行后， 下一行的 <td> 也需要相应的少一个
      <tr>
          <td colspan="2">占据2列</td>
          <td>占据1列</td>
      </tr> 
      <tr>
          <td>占据1列</td>
          <td>占据1列</td>
          <td>占据1列</td>
      </tr>
    ```
