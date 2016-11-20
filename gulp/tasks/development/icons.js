var gulp     = require('gulp');
var svgstore = require('gulp-svgstore');
var config   = require('../../config').icons;

gulp.task('icons', function () {
  return gulp
    .src(config.src)
    .pipe(svgstore(config.options))
    .pipe(gulp.dest(config.destDevelopment));
});