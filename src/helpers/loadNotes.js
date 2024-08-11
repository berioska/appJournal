import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth/authSlice";




/* 
export const loadNotes = (store) => (next) => async (action) => {
    const dispatch = useDispatch();


    next(action);


    const state = store.getState();
    const uid = state.auth.uid

    if (!uid) {

        dispatch(logout());
        throw new Error('el uid no existe')

    } else {

        const collectionNotes = collection(FirebaseDB, `${uid}/journal/notes`); //con esto accedo a esa coleccion
        const doc = await getDocs(collectionNotes);


        const notes = [];

        doc.forEach(doc =>{
            
            notes.push({ id: doc.id, ...doc.data() });
            
        });

        console.log(notes)
        dispatch(setNotes(notes));
    }


}
  */

/* export const loadNotes = async(uid = '') => {
    
    const collectionNotes = collection(FirebaseDB, `${uid}/journal/notes`); //con esto accedo a esa coleccion
    const notes = await getDocs(collectionNotes);

    console.log(notes)

};

 */