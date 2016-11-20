var gulp     = require('gulp');
var svgstore = require('gulp-svgstore');
var cheerio  = require('gulp-cheerio');
var config   = require('../../config').icons;

gulp.task('icons:production', function () {
  return gulp
    .src(config.src)
    .pipe(svgstore(config.options))
    .pipe(cheerio({
      run: function($) {
        $("[fill]").removeAttr("fill");
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(gulp.dest(config.destProduction));
});