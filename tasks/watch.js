/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var notify = require('gulp-notify');
var config = require('../config');

gulp.task('watch', ['serve'], function () {
    // watch for changes
    gulp.watch([config.workfiles_watch], reload);
    gulp.watch(config.styles_watch, ['styles']);
    gulp.watch(config.js_watch, ['scripts']);
    // gulp.watch(config.bower_file, ['wiredep']);
});