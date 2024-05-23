import { Link as RouterLink } from "react-router-dom"
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from '../../store/auth/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSingIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";

export const LoginPage = () => {

   const { status, errorMessage } = useSelector(state => state.auth)

   const isAuthenticating = useMemo(() => status === 'checking', [status]) //devuelve un booleano

   const dispatch = useDispatch()

   const { password, email, onInputChange } = useForm({
      email: 'berioskmonoroy@gmail.com',
      password: '123456'
   })


   const onSubmit = (e) => {

      e.preventDefault()

      dispatch(startLoginWithEmailPassword(email, password)); //esto lo pondra en checking 

      // console.log({email, password})
   }

   const onGoogleSingIn = () => {

      dispatch(startGoogleSingIn());

   }


   return (
      <>

         <AuthLayout title={"Login"} >

            <form onSubmit={onSubmit}>
               <Grid container>
                  <Grid item xs={12} sx={{ mb: 1 }}>
                     <TextField
                        label='Correo'
                        type='email'
                        placeholder="correo@google.com"
                        fullWidth
                        name='email'
                        value={email}
                        onChange={onInputChange}
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
                     />

                  </Grid>

                  <Grid container sx={{mt:1}}
                  display={!!errorMessage ? '' : 'none'}>

                     <Grid item xs={12}>
                        <Alert severity='error'>
                           {errorMessage}
                        </Alert>
                     </Grid>

                  </Grid>


                  <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                     <Grid item xs={12} sm={6}>
                        <Button
                           disabled={isAuthenticating}
                           type="submit"
                           variant='contained'
                           fullWidth>
                           Login
                        </Button>
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <Button
                           disabled={isAuthenticating}
                           onClick={onGoogleSingIn}
                           variant='contained'
                           fullWidth>
                           <Google />
                           <Typography sx={{ ml: 1 }}> Google</Typography>
                        </Button>
                     </Grid>
                  </Grid>

                  <Grid container direction='row' justifyContent='end'>
                     <Link component={RouterLink} to="/auth/register"  >
                        Crear un cuenta
                     </Link>

                  </Grid>

               </Grid>
            </form>

         </AuthLayout>



      </>
   );
}

