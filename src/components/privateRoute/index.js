import { Navigate, Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';

import LoginPage from './../../pages/LoginPage/LoginForm';

const PrivateRoute = () => {

    const token = localStorage.getItem('loginToken');
    useEffect(()=> {

    },[token])
    return (
            token? <Outlet /> : <LoginPage />
    )
};

export default PrivateRoute;