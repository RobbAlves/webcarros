
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyD1MxYi_1Uc7BE-ZSO6T2emX45O2MaMyOk",
  authDomain: "webcarros-21205.firebaseapp.com",
  projectId: "webcarros-21205",
  storageBucket: "webcarros-21205.appspot.com",
  messagingSenderId: "510717188080",
  appId: "1:510717188080:web:ff50b9d5a7fc590fe6af35"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };