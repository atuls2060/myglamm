import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCwSvMz2Bz7ObhIMoZQ0alIUakFdDhQN7o",
    authDomain: "look-your-best.firebaseapp.com",
    projectId: "look-your-best",
    storageBucket: "look-your-best.appspot.com",
    messagingSenderId: "670220750944",
    appId: "1:670220750944:web:0be1a7ce5e38f9d31ab305",
    measurementId: "G-N6M249PL25"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);