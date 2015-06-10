var gulp = require('gulp');
var exec = require('child_process').exec;

// Generate docs.
gulp.task('jsdoc', function (done) {
  exec('npm run docs', function (err, stdout, stderr) {
    /*global console*/
    console.log(stdout);
    console.log(stderr);

    done(err);
  });
});
