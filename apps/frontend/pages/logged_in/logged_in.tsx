import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import LoaderPage from '../../components/common/LoaderPage';
import Router from 'next/router';
import { useEffect } from 'react';
import { useUserContext } from '../../context/userContext';
import useApi from '../../hooks/useApi';
import AppShell from '../../views/common/AppShell';

function LoggedIn() {
    const { user: authUser } = useUser();
    const { response } = useApi(`/user`, {
        body: {
            sub: authUser.sub,
        },
    });

    const { userData, setUserData } = useUserContext();

    useEffect(() => {
        setUserData({
            ...authUser,
            ...response,
        });

        if (userData) Router.push('/dashboard');
    }, [authUser, response]);

    return <LoaderPage />;
}

export default withPageAuthRequired(LoggedIn);
