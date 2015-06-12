'use strict';

/*global paths*/

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var scsslint = require('gulp-scss-lint');

// Lint JS.
gulp.task('lintjs', function () {
  return gulp.src(paths.js)
    .pipe(eslint())
    .pipe(eslint.format());
});

// Lint SASS.
gulp.task('lintsass', function () {
  return gulp.src(paths.sass)
    .pipe(scsslint());
});

// Lint all the things!
gulp.task('lint', ['lintjs', 'lintsass']);
