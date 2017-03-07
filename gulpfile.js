'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass');

gulp.task('default', function(){
 console.log('test');
});

/*Evrovector*/
gulp.task('sass', function(){
 return gulp.src('scss/*.scss')
 .pipe(sass())
 .pipe(gulp.dest('css'));
});

gulp.watch(['scss/*.scss', 'scss/bootstrap/*.scss', 'scss/bootstrap/mixins/*.scss'], ['sass']);
/*Evrovector END*/