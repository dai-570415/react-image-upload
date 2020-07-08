# React + Firebase Storage FileUpload

## Data download & construction

```bash
$ git clone https://github.com/dai-570415/react-image-upload.git

$ cd react-image-upload

$ npm install

$ npm start
```

- Setting(Firebase.js)

```js
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "Your_Key",
    authDomain: "Your_Key",
    databaseURL: "Your_Key",
    projectId: "Your_Key",
    storageBucket: "Your_Key",
    messagingSenderId: "Your_Key",
    appId: "Your_Key",
    measurementId: "Your_Key"
};

firebase.initializeApp(firebaseConfig);

export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerTwitter = new firebase.auth.TwitterAuthProvider();
export const db = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
```

# [Example] React+Firebaseでの画像アップロード
[https://coders-shelf.com/react-firebase-image-upload/](https://coders-shelf.com/react-firebase-image-upload/)