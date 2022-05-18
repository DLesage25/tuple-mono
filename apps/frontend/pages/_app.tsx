import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Welcome to frontend!</title>
            </Head>
            <main className="app">
                <UserProvider>
                    <Component {...pageProps} />
                </UserProvider>
            </main>
        </>
    );
}

export default CustomApp;
