import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC_qNed2I9qwSFmu7XGWjNtgnpNgCFt5rI',
  authDomain: 'yo-puedo-app.firebaseapp.com',
  databaseURL: 'https://yo-puedo-app.firebaseio.com',
  projectId: 'yo-puedo-app',
  storageBucket: 'yo-puedo-app.appspot.com',
  messagingSenderId: '508463233308',
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  doCreateUserWithGoogle() {
    const provider = new app.auth.GoogleAuthProvider();
    return this.auth.signInWithPopup(provider);
  }
}

export default Firebase;
