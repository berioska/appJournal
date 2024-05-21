import React from 'react';
import { Box, Toolbar } from '@mui/material'
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';


const drawerWidth = 280;

export const JournalLayout = ({ children}) => {

    return (

        <Box sx={{ diplay: 'flex', }}>

            <NavBar drawerWidth = {drawerWidth}   />
            <SideBar drawerWidth={drawerWidth}/>

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3,   ml: { sm: ` ${drawerWidth}px` }}}
                noWrap
            >
                <Toolbar/>
                {/* {toolbar} */}
                {children}
        

            </Box>



        </Box>
    );
};

export default JournalLayout;