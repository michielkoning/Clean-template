var gulp       = require('gulp');
var path       = require('path');
var swPrecache = require('sw-precache');
var config     = require('../../config').serviceWorker;

gulp.task('service-worker', function(callback) {
  swPrecache.write(`${config.dest}/service-worker.js`, {
    staticFileGlobs: config.files,
    stripPrefix: config.dest + '/'
  }, callback);

});

