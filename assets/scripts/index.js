'use strict';

// user require with a reference to bundle the file and use it in this file
// let example = require('assets/scripts/app.js');

// use require without a reference to ensure a file is bundled




$(() => {
  $('#sign-in-nav').on('click', function() {
  $('#signInModal').modal('show');
 });
 $('#sign-up-nav').on('click', function() {
 $('#signUpModal').modal('show');
 });

 });
