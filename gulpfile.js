var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    gutil  = require('gulp-util');
  
gulp.task('minify-js', function () {
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(gulp.dest('build/js'))
});
gulp.task('minify-css', function () {
  gulp.src('css/*.css')
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(gulp.dest('build/css'))
});