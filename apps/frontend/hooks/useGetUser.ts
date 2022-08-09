import { useUser } from '@auth0/nextjs-auth0';
import { useEffect } from 'react';
import { useUserContext } from '../context/userContext';
import useApi from './useApi';

const useGetUser = () => {
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
    }, [authUser, response]);

    return userData;
};

export default useGetUser;
