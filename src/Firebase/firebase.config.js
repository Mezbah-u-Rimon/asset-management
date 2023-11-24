import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDgWB4Rjij8amFZnCP9JX3awFid069HDbg",
    authDomain: "asset-management-57168.firebaseapp.com",
    projectId: "asset-management-57168",
    storageBucket: "asset-management-57168.appspot.com",
    messagingSenderId: "407770916301",
    appId: "1:407770916301:web:a6a94bcc44ac8155d0d084"
};

console.log(import.meta.env.apiKey);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;