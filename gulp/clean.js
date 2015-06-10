var gulp = require('gulp');
var del = require('del');

// Clean build dir.
gulp.task('clean', function (done) {
  del(['./dist'], done);
});
