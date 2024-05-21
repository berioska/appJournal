import { registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./authSlice";




export const checkingAuthentication = (email, password) => {

    return async (dispatch) => {

        dispatch(checkingCredentials()); //esto cambiara a checking
        console.log('me despachaste');
    };

}

export const startGoogleSingIn = () => {

    return async (dispatch) => {
        console.log('hola')

        dispatch(checkingCredentials()); //esto cambiara a checking

        const result = await singInWithGoogle(); //espero la respuesta de mi autenticacion 

        if (!result.ok) return dispatch(logout(result.errorMessage)); // si falla hace logout

        dispatch(login(result)); // si es exitosa

        console.log({ result }); // el resultado puede ser ok o no

    };
};


export const StartCreatingUserWithEmailPassword = ({ email, password, displayName }) => {

    return async (dispatch) => {

        dispatch(checkingCredentials()); //cambia el status a checking

        const { ok, photoURL, uid, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });



        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, photoURL, email }));


    }
}