var gulp = require('gulp');
var requireDir = require('require-dir');

// Paths.
global.paths = {
  'html': './src/*.html',
  'js': './src/js/**/*.js',
  'sass': './src/scss/**/*.scss',
  'img': './src/img/*'
};

// Require all tasks in gulp/tasks.
requireDir('./gulp', { recurse: false });

gulp.task('default', ['connect', 'watch']);
