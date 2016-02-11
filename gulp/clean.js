'use strict';

var gulp = require('gulp'),
  del = require('del');

// Empty the build dir.
gulp.task('clean', function (done) {
  del([global.paths.dist + '/*'], done);
});
