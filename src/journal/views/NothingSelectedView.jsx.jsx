import React from 'react';
import { Grid,Typography } from '@mui/material'
import { StarOutline } from '@mui/icons-material'

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
                borderRadius:3,
                minHeight: 'calc(100vh - 110px)',
                backgroundColor: 'primary.main'
            }}
        >
            <Grid item xs={12} >
                <StarOutline
                    sx={{ fontSize: 100, color: 'white' }}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant ='h5' sx={{color:'white'}}>
                    Selecciona o crea una entrada o una nota
                </Typography>
            </Grid>


        </Grid>
    );
};

