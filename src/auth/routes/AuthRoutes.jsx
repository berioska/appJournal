import { useSelector } from 'react-redux';
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage';
import { Routes, Route, Navigate } from 'react-router-dom'
import { CheckingAuth } from '../../ui/components/CheckingAuth';

export const AuthRoutes = () => {

 

    return (

        <Routes>


            <Route path="login" element={<LoginPage />} />

            <Route path="register" element={<RegisterPage />} />

            <Route path="/*" element={<Navigate to={"/auth/login"} />} />
        </Routes>
    );
};

