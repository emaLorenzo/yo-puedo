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

  doCreateUserWithEmailAndPassword(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  doCreateUserWithGoogle() {
    const provider = new app.auth.GoogleAuthProvider();
    return this.auth.signInWithPopup(provider);
  }

  doSignInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut() {
    return this.auth.signOut();
  }

  doPasswordReset(email) {
    return this.auth.sendPasswordResetEmail(email);
  }

  doPasswordUpdate(password) {
    return this.auth.currentUser.updatePassword(password);
  }

  // this function returns true of false
  doUserIsLogin() {
    return this.auth.currentUser;
  }
}

export default Firebase;
