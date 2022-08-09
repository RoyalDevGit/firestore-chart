import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

let config = {
  apiKey: "xxx",
  authDomain: "www.myapi.com",
  databaseURL: "https://www.myapi.com/data",
  projectId: "myapi",
  storageBucket: "www.myapi.com",
  messagingSenderId: "xxx",
  appId: "xxx",
};

const app = initializeApp(config);
const db = getFirestore(app)

export default db;