import { createReducer, createActions } from 'reduxsauce';
// exporto como creators, importo como actions
const { Types, Creators } = createActions(
  {
    signin: ['firebase', 'history', 'email', 'password'],
    signinLoading: null,
    signinSuccess: ['user'],
    signinError: ['message'],
    signout: ['firebase', 'history'],
    signoutLoading: null,
    signoutSuccess: null,
    signoutError: ['message'],
  },
  { prefix: 'AUTH/' }
);

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  user: null,
  signinLoading: false,
  signinError: '',
  signoutLoading: false,
  signoutError: null,
};

/* ------------- Reducers ------------- */

const signinLoading = state => ({ ...state, signinLoading: true });

const signinSuccess = (state, action) => ({
  ...state,
  signinLoading: false,
  signinError: '',
  user: action.user,
});

const signinError = (state, action) => ({
  signinLoading: false,
  signinError: action.message,
});

const signoutLoading = state => ({ ...state, signoutLoading: true });

const signoutSuccess = state => ({
  ...state,
  user: null,
  signoutLoading: false,
  signinError: '',
});

const signoutError = (state, action) => ({
  signoutLoading: false,
  signoutError: action.message,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNIN_LOADING]: signinLoading,
  [Types.SIGNIN_SUCCESS]: signinSuccess,
  [Types.SIGNIN_ERROR]: signinError,
  [Types.SIGNOUT_LOADING]: signoutLoading,
  [Types.SIGNOUT_SUCCESS]: signoutSuccess,
  [Types.SIGNOUT_ERROR]: signoutError,
});
