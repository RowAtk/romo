// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  REACT_APP_FB_API_KEY,
  REACT_APP_FB_AUTH_DOMAIN,
  REACT_APP_FB_PROJECT_ID,
  REACT_APP_FB_STORAGE_BUCKET,
  REACT_APP_FB_MESSENGER_SENDER_ID,
  REACT_APP_FB_APP_ID,
} = process.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_FB_API_KEY,
  authDomain: REACT_APP_FB_AUTH_DOMAIN,
  projectId: REACT_APP_FB_PROJECT_ID,
  storageBucket: REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FB_MESSENGER_SENDER_ID,
  appId: REACT_APP_FB_APP_ID,
};

let app = null;

// if (!firebase.apps.length) {
//   // Initialize Firebase
//   console.log("Init firebase", firebaseConfig);
//   app = initializeApp(firebaseConfig);
// }

console.log("Init firebase", firebaseConfig);
app = initializeApp(firebaseConfig);

export const firebaseApp = app;
export const fireAuth = getAuth(firebaseApp);
