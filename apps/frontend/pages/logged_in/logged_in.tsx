import { useEffect } from 'react';
import Router from 'next/router';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import LoaderPage from '../../components/common/LoaderPage';
import { useUserContext } from '../../context/userContext';
import useApi from '../../hooks/useApi';

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
