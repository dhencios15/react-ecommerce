import { put, takeLatest, all, call } from 'redux-saga/effects';

import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from './userActions';
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from '../../helpers/constants';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  const userAuth = yield getCurrentUser();
  if (!userAuth) return;
  yield getSnapshotFromUserAuth(userAuth);
}

export function* signInWithGoogle() {
  const { user } = yield auth.signInWithPopup(googleProvider);
  yield getSnapshotFromUserAuth(user);
}

export function* signInWithEmail({ payload: { email, password } }) {
  const { user } = yield auth.signInWithEmailAndPassword(email, password);
  yield getSnapshotFromUserAuth(user);
}

export function* signUp({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure());
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure());
  }
}

// * ------------- CALLER FUNCTIONS -------------------------- * //

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(SIGN_UP_START, signUp);
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

export function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignUpStart),
    call(onSignOutStart),
    call(onSignUpSuccess),
  ]);
}
