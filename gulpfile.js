var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
 
gulp.task('compress', function() {
  return gulp.src('app.js')
    .pipe(uglify())
    .pipe(gulp.dest('public'));
});

gulp.task('copy', function () {
     gulp
      .src('index.html')
      .pipe(gulp.dest('public'));
});

gulp.task('default', function(callback) {
  runSequence('compress', 'copy', callback);
});