import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable()
export class AuthApiHttpService {
    constructor(
        private readonly _http: HttpService,
        private readonly configService: ConfigService
    ) {}

    //TODO validate token method that can be exposed. requestAccessToken should be private method

    requestAccessToken(): Observable<any> {
        return this._http
            .post('', {
                client_id: this.configService.get(
                    'TUPLE_API_AUTH0_MGMT_API_AUTH_CLIENT_ID'
                ),
                client_secret: this.configService.get(
                    'TUPLE_API_AUTH0_MGMT_API_AUTH_CLIENT_SECRET'
                ),
                audience: this.configService.get(
                    'TUPLE_API_AUTH0_MGMT_API_AUTH_AUDIENCE'
                ),
                grant_type: 'client_credentials',
            })
            .pipe(
                map((res) => {
                    //TODO store the token under data.access_token
                    console.log(res.data);
                    return res;
                }),
                catchError((e) => {
                    console.error(
                        `Error when attempting to fetch a new auth mgmt api token: ${e.response.data}`
                    );
                    return of(null);
                })
            );
    }
}
