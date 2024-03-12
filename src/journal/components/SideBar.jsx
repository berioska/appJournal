import { Box, Drawer, Toolbar, Grid, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon ,ListItemText } from '@mui/material'
import { TurnedInNot} from '@mui/icons-material'

export const SideBar = ({ drawerWidth }) => {
    return (

        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth, flexShrink: { sm: 0 } } }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Berioska Monroy
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {['enero', 'febrero',' marzo', 'abril'].map(text => (
                        <ListItem key={text} disablePadding> 
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>

                                <Grid container>
                                    <ListItemText primary = {text}/>
                                    <ListItemText secondary = {'hola como estas, yo muy bien '}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                            
                    ))
                    }
                </List>
            </Drawer>

        </Box>
    );
};

