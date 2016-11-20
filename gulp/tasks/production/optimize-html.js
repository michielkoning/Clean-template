var gulp    = require('gulp');
var config  = require('../../config').optimize.html;

/**
 * Minimize HTML
 */
gulp.task('optimize:html', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});