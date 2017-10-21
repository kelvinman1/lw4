var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    gutil  = require('gulp-util');
  
gulp.task('minify-js', function () {
  gulp.src('js/*.js')
  .pipe(uglify())
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(gulp.dest('build/js'))
});
gulp.task('minify-css', function () {
  gulp.src('css/*.css')
  .pipe(cssmin())
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(gulp.dest('build/css'))
});