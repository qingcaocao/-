const gulp = require('gulp'),
      connect = require('gulp-connect'),
      sass = require('gulp-sass');
    
gulp.task('sass',function(){
    gulp.src('src/scss/*.scss')
        .pipe(gulp.sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./src/css'))
        .pipe(connect.reload())
})
gulp.task('pord-sass',function(){
    gulp.src('src/scss/*.scss')
        .pipe(gulp.sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload())
})
gulp.task('html',function(){
    gulp.src('src/html/**/*.html')
})