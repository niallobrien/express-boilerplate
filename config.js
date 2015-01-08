/* jshint node:true */

'use strict';

/**
 * Config file for Gulp tasks
 */

var config = {
  // Used for BrowserSync
  local_url: 'localhost:3000',

  // Assets
  bower_file: 'bower.json',

  workfiles_watch: '**/*.jade', // Jade templates

  styles_entry_file: 'assets/styles/app.styl',
  styles_watch: 'assets/styles/**/*.styl', // what files to watch to trigger the styles task
  css_dest_dir: 'public/assets/styles', 
  css_entry_file: 'public/assets/styles/app.css',
  // critical_css: 'critical.php', // will contain critical css that you can include

  js_entry_file: './assets/scripts/app.js', // why is the dot there? I don't know, but it works
  js_dest_dir: 'public/assets/scripts/', // where your scripts are located
  js_watch: ['assets/scripts/modules/*.js', 'assets/scripts/app.js'], // what files to watch to trigger the scripts task

  wiredep_file: './app/views/layout.jade', // looks through given file(s) for bower comments
  wiredep_dest: './app/views' // where to spit out the wiredep'd file(s)

};

module.exports = config;