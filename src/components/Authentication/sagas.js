/* eslint-disable func-names */
import { take, fork, put } from 'redux-saga/effects';
import Actions, { AuthTypes } from './redux';

/* --------------------- Subroutines --------------- */

function* doSignup(firebase, email, password) {
  try {
    let error;
    // set loading UI
    yield put(Actions.signupLoading());
    yield firebase.auth.createUserWithEmailAndPassword(email, password).catch(e => {
      error = e.message;
    });
    if (error) {
      // shows error and stop loading UI
      yield put(Actions.signupError(error));
    }
    // if no error, then firebase user change will stop loading UI
  } catch (err) {
    yield put(Actions.signupError(err.message));
  }
}

function* doSignin(firebase, email, password) {
  try {
    let error;
    yield put(Actions.signinLoading());
    yield firebase.auth.signInWithEmailAndPassword(email, password).catch(e => {
      error = e.message;
    });

    if (error) {
      yield put(Actions.signinError(error));
    }
  } catch (err) {
    yield put(Actions.signinError(err.message));
  }
}

function* doSignout(firebase) {
  try {
    let error;
    yield put(Actions.signoutLoading());
    yield firebase.auth.signOut().catch(e => {
      error = e.message;
    });

    if (error) {
      yield put(Actions.signoutError(error));
    }
  } catch (err) {
    yield put(Actions.signoutError(err.mess));
  }
}

/* --------------------- Watchers ------------------ */

const watchSignup = function*() {
  while (true) {
    const { firebase, email, password } = yield take(AuthTypes.SIGNUP);
    yield fork(doSignup, firebase, email, password);
  }
};

const watchSignin = function*() {
  while (true) {
    const { firebase, email, password } = yield take(AuthTypes.SIGNIN);
    yield fork(doSignin, firebase, email, password);
  }
};

const watchSignout = function*() {
  while (true) {
    const { firebase, history } = yield take(AuthTypes.SIGNOUT);
    yield fork(doSignout, firebase, history);
  }
};

export default { watchSignup, watchSignin, watchSignout };
