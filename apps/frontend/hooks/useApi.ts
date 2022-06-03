import * as React from 'react';

function initialState(args: {
    response?: any;
    error?: any;
    isLoading?: boolean;
}) {
    return {
        response: null,
        error: null,
        isLoading: true,
        ...args,
    };
}

interface HttpOptions {
    body?: any;
}

const useApi = (
    url: RequestInfo,
    options: HttpOptions = {}
): {
    error: unknown;
    isLoading: boolean;
    response: any;
} => {
    const [state, setState] = React.useState(() => initialState({}));

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const requestBody =
                    options.body && JSON.stringify(options.body);

                const res = await fetch(`/api${url}`, {
                    body: requestBody,
                    method: 'POST',
                });

                if (res.status >= 400) {
                    setState(
                        initialState({
                            error: await res.json(),
                            isLoading: false,
                        })
                    );
                } else {
                    setState(
                        initialState({
                            response: await res.json(),
                            isLoading: false,
                        })
                    );
                }
            } catch (error) {
                setState(
                    initialState({
                        error: {
                            error: error.message,
                        },
                        isLoading: false,
                    })
                );
            }
        };
        fetchData();
    }, []); //adding options here trigger an infinite loop
    return state;
};

export default useApi;
