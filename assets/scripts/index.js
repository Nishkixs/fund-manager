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
 $('#btnLogin').on('click', function(){
     let firebase = require('firebase');
     let config = {
       apiKey: "AIzaSyBkmw-vbMTDNGJss3bDQrRTaJCslMCP65s",
       authDomain: "bettor-half-70e6d.firebaseapp.com",
       databaseURL: "https://bettor-half-70e6d.firebaseio.com",
       storageBucket: "bettor-half-70e6d.appspot.com",
       messagingSenderId: "495009639670"
     };
     firebase.initializeApp(config);

     const txtEmail = document.getElementById('txtEmail');
     const txtPassword = document.getElementById('txtPassword');
     const btnLogin = document.getElementById('btnLogin');
     // const btnSignUp = document.getElementById('btnLogout');

     btnLogin.addEventListener('click', e => {

           const email = txtEmail.value;
           const pass = txtPassword.value;
           const auth = firebase.auth();
           // Sign in
           const promise = auth.signInWithEmailAndPassword(email, pass);
           promise.catch(e => console.log(e.message));
       });

      });

      $('#btnLogout').on('click', function(){
        let firebase = require('firebase');
        let config = {
          apiKey: "AIzaSyBkmw-vbMTDNGJss3bDQrRTaJCslMCP65s",
          authDomain: "bettor-half-70e6d.firebaseapp.com",
          databaseURL: "https://bettor-half-70e6d.firebaseio.com",
          storageBucket: "bettor-half-70e6d.appspot.com",
          messagingSenderId: "495009639670"
        };
        firebase.initializeApp(config);
        const btnLogout = document.getElementById('btnLogout');

        btnLogout.addEventListener('click', e => {
        console.log('not logged in');
        firebase.auth().signOut();


 });




 });

});
