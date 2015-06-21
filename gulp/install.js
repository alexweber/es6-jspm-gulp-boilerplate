'use strict';

var gulp = require('gulp');
var execSync = require('child_process').execSync;

// Install dependencies.
gulp.task('install', function (done) {
  execSync('npm install', { stdio: 'inherit' });
  execSync('jspm install', { stdio: 'inherit' });
});
