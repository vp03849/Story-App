import firebase from 'firebase';
//require('@firebase/firestore')

const firebaseConfig = {
   apiKey: "AIzaSyBjVuRvNIFdrRJ75_gF7hhxYWJV1tzIe1s",
    authDomain: "storytelling-app-b29f9.firebaseapp.com",
    databaseURL: "https://storytelling-app-b29f9-default-rtdb.firebaseio.com",
    projectId: "storytelling-app-b29f9",
    storageBucket: "storytelling-app-b29f9.appspot.com",
    messagingSenderId: "1003890704744",
    appId: "1:1003890704744:web:889c985e82f1970abfd6dd"
};



if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();