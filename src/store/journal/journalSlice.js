

import { createSlice } from '@reduxjs/toolkit';




export const journalSlice = createSlice({

    name: 'journal',
    initialState: {
        isSaving: false,
        messagedSaved: "",
        notes: [], //aqui empujo mi nueva nota con el AddNewNote
        active: null
    },

    reducers: {
        savingNewNote: (state, action) => {
            state.isSaving = action.payload;
        },
        addNewEmptyNote: (state, action) => {

            state.notes.push(action.payload);
         
        },

        setActiveNote: (state, action) => {
            state.active = action.payload;
        },

        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;
           // TODO:mensaje de error
        },
       
        setUpdateNote: (state, action) => {
            //state.isSaving = false;
            console.log(action.payload)
            state.notes = state.notes.map( note => {

                if(note.id === action.payload.id){

                    return action.payload;
                }
                return note;
            });




        },
        deleteNoteById: (state, payload) => {

        }
    }

});



export const {
    addNewEmptyNote,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSaving,
    setUpdateNote,
    deleteNoteById, }
    = journalSlice.actions