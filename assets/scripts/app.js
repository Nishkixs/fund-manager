'use strict';

// const events = require('events.js');
//
//
// Initialize Firebase

(function() {

    const config = {
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
    const btnLogout = document.getElementById('btnLogout');

    btnLogin.addEventListener('click', e => {

          const email = txtEmail.value;
          const pass = txtPassword.value;
          const auth = firebase.auth();
          // Sign in
          const promise = auth.signInWithEmailAndPassword(email, pass);
          promise.catch(e => console.log(e.message));
      });
      firebase.auth().onAuthStateChanged(user => {
          if(user) {
              console.log('User Logged in :' + user );
              // events.render();

          }else{
              console.log('User Not Logged in');

          }
      });

      btnLogout.addEventListener('click', e => {
          firebase.auth().signOut();
      });
    }());
