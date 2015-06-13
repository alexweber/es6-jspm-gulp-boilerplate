'use strict';

/*
 * gulpfile.js
 * ===========
 * Rather than manage one giant configuration file responsible
 * for creating multiple tasks, each task has been broken out into
 * its own file in the 'gulp' folder. Any files in that directory get
 *  automatically required below.
 *
 * To add a new task, simply add a new task file in that directory.
 */

var gulp = require('gulp');
var requireDir = require('require-dir');

// Specify file paths for tasks.
global.paths = {
  'html': './src/*.html',
  'js': './src/js/**/*.js',
  'sass': './src/scss/**/*.scss',
  'img': './src/img/*',
  'dist': './dist'
};

// Require all tasks in the 'gulp' folder.
requireDir('./gulp', { recurse: false });

// Default task; start local server & watch for changes.
gulp.task('default', ['connect', 'watch']);
