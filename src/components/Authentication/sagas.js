/* eslint-disable func-names */
import { take, fork, put } from 'redux-saga/effects';
import Actions, { AuthTypes } from './redux';

/* --------------------- Subroutines --------------- */

function* doSignin(firebase, history, email, password) {
  try {
    yield put(Actions.signinLoading());
    firebase.auth.signInWithEmailAndPassword(email, password);

    if (firebase.auth.currentUser) {
      yield put(Actions.signinSuccess());
      history.push('/');
    } else {
      yield put(Actions.signinError('error'));
    }
  } catch (err) {
    yield put(Actions.signinError('error'));
  }
}

function* doSignout(firebase, history) {
  try {
    yield put(Actions.signoutLoading());
    firebase.auth.signOut();

    yield put(Actions.signoutSuccess());
    history.push('/login');
  } catch (err) {
    yield put(Actions.signoutError('error'));
  }
}

function* doSignup(firebase, history, email, password) {
  try {
    yield put(Actions.signupLoading());
    firebase.auth.createUserWithEmailAndPassword(email, password);

    if (firebase.auth.currentUser) {
      yield put(Actions.signupSuccess());
      history.push('/fruta');
    } else {
      yield put(Actions.signupError('error'));
    }
  } catch (err) {
    yield put(Actions.signupError('error'));
  }
}

/* --------------------- Watchers ------------------ */

const watchSignin = function*() {
  while (true) {
    const { firebase, history, email, password } = yield take(AuthTypes.SIGNIN);
    yield fork(doSignin, firebase, history, email, password);
  }
};

const watchSignout = function*() {
  while (true) {
    const { firebase, history } = yield take(AuthTypes.SIGNOUT);
    yield fork(doSignout, firebase, history);
  }
};

const watchSignup = function*() {
  while (true) {
    const { firebase, history, email, password } = yield take(AuthTypes.SIGNUP);
    yield fork(doSignup, firebase, history, email, password);
  }
};

export default { watchSignin, watchSignout, watchSignup };
