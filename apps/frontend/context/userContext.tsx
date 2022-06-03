import { createContext, useContext, useState } from 'react';
import { UserProvider as AuthUserProvider } from '@auth0/nextjs-auth0';

const Context = createContext(null);

export function UserProvider({ children }) {
    const [userData, setUserData] = useState(null);

    return (
        <Context.Provider value={[userData, setUserData]}>
            <AuthUserProvider>{children}</AuthUserProvider>
        </Context.Provider>
    );
}

export function useUserContext() {
    const [userData, setUserData] = useContext(Context);
    return { userData, setUserData };
}
