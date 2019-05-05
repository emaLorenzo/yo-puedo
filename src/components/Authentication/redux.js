import { createReducer, createActions } from 'reduxsauce';
// exporto como creators, importo como actions
const { Types, Creators } = createActions(
  {
    signin: ['firebase', 'email', 'password'],
    signinLoading: null,
    signinError: ['message'],
    //
    signout: ['firebase'],
    signoutLoading: null,
    signoutError: ['message'],
    //
    signup: ['firebase', 'email', 'password'],
    signupLoading: null,
    signupError: ['message'],
    //
    setUser: ['user'],
  },
  { prefix: 'AUTH/' }
);

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  user: null,
  //
  signinLoading: false,
  signinError: '',
  //
  signoutLoading: false,
  signoutError: null,
  //
  signupLoading: false,
  signupError: '',
};

/* ------------- Reducers ------------- */

const signinLoading = state => ({
  ...state,
  signinLoading: true,
});

const signinError = (state, action) => ({
  ...state,
  signinLoading: false,
  signinError: action.message,
});

const signoutLoading = state => ({
  ...state,
  signoutLoading: true,
});

const signoutError = (state, action) => ({
  ...state,
  signoutLoading: false,
  signoutError: action.message,
});

const signupLoading = state => ({
  ...state,
  signupLoading: true,
});

const signupError = (state, action) => ({
  ...state,
  signupLoading: false,
  signupError: action.message,
});

const setUser = (state, action) => ({
  ...INITIAL_STATE,
  user: action.user,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNIN_LOADING]: signinLoading,
  [Types.SIGNIN_ERROR]: signinError,
  //
  [Types.SIGNOUT_LOADING]: signoutLoading,
  [Types.SIGNOUT_ERROR]: signoutError,
  //
  [Types.SIGNUP_LOADING]: signupLoading,
  [Types.SIGNUP_ERROR]: signupError,
  //
  [Types.SET_USER]: setUser,
});
