var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence(
  'delete',
  [
    'nunjucks',
    'sass',
    'scripts',
    'images'
  ],
  'base64',
  'icons',
  [
    'optimize:images',
    'optimize:svg',
    'optimize:html',
    'optimize:css',
    'optimize:js',
    'files'
  ],
  'revision',
  'rev:collect',
  [
    'webp:production',
    'gzip',
    'service-worker'
  ],
  callback);
});