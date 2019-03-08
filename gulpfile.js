const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');

gulp.task('default', ['sass'], function(){
  browserSync.init({
    server:'./public/'
  });
  gulp.watch('./dev/**/*.scss',['sass']);
  gulp.watch('./dev/**/*.pug',['pug']);
  gulp.watch('./public/*.html').on('change',browserSync.reload);
});

gulp.task('sass', function(){
  gulp.src('./dev/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/css/'))
  .pipe(browserSync.stream());
});

gulp.task('pug', function(){
  gulp.src('./dev/pug/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./public/'));
});
