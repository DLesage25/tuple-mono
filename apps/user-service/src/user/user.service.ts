import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User, UserDao } from '@tuple/user-dao';
import { map, Observable, of, switchMap } from 'rxjs';
// import { Observable, of, switchMap } from 'rxjs';
// import { CreateUserInput } from '../app/dto/create-organization.input';

export interface Payload<T> {
    timestamp: number;
    data: T;
    code: number;
}

@Injectable()
export class UserService {
    private dao: UserDao;

    constructor(@InjectModel(User) private userModel: typeof User) {
        this.dao = new UserDao(userModel);
    }

    // findAll(): Observable<Payload<User[]>> {
    //     return this.userModel.findAll().pipe(
    //         switchMap((users) => {
    //             return of({
    //                 timestamp: new Date().getTime(),
    //                 data: users,
    //                 code: 200,
    //             });
    //         })
    //     );
    // }

    findOne(id: string): Observable<Payload<User>> {
        console.log({ id });
        return this.dao.findOne(id).pipe(
            switchMap((res) => {
                return of({
                    timestamp: new Date().getTime(),
                    data: res,
                    code: 200,
                });
            })
        );

        // then((res) => {
        //     return {
        //         timestamp: new Date().getTime(),
        //         data: res,
        //         code: 200,
        //     };
        // });
    }

    // create(input: CreateUserInput) {
    //     return this.dao.create(input).pipe(
    //         switchMap((user) => {
    //             return of({
    //                 timestamp: new Date().getTime(),
    //                 data: user,
    //                 code: 200,
    //             });
    //         })
    //     );
    // }
}
