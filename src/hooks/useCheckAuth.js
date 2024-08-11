import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/auth/authSlice";
import { startLoadingNotes } from "../store/journal/thunks";


export const useCheckAuth = () => {
  
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged(FirebaseAuth, async (user) => {

            if (!user) return dispatch(logout());
            dispatch(login(user));
            dispatch(startLoadingNotes()); //si esta autenticado si o si debe ir el id
        });


    }, []);

    return {
        status
    }


};