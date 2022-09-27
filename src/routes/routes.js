import App from './../App';
import Home from './../pages/Home/index';
import Login from './../components/login/LoginForm';
import LoginPage from './../pages/LoginPage/index';
import Report from './../pages/Report/index';
import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: 
                    <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/report',
                element: <Report />
            },
        ]
    }
])