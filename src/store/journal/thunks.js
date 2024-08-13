import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, setUpdateNote } from "./journalSlice";



export const startLoadingNotes = () => { //esto se dispara en mi checkAuth, despues de auntenticar el usuario

    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        if (!uid) throw new Error('el uid no existe');


        const collectionNotes = collection(FirebaseDB, `${uid}/journal/notes`); //con esto accedo a esa coleccion
        const doc = await getDocs(collectionNotes);



        const notes = [];

        doc.forEach(doc => {

            notes.push({ id: doc.id, ...doc.data() });

        });


        console.log(notes);
        dispatch(setNotes(notes));

    }
}


export const startNewNote = () => {

    return async (dispatch, getState) => {
        //getState me trae todo el estado de mi app, como cuando uso el useSelector
        dispatch(savingNewNote(true));

        const { uid } = getState().auth; //me trae el id el usuario autenticado
        //console.log(uid);

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),

        };

        //aqui se manda la nota al id del usuario autenticado
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`)); //crea la base de dato del usuario por id
        //collection acepta dos argumentos, la base de datos del proyecto y el path que quiero crear. 
        //doc me permite acceder a mi proyecto. 

        await setDoc(newDoc, newNote); // envia la nueva nota a la base del usuario 



        newNote.id = newDoc.id //le agrego el id a  mi nueva nota 


        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote)); // le mando mi nota activa para manipularla

        dispatch(savingNewNote(false)); //vuelvo a habilitar el boton
        //dispatch
        //dispatch new note
        //dispatch avtive note


    }


}


export const startSaveNote = () => { //recibe el id de la nota activa

    return async (dispatch, getState) => {

        dispatch(setSaving(true));

        const { uid } = getState().auth;

        const { active: note } = getState().journal; //esta es la nota activa 

        const updateNote = { ...note };
        delete updateNote.id;


        const currentNote = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`); //accedo a la nota activa

        await setDoc(currentNote, { ...updateNote, date: new Date().getTime() });


        const collectionNotes = collection(FirebaseDB, `${uid}/journal/notes`); //con esto accedo a esa coleccion
        const document = await getDocs(collectionNotes);

        const notes = [];

        document.forEach(doc => {

            notes.push({ id: doc.id, ...doc.data() });

        });

        dispatch(setUpdateNote(notes)); //actualiza las notas
        dispatch(setSaving(false));
        
    }




}



