import { useUser } from '@auth0/nextjs-auth0';
import Router from 'next/router';
import { useEffect } from 'react';
import LoaderPage from './LoaderPage';

//TODO improve auth checks
const Auth = ({ children: Children }) => {
    const authState = useUser();
    const { user, isLoading } = authState;

    useEffect(() => {
        const { pathname } = Router;

        if (pathname !== '/' && !user?.email) {
            Router.push('/');
        }

        if (pathname === '/' && user?.email) {
            Router.push('/dashboard');
        }
    }, [user]);

    if (isLoading) return <LoaderPage />;

    return <>{Children}</>;
};

export default Auth;
