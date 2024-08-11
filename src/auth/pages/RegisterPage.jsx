
import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom"
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material'
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StartCreatingUserWithEmailPassword } from "../../store/auth/thunks";


const formData = {

    email: 'berioska@Google.com',
    displayName: 'Berioska',
    password: '12345'
}

const formValidations = {

    email: [(value) => value.includes('@'), 'El correo debe contener un @'],
    displayName: [(value) => value.length >= 1, 'El nomber es obligatorio'],
    password: [(value) => value.length >= 6, 'El password debe tener mas de 6 letras']

}




export const RegisterPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth)

    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]); //esto devuelve un booleano

    const { displayName, password, email, onInputChange, formState,
        isFormValid, emailValid, passwordValid, displayNameValid } = useForm(formData, formValidations);

    const [formSubmitted, setFormSubmitted] = useState(false);
    const dispatch = useDispatch();




    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormValid) return; // si es falso que retorne.

        setFormSubmitted(true);

        dispatch(StartCreatingUserWithEmailPassword(formState));
        console.log(formState);

    }


    return (
        <AuthLayout title={"Crear cuenta"}  >

            <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 1 }}>
                        <TextField
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            label='Nombre Completo'
                            type='text'
                            placeholder="Nombre Completo"
                            fullWidth
                            error={!!displayNameValid && formSubmitted} //esto es true si devuelve mensaje y false si es null. 
                            helperText={displayNameValid}
                        />

                    </Grid>

                    <Grid item xs={12} sx={{ mb: 1 }} >
                        <TextField
                            label='Correo'
                            type='email'
                            placeholder="Correo"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />

                    </Grid>
                    <Grid item xs={12} sx={{ mb: 1 }} >
                        <TextField
                            label='Contraseña'
                            type='password'
                            placeholder="Contraseña"
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}

                        />

                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid item xs={12}
                         display = {!!errorMessage ? '' : 'none'}  //si el valor es false, se oculta 
                        >
                            <Alert severity="error">
                                {errorMessage}
                            </Alert>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                disabled={isCheckingAuthentication}
                                variant='contained'
                                fullWidth
                                type="submit"
                            >
                                Crear un cuenta
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }} >¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color={'inherit'} to="/auth/login"  >
                            Ingresar
                        </Link>

                    </Grid>

                </Grid>
            </form>

        </AuthLayout>
    );
}

