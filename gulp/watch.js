'use strict';

/*global paths*/

var gulp = require('gulp');
var path = require('path');
var util = require('gulp-util');

// Watch for changes.
gulp.task('watch', function(){
  gulp.watch([paths.html], ['html']).on('change', logChanges);
  gulp.watch([paths.js], ['lintjs', 'js']).on('change', logChanges);
  gulp.watch([paths.sass], ['lintsass', 'sass']).on('change', logChanges);
});

function logChanges(event) {
  util.log(
    util.colors.green('File ' + event.type + ': ') +
    util.colors.magenta(path.basename(event.path))
  );
}
