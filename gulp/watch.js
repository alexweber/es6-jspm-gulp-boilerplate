'use strict';

var gulp = require('gulp'),
  path = require('path'),
  util = require('gulp-util');

// Watch for changes.
gulp.task('watch', function () {
  gulp.watch([global.paths.js], ['lintjs', 'js']).on('change', logChanges);
  gulp.watch([global.paths.sass], ['lintsass', 'sass']).on('change', logChanges);
  gulp.watch([global.paths.html], ['html']).on('change', logChanges);
});

function logChanges(event) {
  util.log(
    util.colors.green('File ' + event.type + ': ') +
    util.colors.magenta(path.basename(event.path))
  );
}
