import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
    async login(req, res) {
        await handleLogin(req, res, {
            authorizationParams: {
                audience: process.env.AUTH0_AUDIENCE,
                // Add the `offline_access` scope to also get a Refresh Token
                scope: process.env.AUTH0_SCOPE,
            },
            returnTo: '/',
        });
    },
});
