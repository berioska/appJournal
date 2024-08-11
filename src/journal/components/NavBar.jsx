import React from 'react';
import { AppBar, Toolbar, IconButton, Grid, Typography } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

//poner abajo el sm, significa que asi se muestra HASTA la medida sm,
// si pusiera xs diria que asi se presenta HASTA la pantalla xs que es la mas pequeña




export const NavBar = ({ drawerWidth = 240 }) => {
    const dispatch = useDispatch();

    const onLogout = () => {

        dispatch(startLogout());
        
        }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },

                ml: { sm: ` ${drawerWidth}px` }
            }}
        >

            <Toolbar>
                <IconButton
                    color='inherit'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems= 'center'>
                    <Typography variant='h6' component='div' noWrap  >JournalApp</Typography>

                    <IconButton onClick={onLogout}  >
                        <LogoutOutlined color='error' />
                    </IconButton>
                </Grid>

            </Toolbar>
        </AppBar >
    );
};

