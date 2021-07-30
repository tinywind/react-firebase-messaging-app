import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firestore = firebase.initializeApp({
    apiKey: '--YOUR-FIREBASE-API-KEY--',
    authDomain: '--YOUR-FIREBASE-AUTH-DOMAIN-NAME--',
    projectId: '--YOUR-FIREBASE-PROJECT-ID--',
    storageBucket: '--YOUR-FIREBASE-STORAGE-BUCKET--',
    messagingSenderId: '--YOUR-FIREBASE-MESSAGING-SENDER-D--',
    appId: '--YOUR-FIREBASE-APP-ID--',
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
