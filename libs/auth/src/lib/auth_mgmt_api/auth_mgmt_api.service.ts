import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map, of } from 'rxjs';

@Injectable()
export class AuthMgmtApiService {
    constructor(private readonly _http: HttpService) {}

    getRoles(sub: string) {
        return this._http.get(`/users/${sub}/roles`).pipe(
            map((res) => res.data),
            catchError((e) => {
                console.error(
                    `Error when attempting to fetch roles for ${sub}: ${e.response.data}`
                );
                return of([]);
            })
        );
    }
}
