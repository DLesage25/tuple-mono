import { useUser } from '@auth0/nextjs-auth0';
import Router from 'next/router';
import { useEffect } from 'react';
import Landing from './landing';

export default function Index() {
    const { user, isLoading } = useUser();

    useEffect(() => {
        if (user && !isLoading) Router.push('/dashboard');
    }, [user, isLoading]);

    return <Landing />;
}
