var gulp   = require('gulp');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.sass,      ['sass']);
//  gulp.watch(config.sass,      ['sass', 'scsslint']);
  gulp.watch(config.scripts,   ['scripts', 'jshint']);
  gulp.watch(config.templates, ['nunjucks']);
  gulp.watch(config.images,    ['images', 'webp']);
  gulp.watch(config.icons,     ['icons']);
  gulp.watch(config.sprites,   ['sprites']);
});