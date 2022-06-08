import { useUser } from '@auth0/nextjs-auth0';
import Router from 'next/router';
import { useEffect } from 'react';
import Landing from './landing';

//leaving this here due to https://github.com/nrwl/nx/issues/9017
// import path from 'path';
// path.resolve('./next.config.js');

export default function Index() {
    const { user, isLoading } = useUser();

    useEffect(() => {
        if (user && !isLoading) Router.push('/dashboard');
    }, [user, isLoading]);

    return <Landing />;
}
