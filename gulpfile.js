var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  connect = require('gulp-connect'),
  gutil = require('gulp-util');

gulp.task('default', ['scss', 'watch']);

gulp.task('scss', function () {
  gulp.src('scss/main.scss')
    .pipe(sass().on('error', function (e) {
      gutil.log(e);
    }))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./index.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  connect.server({
    root: '.',
    livereload: true
  })

  gulp.watch(['scss/**/*.scss'], ['scss']);
  gulp.watch(['./index.html'], ['html']);

});


gulp.task('watch-scss-only', function () {
  gulp.watch(['scss/**/*.scss'], ['scss']);
});