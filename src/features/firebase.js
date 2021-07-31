import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firestore = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}).firestore();

export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export const addToCollection = async (collectionName, entryObject) => await firestore
    .collection(collectionName)
    .add(entryObject)
    .then((result) => result.id);

export const deleteDocumentById = async (collectionName, documentId) => await firestore
    .collection(collectionName)
    .doc(documentId)
    .delete()
    .then((result) => result);
