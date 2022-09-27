import { Navigate, Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';

import LoginPage from './../../pages/LoginPage/LoginForm';

const PrivateRoute = () => {

    const token = localStorage.getItem('loginToken');
    console.log('test', token)
    useEffect(()=> {

    },[localStorage.getItem('loginToken')])
    return (
            token?.length? <Outlet /> : <LoginPage />
    )
};

export default PrivateRoute;