const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
uglify = require('gulp-uglify');
babel = require('gulp-babel');

// 把所有文件拷贝到dist
gulp.task('all', function(){
    gulp.src('view/**/*.*')
    .pipe(gulp.dest('dist'))
})
// 压缩html
gulp.task('html', function(){
    gulp.src('view/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, minifyjs: true, minifycss: true, removeComments: true }))
    .pipe(gulp.dest('dist'))
})
// 压缩js
gulp.task('js', function(){
    gulp.src('view/**/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})

gulp.task('watck', function(){
    gulp.watch('view/**/*.html', ['html']);
    gulp.watch('view/**/*.js', ['js'])
})

// 合并任务
gulp.task('build', ['all', 'html', 'js'])
// 开启服务器
gulp.task('connect', function(){
   
})
