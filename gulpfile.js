const gulp = require('gulp');
const eslint = require('gulp-eslint');
const shell = require('gulp-shell');

gulp.task('lint:js', () => gulp.src([
  './source/js/**/*.js'
]).pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

gulp.task('lint:ejs', shell.task(['ejslint ./layout/**/*.ejs']));

gulp.task('default', gulp.series('lint:js', 'lint:ejs'));
