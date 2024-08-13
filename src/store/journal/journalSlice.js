

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
            state.messagedSaved = ''
        },

        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = action.payload;
            // TODO:mensaje de error
        },

        setUpdateNote: (state, action) => {

            state.notes = action.payload.map(note => {
                return note;
            });
            state.messagedSaved = `${state.active.title}, actualizada`
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