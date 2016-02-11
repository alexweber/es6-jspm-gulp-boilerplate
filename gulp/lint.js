'use strict';

var gulp = require('gulp'),
  cache = require('gulp-cached'),
  eslint = require('gulp-eslint'),
  scsslint = require('gulp-scss-lint');

// Lint JS.
gulp.task('lintjs', function () {
  return gulp.src(global.paths.js)
    .pipe(cache('lintjs'))
    .pipe(eslint())
    .pipe(eslint.format());
});

// Lint SASS.
gulp.task('lintsass', function () {
  return gulp.src(global.paths.sass)
    .pipe(cache('lintsass'))
    .pipe(scsslint());
});

// Lint all the things!
gulp.task('lint', ['lintjs', 'lintsass']);
