'use strict';

/*global paths*/

var gulp = require('gulp');
var connect = require('gulp-connect');

// JavaScript livereload.
gulp.task('js', function() {
  gulp.src(paths.js)
    .pipe(connect.reload());
});
