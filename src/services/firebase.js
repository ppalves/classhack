import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCVIaj-Kg8zamflMu3NziqRSCeWw9Jw29Q",
  authDomain: "classapp-hackathon-2019.firebaseapp.com",
  databaseURL: "https://classapp-hackathon-2019.firebaseio.com",
  projectId: "classapp-hackathon-2019",
  storageBucket: "",
  messagingSenderId: "224617728534",
  appId: "1:224617728534:web:0f5bb8eeffd121fe"
};

const firebase = Firebase.initializeApp(firebaseConfig);

export default firebase;
