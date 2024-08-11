import { SaveOutlined } from '@mui/icons-material';
import { Grid, Typography, Button, TextField } from '@mui/material'
import { ImageGallery } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useEffect, useMemo } from 'react';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startSaveNote } from '../../store/journal';



export const NoteView = () => {

    const dispatch = useDispatch();

    const {active:note } = useSelector(state => state.journal); //esta es la nota activa

    const {id, body, title, date, formState, onInputChange} = useForm(note); // se le pasa la not activa
    //en este caso form state es la nota, y como tiene el evento onchange se actualiza cada vez. 
    const dateString = useMemo(() => {

        const newDate = new Date(date);
        return newDate.toUTCString();

    }, [date]);

    useEffect(() => {

        dispatch(setActiveNote(formState))

    },[formState]); //le esta mandando la nota actualizada  a la nota activa


    const onSaveNote = () => {

     dispatch(startSaveNote());

    }


    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }} className="animate__animated animate__fadeIn animate__faster">
            <Grid item>
                <Typography fontSize={39} fontWeight='light'>
                   {dateString}
                </Typography>
            </Grid>
            <Grid item>
                <Button color='primary' sx={{ padding: 2 }}
                onClick={onSaveNote} 
                >
                    
                    <SaveOutlined sx={{ mr: 1, fontSize: 30 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un titulo'
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                    name = 'title'
                    value = {title}       
                    onChange={onInputChange}         
                    />

                <TextField
                    type='text'
                    variant='filled'
                    multiline
                    fullWidth
                    placeholder='Qué sucedió hoy?'
                    sx={{ border: 'none', mb: 1 }}
                    minRows={5}
                    name = 'body'
                    value = {body}
                    onChange={onInputChange}
                />
            </Grid>

            <ImageGallery />

        </Grid>
    );
};
