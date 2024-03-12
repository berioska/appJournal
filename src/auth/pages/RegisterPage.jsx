
import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom"
import { Grid, Typography, TextField, Button, Link } from '@mui/material'

export const RegisterPage = () => {
    return (
        <AuthLayout title={"Crear cuenta"}  >

            <form >
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 1 }}>
                        <TextField
                            label='Nombre Completo'
                            type='text'
                            placeholder="Nombre Completo"
                            fullWidth
                        />

                    </Grid>

                    <Grid item xs={12} sx={{ mb: 1 }} >
                        <TextField
                            label='Correo'
                            type='email'
                            placeholder="Correo"
                            fullWidth
                        />

                    </Grid>
                    <Grid item xs={12} sx={{ mb: 1 }} >
                        <TextField
                            label='Contraseña'
                            type='password'
                            placeholder="Contraseña"
                            fullWidth
                        />

                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid item xs={12} sm={6}>
                            <Button variant='contained' fullWidth>
                            Crear un cuenta
                            </Button>
                        </Grid>
                       
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{mr:1}} >¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color={'in'} to="/auth/login"  >
                           Ingresar
                        </Link>

                    </Grid>

                </Grid>
            </form>

        </AuthLayout>
    );
}

