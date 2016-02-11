'use strict';

var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  cssNano = require('gulp-cssnano'),
  htmlMin = require('gulp-htmlmin'),
  jspm = require('gulp-jspm'),
  pngquant = require('imagemin-pngquant'),
  rename = require('gulp-rename'),
  replace = require('gulp-replace'),
  runSeq = require('run-sequence'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify');

// One build task to rule them all.
gulp.task('build', function (done) {
  runSeq('clean', ['buildsass', 'buildimg', 'buildjs'], 'buildhtml', done);
});

// Build SASS for distribution.
gulp.task('buildsass', function () {
  gulp.src(global.paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(autoprefixer())
    .pipe(cssNano())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(global.paths.dist));
});

// Build JS for distribution.
gulp.task('buildjs', function () {
  gulp.src('./src/js/app.js')
    .pipe(jspm({
      selfExecutingBundle: true,
      minify: true,
      skipSourceMaps: true
    }))
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest(global.paths.dist));
});

// Build HTML for distribution.
gulp.task('buildhtml', function () {
  gulp.src(global.paths.html)
    .pipe(replace('css/app.css', 'app.min.css'))
    .pipe(replace('lib/system.js', 'app.min.js'))
    .pipe(replace('<script src="config.js"></script>', ''))
    .pipe(replace("<script>System.import('./js/app')</script>", ''))
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest(global.paths.dist));
});

// Build images for distribution.
gulp.task('buildimg', function () {
  gulp.src(global.paths.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(global.paths.dist + '/img'));
});
