import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable, switchMap } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private readonly http: HttpService) {}

    getUserInfo(token: string) {
        return this.http
            .get(`${process.env.TUPLE_API_AUTH0_ISSUER_URL}/userinfo`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .pipe(map((res) => res.data));
    }

    getUserPermissions(sub: string): Observable<any[]> {
        return this.getAccessToken().pipe(
            switchMap((token) =>
                this.http.get(
                    `${process.env.TUPLE_API_AUTH0_ISSUER_URL}/api/v2/users/${sub}/permissions`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
            ),
            map((res) => res.data)
        );
    }

    getAccessToken(): Observable<string> {
        return this.http
            .post(`${process.env.TUPLE_API_AUTH0_API}/oauth/token`, {
                grant_type: 'client_credentials',
                client_id: process.env.TUPLE_API_AUTH0_CLIENT_ID,
                client_secret: process.env.TUPLE_API_AUTH0_CLIENT_SECRET,
                audience: process.env.TUPLE_API_AUTH0_AUDIENCE,
            })
            .pipe(map((res) => res.data.access_token));
    }
}
