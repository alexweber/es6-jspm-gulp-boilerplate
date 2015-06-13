'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

// HTML livereload.
gulp.task('html', function() {
  gulp.src(global.paths.html)
    .pipe(connect.reload());
});
