import { useUser } from '@auth0/nextjs-auth0';
import Router from 'next/router';
import { useEffect } from 'react';
import { useUserContext } from '../context/userContext';
import useApi from './useApi';

const useGetUser = () => {
    const { user: authUser } = useUser();
    const { response, isLoading } = useApi(`/user`, {
        body: {
            sub: authUser.sub,
        },
    });

    const { userData, setUserData } = useUserContext();

    useEffect(() => {
        if (!isLoading && !response) {
            //TODO - send to signup
            Router.push('/');
        }

        setUserData({
            ...authUser,
            ...response,
        });

        // if (userData) Router.push('/');
    }, [authUser, response]);

    return userData;
};

export default useGetUser;
