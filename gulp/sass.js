var gulp = require('gulp');
var connect = require('gulp-connect');

// SASS livereload.
gulp.task('js', function() {
  gulp.src(paths.sass)
    .pipe(connect.reload());
});
