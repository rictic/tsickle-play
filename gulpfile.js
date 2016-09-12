'use strict';

const gulp = require('gulp');
const jscompiler = require('google-closure-compiler').gulp();
const sourcemaps = require('gulp-sourcemaps');
let childProcess = require('child_process');

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

gulp.task('compilejs', ['tsickle'], () => {
  return gulp.src(['src/*.js'])
    .pipe(sourcemaps.init())
    .pipe(jscompiler({
      js_output_file: 'output.min.js',  // filename returned to gulp
      compilation_level: 'ADVANCED',   // as opposed to 'SIMPLE', the default
      warning_level: 'VERBOSE',        // complain loudly on errors
      create_source_map: true,          // create output source map
    }))
    .pipe(sourcemaps.write('./lib'))
    .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['compilejs']);
