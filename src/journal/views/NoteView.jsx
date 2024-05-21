import { SaveOutlined } from '@mui/icons-material';
import {Grid,Typography, Button, TextField} from '@mui/material'
import {ImageGallery} from '../components'


export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1}}>
            <Grid item>
                <Typography fontSize = {39} fontWeigh = 'light'>
                    28 de Agosto, 2024
                </Typography>
            </Grid>
            <Grid item>
                <Button color='primary' sx={{padding: 2}}>
                    <SaveOutlined sx = {{ mr: 1, fontSize:30 }}/>
                    Guardar
                </Button>
            </Grid>

        <Grid container>
            <TextField
            type='text'
            variant='filled'
            fullWidth
            placeholder='Ingrese un titulo'
            label= 'Título'
            sx={{border:'none', mb:1}}
            />
            <TextField
            type='text'
            variant='filled'
            multiline
            fullWidth
            placeholder='Qué sucedió hoy?'
            sx={{border:'none', mb:1}}
            minRows = {5}
            />
        </Grid>

        <ImageGallery/>

        </Grid>
    );
};
