import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map, of } from 'rxjs';
import { AuthApiHttpService } from './auth_api_http/auth_api_http.service';

@Injectable()
export class AuthMgmtApiService {
    constructor(
        private readonly _apiHttp: HttpService,
        private readonly authService: AuthApiHttpService
    ) {}

    getRoles(sub: string) {
        // return this.authService.requestAccessToken().pipe(
        //     map((res) => {
        //         console.log(res);
        //         return [];
        //     })
        // );

        return this._apiHttp.get(`/users/${sub}/roles`).pipe(
            map((res) => res.data),
            catchError((e) => {
                console.error(
                    `Error when attempting to fetch roles for ${sub}: ${JSON.stringify(
                        e.response.data
                    )}`
                );
                return of([]);
            })
        );
    }
}
