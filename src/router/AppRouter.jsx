import React from 'react';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import {Routes, Route} from 'react-router-dom'

const AppRouter = ( ) => {

    return (
        <Routes>


        <Route path = {'auth/*'} element = {<AuthRoutes/>} />

        <Route path = {'/*'} element = {<JournalRoutes/>}/>

   

        </Routes>
    );
}

export default AppRouter;