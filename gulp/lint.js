'use strict';

/*global paths*/

var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lintjs', function () {
  return gulp.src(paths.js)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lintsass', function () {

});
