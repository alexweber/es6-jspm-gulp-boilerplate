var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Compile SASS with sourcemaps + livereload.
gulp.task('sass', function() {
  gulp.src(paths.sass)
    .pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('app.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./src/css'))
    .pipe(connect.reload());
});
