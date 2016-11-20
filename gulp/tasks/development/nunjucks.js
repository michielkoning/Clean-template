var gulp           = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data           = require('gulp-data');
var browsersync    = require('browser-sync');
var config         = require('../../config');
var fs             = require('fs');

gulp.task('nunjucks', function() {

  browsersync.notify('Compiling Nunjucks');

  // Gets .html and .nunjucks files in pages
  return gulp.src(config.nunjucks.src)
    // Adding data to Nunjucks
    .pipe(data(function() {
      return JSON.parse(fs.readFileSync(config.nunjucks.data));;
    }))
    // Renders template with nunjucks
    .pipe(nunjucksRender({
      path: config.nunjucks.templateDir
    }))
    // output files in app folder
    .pipe(gulp.dest(config.nunjucks.dest))
});