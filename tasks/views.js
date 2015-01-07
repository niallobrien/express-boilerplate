/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('views', function () {
  return gulp.src('app/views/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('.tmp'));
});