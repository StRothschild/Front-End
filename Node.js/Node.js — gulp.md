# gulp
#### gulp 是一种基于 Node.js 的自动构建工具。

---
- #### 在 Node.js 项目中使用 gulp
  ##### 1. 安装全局的 gulp 模块
  ```Node
  /* 全局的 gulp 可以提供 CLI（Command Line Interface）来启动 gulp */
  $ npm install gulp -g
  ```

  ##### 2. 安装本地的 gulp 模块
  ```Node
  /* 真正用来执行的是本地的 gulp 模块，因为每个项目都会有不同的 gulp 插件配置和执行任务 */
  $ npm install gulp
  ```

  ##### 3. 通过 gulpfile.js 文件为项目引入插件和配置任务
  ###### 在 Node.js 项目的根路径下创建 gulp 的配置文件 gulpfil.js
  ```JavaScript
  /* 在导入这些插件之前，必须保证在本地安装了这些插件 */
  var gulp = require('gulp');                    // $ npm install gulp
  var stylus = require('gulp-stylus');           // $ npm install gulp-stylus
  var livereload = require('gulp-livereload');   // $ npm install gulp-livereload

  /* 配置 stylus 的编译任务 */
  gulp.task('pageStylus', function () {
    return gulp.src('src/main/webapp/WEB-INF/stylus/**/*.styl')  // gulp-stylus 可以支持 ** 通配符，而原生 stylus 不支持
      .pipe(stylus())                            // 执行 stylus                     
      .pipe(gulp.dest('src/main/webapp/css'))    // gulp.dest 表示输出路径
      .pipe(livereload());                       // Creates a stream which notifies the livereload server on what changed
  });
  /* 配置 gulp 的 watch 任务 */
  gulp.task('watch', function(){
    livereload.listen();                         // Starts a livereload server
    gulp.watch('src/main/webapp/WEB-INF/stylus/**/*.styl', ['pageStylus']);  // 可以添加多个 watch
  });
  /* 配置 gulp 的 default 任务 */
  gulp.task('default', ['pageStylus', 'watch']);
  ```

  ##### 4. 通过命令行（CLI）启动 gulp
  ```
  /* 在 gulpfile.js 所在的路径下执行命令行 */
  $ gulp               // 启动 gulp 并执行 default 任务
  $ gulp pageStylus    // 启动 gulp 并执行 pageStylus 任务
  ```




---
- #### 在 IDEA 中使用 gulp  
  ##### IDEA 中已经默认安装了 gulp 插件，通过插件可以直接在 IDEA 中操作 gulp，而不必再单独开一个 DOS 窗口。

  ##### 1. 在 IDEA 中选择 gulpfile.js 文件
  ##### 2. 右击选择 'show gulp tasks'
  ##### 3. 在弹出的 gulp 小边栏中选择 task，双击即可执行
