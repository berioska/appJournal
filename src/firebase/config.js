// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //esto viene de mi kit de desarrollo de firebase
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBK7OIvdBadloPyF21a5EsUmpHaiDBW6ok",
    authDomain: "react-cursos-20071.firebaseapp.com",
    projectId: "react-cursos-20071",
    storageBucket: "react-cursos-20071.appspot.com",
    messagingSenderId: "777557279169",
    appId: "1:777557279169:web:d19b93b868b0264553ef40"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig); //inicializa una app con firebase con un sdk desde firebase
export const FirebaseAuth = getAuth(FirebaseApp); // 
export const FirebaseDB = getFirestore(FirebaseApp); //me trae la base de datos de mi app en firebase