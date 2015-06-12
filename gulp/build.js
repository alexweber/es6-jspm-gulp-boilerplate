'use strict';

/*global paths*/

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var Builder = require('systemjs-builder');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var rename = require('gulp-rename');
var runSeq = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// One build task to rule them all.
gulp.task('build', function (done) {
  runSeq('clean', ['buildsass', 'buildjs'], 'buildhtml', done);
});

// Build SASS for distribution.
gulp.task('buildsass', function () {
  gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(autoprefixer())
    .pipe(minifyCss())
  	.pipe(rename({
  		suffix: '.min'
  	}))
    .pipe(gulp.dest('./dist'));
});

// Build JS for distribution.
gulp.task('buildjs', function () {
  var buildOptions = {
    minify: true,
    sourceMaps: false
  };

  var builder = new Builder();
  builder.reset();
  builder.loadConfig('./src/config.js').then(function() {
    builder.loader.baseURL = path.resolve('./src/');

    return builder.build('js/app', 'alex.js', buildOptions)
      .then(function() {
        console.log('Build complete!');
      })
      .catch(function(err) {
        console.log('Build error.');
        console.log(err);
      });
  });
});

// Build HTML for distribution.
gulp.task('buildhtml', function () {
  // @TODO inject dependencies?
  gulp.src(paths.html)
    .pipe(minifyHtml())
    .pipe(gulp.dest('./dist'));
});
