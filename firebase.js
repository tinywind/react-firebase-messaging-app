import firebase from 'firebase';

const firebaseConfig = {
	apiKey: '--YOUR-FIREBASE-API-KEY--',
	authDomain: '--YOUR-FIREBASE-AUTH-DOMAIN-NAME--',
	projectId: '--YOUR-FIREBASE-PROJECT-ID--',
	storageBucket: '--YOUR-FIREBASE-STORAGE-BUCKET--',
	messagingSenderId: '--YOUR-FIREBASE-MESSAGING-SENDER-D--',
	appId: '--YOUR-FIREBASE-APP-ID--',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
