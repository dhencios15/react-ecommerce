import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBYweQxqTt_MBNtyKi_17BmwCgQAtj4Gok',
  authDomain: 'dtech-2bb98.firebaseapp.com',
  databaseURL: 'https://dtech-2bb98.firebaseio.com',
  projectId: 'dtech-2bb98',
  storageBucket: 'dtech-2bb98.appspot.com',
  messagingSenderId: '56210171608',
  appId: '1:56210171608:web:eba2f7acefe5f9b70f59ad',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;