import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD17kQ3ksokew9mLWPdhz5Q5ccHHN-S8Y0",
    authDomain: "linkedinclone-45a70.firebaseapp.com",
    projectId: "linkedinclone-45a70",
    storageBucket: "linkedinclone-45a70.appspot.com",
    messagingSenderId: "923312704597",
    appId: "1:923312704597:web:fba527d9aab6e30b9358dc",
    measurementId: "G-WGS83CFV22"
  };

  //for connectivity with everything 

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  //getting db

  const db = firebaseApp.firestore();

  //setting auth

  const auth=firebase.auth();

  export { db,auth } 