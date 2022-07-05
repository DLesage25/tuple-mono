import {
    Controller,
    Get,
    NotFoundException,
    Param,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '@tuple/service-modules';
import { map, Observable, switchMap } from 'rxjs';
import { UserWithRoles } from './users.model';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
    constructor(private readonly service: UserService) {}

    @Get()
    findAll() {
        return this.service.getUsers();
    }

    @Get('/sub/:sub')
    findBySub(@Param('sub') sub: string): Observable<UserWithRoles> {
        return this.service.getUser(sub).pipe(
            map((userData) => {
                if (!userData)
                    return new NotFoundException(`User with ${sub} not found.`);
                return userData;
            }),
            switchMap((user) => {
                return this.service.getUserRoles(sub).pipe(
                    map((roles) => {
                        return {
                            ...user,
                            roles,
                        };
                    })
                );
            })
        );
    }

    // @Post()
    // createUser() {
    //     return this.service.createUser({
    //         name: 'dan',
    //         email: 'dan@partnerhero.com',
    //     });
    // }
}
