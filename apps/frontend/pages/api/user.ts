import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function userRequest(req, res) {
    const { accessToken } = await getAccessToken(req, res, {
        scopes: ['meta:read'],
    });
    const { sub } = JSON.parse(req.body);

    const response = await fetch(
        `${process.env.TUPLE_API_URL}/users/sub/${sub}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    const data = await response.json();
    res.status(200).json(data);
});
