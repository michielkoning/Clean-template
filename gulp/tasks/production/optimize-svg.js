var gulp     = require('gulp');
var svgo     = require('gulp-svgo');
var config   = require('../../config').optimize.svg;

/**
 * Copy and minimize image files
 */
gulp.task('optimize:svg', function() {
  return gulp.src(config.src)
    .pipe(svgo())
    .pipe(gulp.dest(config.dest));
});