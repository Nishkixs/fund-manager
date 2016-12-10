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
              console.log("Sign-in provider: "+user.providerId);
              console.log("  Provider-specific UID: "+user.uid);
              console.log("  Name: "+user.displayName);
              console.log("  Email: "+user.email);
                        // events.render();

          }else{
              console.log('User Not Logged in');

          }
      });

      btnLogout.addEventListener('click', e => {
          firebase.auth().signOut();
      });

      let users = document.getElementById('user');
      // getting the element with an id of first name
      let dbRef = firebase.database().ref().child('users');
      // Creating a database reference by creating a child location to the 'first name'
      // location
      dbRef.on('value',snap => users.innerText = snap.val());
      // synchronize the changes using the (on) function
      // using fat arrow function to do it all in one line!
    }());
