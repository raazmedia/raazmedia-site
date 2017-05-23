var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

gulp.task('scripts', function() {
  browserify({
      entries: './assets/src/scripts/bundle.js',
      debug: true
    })
    .transform(babelify)
    .on('error',gutil.log)
    .bundle()
    .on('error',gutil.log)
    .pipe(source('./js/core.js'))
    .pipe(gulp.dest(''));
});


