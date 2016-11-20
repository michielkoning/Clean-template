var gulp      = require('gulp');
var injectSvg = require('gulp-inject-svg');
var config    = require('../../config').base64;

/**
 * Replace urls in CSS fies with base64 encoded data
 */
gulp.task('injectSvg', function() {
  return gulp.src(config.src)
    .pipe(base64(config.options))
    .pipe(gulp.dest(config.dest));
});