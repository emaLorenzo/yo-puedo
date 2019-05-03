import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

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
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  isInitialized() {
    return new Promise(resolve => this.auth.onAuthStateChanged(resolve));
  }

  getCurrentUserName() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  googleSignIn() {
    const provider = new app.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider);
  }
}

export default new Firebase();
