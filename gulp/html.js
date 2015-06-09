var gulp = require('gulp');
var connect = require('gulp-connect');

// HTML livereload.
gulp.task('html', function() {
  gulp.src(paths.html)
    .pipe(connect.reload());
});
