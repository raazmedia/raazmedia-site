var   gulp          = require('gulp');
var   postcss       = require('gulp-postcss');
var   autoprefixer  = require('autoprefixer');
var   cssvars       = require('postcss-simple-vars');
var   mixins        = require('postcss-mixins');
var   sass          = require('gulp-sass');


gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([mixins,  cssvars, autoprefixer]))
    .pipe(gulp.dest('./css'));
});
