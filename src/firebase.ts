import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCtd4a1wW6FA5zCYHDIWKj-FFkOIsyno6U",
  authDomain: "reacttodolistproject.firebaseapp.com",
  projectId: "reacttodolistproject",
  storageBucket: "reacttodolistproject.appspot.com",
  messagingSenderId: "623363622861",
  appId: "1:623363622861:web:f2df41ae5ee18ec550e684",
  measurementId: "G-0H3BEGJJXB"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, app, db }