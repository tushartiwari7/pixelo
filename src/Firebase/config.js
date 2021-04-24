import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// import 'firebase/analytics';
  var firebaseConfig = {
    apiKey: "AIzaSyAOnlvAQXwkVP6kq42uPFTi-5UdNEsw_YQ",
    authDomain: "okaybuddy.firebaseapp.com",
    projectId: "okaybuddy",
    storageBucket: "okaybuddy.appspot.com",
    messagingSenderId: "325442269131",
    appId: "1:325442269131:web:91faedd919be066808104e",
    measurementId: "G-YRWT8RNW3G"
  };
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const backend = firebase.storage();
  const firestore = firebase.firestore();

export {backend,firestore} ;