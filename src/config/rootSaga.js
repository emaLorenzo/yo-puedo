import { all } from 'redux-saga/effects';
import AuthSagas from '../components/Authentication/sagas';

export default function* rootSaga() {
  yield all([AuthSagas.watchSignin(), AuthSagas.watchSignout()]);
}
