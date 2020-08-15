import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../../helpers/constants';

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signUpStart = (newUser) => ({
  type: SIGN_UP_START,
  payload: newUser,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (err) => ({
  type: SIGN_UP_FAILURE,
  payload: err,
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signInFailure = (err) => ({
  type: SIGN_IN_FAILURE,
  payload: err,
});

export const signOutFailure = (err) => ({
  type: SIGN_OUT_FAILURE,
  payload: err,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});
