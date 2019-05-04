/* eslint-disable func-names */
import { take, fork, put } from 'redux-saga/effects';
import Actions, { AuthTypes } from './redux';

/* --------------------- Subroutines --------------- */

function* doSignin(params) {
  try {
    yield put(Actions.signinLoading());
    const response = { status: 200 };

    if (response.status === 200) {
      yield put(Actions.signinSuccess());
    } else {
      yield put(Actions.signinError('error'));
    }
  } catch (err) {
    yield put(Actions.signinError('error'));
  }
}

function* doSignout() {
  try {
    yield put(Actions.signoutLoading());
    const response = { status: 200 };

    if (response.status === 200) {
      yield put(Actions.signoutSuccess());
    } else {
      yield put(Actions.signoutError('error'));
    }
  } catch (err) {
    yield put(Actions.signoutError('error'));
  }
}

/* --------------------- Watchers ------------------ */

const watchSignin = function*() {
  console.log('watchSign');
  while (true) {
    const { params } = yield take(AuthTypes.SIGNIN);
    console.log('anda');
    yield fork(doSignin, params);
  }
};

const watchSignout = function*() {
  while (true) {
    yield take(AuthTypes.SIGNOUT);
    yield fork(doSignout);
  }
};

export default { watchSignin, watchSignout };
