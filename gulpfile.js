var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    inject = require('gulp-inject'),
    gulpSequence = require('gulp-sequence'),
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

gulp.task('html-build', function () {
  gulp.src('*.html')
  .pipe(gulp.dest('build/'))
  .on('end', function () {
    gulp.src('build/index.html')
    .pipe(inject(gulp.src('./build/js/*.min.js', {read: false}), {relative: true}))
    .pipe(inject(gulp.src('./build/css/*.min.css', {read: false}), {relative: true}))
    .pipe(gulp.dest('build/'));
  })
});

gulp.task('production', gulpSequence(
    "minify-js",
    "minify-css",
    "html-build"
));

