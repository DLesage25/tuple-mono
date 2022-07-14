import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { UserProvider } from '../context/userContext';
import { AppContextProvider } from '../context/appContext';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Welcome to frontend!</title>
            </Head>
            <main className="app h-full">
                <UserProvider>
                    <AppContextProvider>
                        <Component {...pageProps} />
                    </AppContextProvider>
                </UserProvider>
            </main>
        </>
    );
}

export default CustomApp;
