import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const goolgeProvider = new GoogleAuthProvider();


export const singInWithGoogle = async () => {

    try {

        const result = await signInWithPopup(FirebaseAuth, goolgeProvider);
        const credentials = GoogleAuthProvider.credentialFromResult(result);

        const { displayName, photoURL, email, uid } = result.user; // todo esto lo extrae de mi autenticacion

        return {
            ok: true,
            //user info
            displayName, photoURL, email, uid
        };


    } catch (error) { //esta es la respuesta si la peticion a firebase falla (como cerrar la ventana de google)

        const errorCode = error.code;
        const errorMessage = error.message;


        console.log(error);

        return {
            ok: false,
            errorMessage

        };

    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {

    try {

        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password); //esta funcion no recibe el display name 
        const { photoURL, uid } = result.user; //al registrar al usuario, tambien lo creo. 

        const auth = getAuth();

        await updateProfile(auth.currentUser, { displayName }); //le paso al usuario logueado actualmente y le agrego el displayname


        return {
            ok:true,
            photoURL, uid, email, displayName
        };

    } catch (error) {

        return { ok: false, errorMessage: error.message };
    }



}