var   gulp    = require('gulp');
var   watch   = require('gulp-watch');
var   browserSync = require('browser-sync').create();

// html task
gulp.task('html', function () {
  browserSync.reload();
});


//watching all components
gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  //html
  watch('./*.html', function () {
    gulp.start('html');
  });

  //sass
  watch('./scss/**/*.scss', function () {
    gulp.start('build');
  });

});
gulp.task('build', ['sass'], function () {
  return gulp.src('./css/core.css')
    .pipe(browserSync.stream());
});

