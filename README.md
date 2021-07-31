## React Firebase Messaging App

### This project is created using `React Js (v 16.5)` and `Firebase Cloud Firestore` realtime database.

### The UI has been enhanced using `Bulma CSS Framework (v0.9.2)` and awesome `Feather Icons (v4.28.0)`

```
Still tons of features can be added on top of this application,
Use this app as a starting point to create a messaging apps like Chanty, Discord, Ryver or Slack.
```

#### Key Points

- Authentication (Google Sign-in)
- Realtime database (Firestore Cloud)
- Open chat rooms implemented with text messages and emoji support
- Sleek UI, With custom theme options with overrides in place
- Customizable styles and fonts with overrides in place
- React JS best practices implemented

#### Setup App

1. create a Firebase project in the Firebase console: `https://console.firebase.google.com/`
2. add Web app to your project: `https://console.firebase.google.com/u/0/project/{project-id}/overview`
3. copy Firebase keys and paste to `.env` (if no exist file, create .env file at project root directory)

```
REACT_APP_API_KEY=AIzaSyDEsxRZLY1HX4-5D4EUGd-QAHQ6uIPL3hM
REACT_APP_AUTH_DOMAIN=test-app-29d01.firebaseapp.com
REACT_APP_PROJECT_ID=test-app-29d01
REACT_APP_STORAGE_BUCKET=test-app-29d01.appspot.com
REACT_APP_MESSAGING_SENDER_ID=962383895461
REACT_APP_APP_ID=1:962383895461:web:8228395084e68bde93264c
REACT_APP_MEASUREMENT_ID=G-82C1FVSX84
```

4. create Firestore: `https://console.firebase.google.com/u/0/project/{project-id}/firestore`
5. update Firestore Rules and Publish: `https://console.firebase.google.com/u/0/project/test-app-29d01/firestore/rules`

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

6. enable Google sign-in: `https://console.firebase.google.com/u/0/project/test-app-29d01/authentication/providers`
7. npm install && npm start, and Do CHAT

#### ref:

- https://firebase.google.com/docs/firestore/quickstart
- https://firebase.google.com/docs/database/security

## Preview

![app-landing](/screenshots/app-landing.png 'This is a app-landing image.')

![app-main](/screenshots/app-main.png 'This is a app-main image.')

![app-in-use](/screenshots/app-in-use.png 'This is a app-in-use image.')
