import { initializeApp } from "@firebase/app";
import { getDatabase } from "firebase/database";

//import { getFirestore } from "@firebase/firestore";





const firebaseConfig = {
    apiKey: "AIzaSyCwyu-Ipzf9KfWNbt6XhRsmpDWFWrzldbA",
    authDomain: "indextv-1405c.firebaseapp.com",
    databaseURL: "https://indextv-1405c-default-rtdb.firebaseio.com",
    projectId: "indextv-1405c",
    storageBucket: "indextv-1405c.appspot.com",
    messagingSenderId: "75799419759",
    appId: "1:75799419759:web:46397e29059099989b669a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//get db
const db = getDatabase(app);


export { db };
