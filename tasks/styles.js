/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');
var size = require('gulp-size');
var notify = require('gulp-notify');
var config = require('../config');

console.log(config.styles_entry_file);
// Get one .styl file and render
gulp.task('styles', function () {
    gulp.src(config.styles_entry_file)
    	.pipe(stylus({error: true, use: [nib()]}))
	    // .pipe(autoprefixer('last 2 versions'))
	    .pipe(gulp.dest(config.css_dest_dir))
	    .pipe(reload({stream:true}))
	    .pipe(size())
	    .pipe(notify('Stylus compilation complete.'));
});