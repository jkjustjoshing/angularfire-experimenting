'use strict';

var gulp = require('gulp');

var util = require('util');

var express = require('express');
var lrserver = require('tiny-lr')();
var livereload = require('connect-livereload');
var livereloadPort = 35729;
var serverPort = 3000;
var middleware = require('./proxy');

var server = express();
server.use(livereload({
  port: livereloadPort
}));

function notifyLivereload(event) {

  var fileName = require('path').relative(__dirname, event.path);

  lrserver.changed({
    body: {
      files: [fileName]
    }
  });
}


gulp.task('serve', ['watch'], function () {
  server.use(express.static('.tmp'));
  server.use(express.static('src'));
  server.use('/bower_components', express.static('bower_components'));

  server.listen(serverPort);
  lrserver.listen(livereloadPort);

  gulp.watch(['.tmp/**/*', 'src/**/*'], notifyLivereload);
});

// gulp.task('serve:dist', ['build'], function () {
//   browserSyncInit('dist');
// });

// gulp.task('serve:e2e', function () {
//   browserSyncInit(['src', '.tmp'], null, []);
// });

// gulp.task('serve:e2e-dist', ['watch'], function () {
//   browserSyncInit('dist', null, []);
// });
