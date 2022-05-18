import { useUser } from '@auth0/nextjs-auth0';
import Router from 'next/router';
import { useEffect } from 'react';

//TODO improve auth checks
const Auth = ({ children: Children }) => {
    const authState = useUser();
    const { email } = authState.user;
    const { pathname } = Router;

    useEffect(() => {
        if (pathname !== '/' && !email) {
            Router.push('/');
        }

        if (pathname === '/' && email) {
            Router.push('/dashboard');
        }
    }, [email, pathname]);

    return <>{Children}</>;
};

export default Auth;
