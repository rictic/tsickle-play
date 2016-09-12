'use strict';

const gulp = require('gulp');
const jscompiler = require('google-closure-compiler').gulp();
const sourcemaps = require('gulp-sourcemaps');
const childProcess = require('child_process');

gulp.task('tsickle', (cb) => {
  const tsicklePath = './node_modules/.bin/tsickle';
  childProcess.exec(tsicklePath, (err, stdout, stderr) => {
    if (err) {
      console.log(stderr);
      cb(err);
      return;
    }
    cb();
  });
});

gulp.task('default', ['tsickle']);
