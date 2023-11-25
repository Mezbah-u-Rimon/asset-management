import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

console.log(import.meta.env.VITE_apiKey);
console.log(import.meta.env.VITE_authDomain);
console.log(import.meta.env.VITE_projectId);
console.log(import.meta.env.VITE_storageBucket);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;