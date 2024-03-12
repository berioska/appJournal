import {Typography, Grid} from "@mui/material"

export const AuthLayout = ({ title, children }) => {

    return (
        <>
            <Grid
                container
                spacing={0}
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}
                sx={{
                   
                    padding: 4, 
                    minHeight: '100vh', 
                    backgroundColor: 'primary.main' }}
            >

                <Grid item
                    className='box-shadow'
                    xs={3}
                    sx={{ 
                        width: {sm: 450},
                        backgroundColor: 'white', 
                        padding: 3, 
                        borderRadius: 2 }}
                >
                    <Typography variant='h5' sx={{ mb: 1 }}> {title}</Typography>
    
                {children}

                </Grid>
            </Grid>
        </>
    );
};

