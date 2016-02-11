'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect');

// JavaScript livereload.
gulp.task('js', function () {
  gulp.src(global.paths.js)
    .pipe(connect.reload());
});
