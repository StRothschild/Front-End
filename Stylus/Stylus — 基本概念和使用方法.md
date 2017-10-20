# Stylus 的基本概念和使用方法
> stylus 是基于 Node.js 的 CSS 预编译器

- #### 安装 stylus
  ```node
  $ npm install stylus -g
  ```
 



---  
- #### 生成 CSS
  ```node
  /* -w 参数表示监听某个 stylusFile */
  /* -o 参数表示将编译好的的 css 输出到某个 file 中 */
  $ stylus -w <stylusFile> -o <cssFile>
  ```





---  
- #### gulp-stylus
  ##### gulp-stylus 是基于 gulp 的 stylus 插件。相对于 stylus, gulp-stylus 可以支持 ** 通配符。
  ```node
  /* stylus 只支持 * 通配符  */
  $ stylus -w stylusFilePath/*.style -o cssFilePath/

  /* gulp-stylus 支持 ** 通配符 */
  gulp.task('pageStylus', function () {
    return gulp.src('src/main/webapp/WEB-INF/stylus/**/*.styl')  // gulp-stylus 可以支持 ** 通配符，而原生 stylus 不支持
      .pipe(stylus());                 
  });
  ```
