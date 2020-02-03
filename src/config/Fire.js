import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAcryMnMovziDWkyifa2e58J6mxHN-FzfY",
    authDomain: "profile-e9d42.firebaseapp.com",
    databaseURL: "https://profile-e9d42.firebaseio.com",
    projectId: "profile-e9d42",
    storageBucket: "profile-e9d42.appspot.com",
    messagingSenderId: "158578535024",
    appId: "1:158578535024:web:cfd295b11a19e752c9a2b5",
    measurementId: "G-ZJ6G9S1WE5"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;