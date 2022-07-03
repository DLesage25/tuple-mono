import { Dao } from '@tuple/shared';
import { from, Observable, switchMap } from 'rxjs';
import { Repository } from 'sequelize-typescript';
import { User } from './user.model';

interface UserCreateInput {
    name: string;
    email: string;
    sub: string;
}

interface UserUpdateInput {
    name: string;
    email: string;
}

export class UserDao extends Dao<User> {
    constructor(repository: Repository<User>) {
        super(repository);
    }
    // create(input: UserCreateInput): Observable<User> {
    //     return from(
    //         User.create<User>({
    //             ...input,
    //         })
    //     );
    // }

    // update(id: string, input: UserUpdateInput): Observable<User> {
    //     return from(this.findOne(id)).pipe(
    //         switchMap((user) => {
    //             let newUser = new User();
    //             newUser = Object.assign(newUser, user);
    //             newUser.name = input.name;
    //             newUser.email = input.email;
    //             return newUser.save();
    //         })
    //     );
    // }

    // TODO - need to define diff b/w id and sub
    findOne(sub: string): Observable<User> {
        return from(
            User.findOne({
                where: {
                    sub,
                },
            })
        );
    }

    // findAll(): Observable<User[]> {
    //     return from(User.findAll());
    // }
}
