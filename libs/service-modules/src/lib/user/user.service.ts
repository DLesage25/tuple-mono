import { Injectable } from '@nestjs/common';
import { User } from '@tuple/user-dao';
import { map, Observable } from 'rxjs';
import { UserHttpService } from './http/user/user.http.service';

export interface Payload<T> {
    data: T;
}

@Injectable()
export class UserService {
    constructor(private readonly _http: UserHttpService) {}

    getUser(sub: string): Observable<User> {
        return this._http
            .get<Payload<User>>(`/${sub}`)
            .pipe(map((res) => res.data.data));
    }

    getUsers(): Observable<User[]> {
        return this._http
            .get<Payload<User[]>>(`/`)
            .pipe(map((res) => res.data.data));
    }
}
