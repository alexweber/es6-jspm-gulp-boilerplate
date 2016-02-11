'use strict';

var gulp = require('gulp'),
  del = require('del');

// Empty the build dir.
gulp.task('clean', function () {
  del([global.paths.dist + '/*']);
});
