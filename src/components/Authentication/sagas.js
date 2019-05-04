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
      history.push('/fruta');
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
    history.push('/');
  } catch (err) {
    yield put(Actions.signoutError('error'));
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

export default { watchSignin, watchSignout };
