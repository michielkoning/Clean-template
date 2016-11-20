var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
  runSequence(
    'delete',
    [
      'nunjucks',
      'sass',
      'scripts',
      'images',
      'icons'
    ]
  ,
  'base64',
  [
    'webp'
  ],
  callback);
});