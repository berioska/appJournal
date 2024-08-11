import React, { useEffect } from 'react';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { useCheckAuth} from '../hooks/useCheckAuth';

const AppRouter = () => {

    const { status } = useCheckAuth();
   

 

    if (status == 'checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>
            {status == 'authenticated' ?
                <Route path={'/*'} element={<JournalRoutes />} /> :
                <Route path={'auth/*'} element={<AuthRoutes />} />
            }

        <Route path={'/*'} element = {<Navigate to={ '/auth/login'}/>}/>






        </Routes>
    );
}

export default AppRouter;