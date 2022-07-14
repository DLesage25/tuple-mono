import { Injectable } from '@nestjs/common';
import { AuthMgmtApiService, Role } from '@tuple/auth';
import { User } from '@tuple/user-dao';
import { catchError, map, Observable } from 'rxjs';
import { UserHttpService } from './http/user/user.http.service';

export interface Payload<T> {
    data: T;
}

@Injectable()
export class UserService {
    constructor(
        private readonly _http: UserHttpService,
        private readonly authMgmtService: AuthMgmtApiService
    ) {}

    getUser(sub: string): Observable<User> {
        return this._http
            .get<Payload<User>>(`/${sub}`)
            .pipe(map((res) => res.data.data));
    }

    getUserRoles(sub: string): Observable<Role[]> {
        return this.authMgmtService.getRoles(sub).pipe(map((roles) => roles));
    }

    getUsers(): Observable<User[]> {
        return this._http
            .get<Payload<User[]>>(`/`)
            .pipe(map((res) => res.data.data));
    }
}
