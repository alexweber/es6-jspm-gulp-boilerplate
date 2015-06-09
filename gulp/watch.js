var gulp = require('gulp');

// Watch for changes.
gulp.task('watch', function(){
  gulp.watch([paths.html], ['html']);
  gulp.watch([paths.js], ['js']);
  gulp.watch([paths.sass], ['sass']);
});
