import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class AuthMgmtApiService {
    constructor(private readonly _http: HttpService) {}

    getRoles(sub: string) {
        return this._http
            .get(`/users/${sub}/roles`)
            .pipe(map((res) => res.data));
    }
}
