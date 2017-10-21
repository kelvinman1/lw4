var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    gutil  = require('gulp-util');
  
gulp.task('minify-js', function () {
  gulp.src('js/*.js')
  .pipe(uglify())
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(gulp.dest('build/js'))
});