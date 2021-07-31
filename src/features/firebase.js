import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firestore = firebase.initializeApp({
    apiKey: "AIzaSyDEsxRZLY1HX4-5D4EUGd-QAHQ6uIPL3hM",
    authDomain: "test-app-29d01.firebaseapp.com",
    projectId: "test-app-29d01",
    storageBucket: "test-app-29d01.appspot.com",
    messagingSenderId: "962383895461",
    appId: "1:962383895461:web:8228395084e68bde93264c",
    measurementId: "G-82C1FVSX84"
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
