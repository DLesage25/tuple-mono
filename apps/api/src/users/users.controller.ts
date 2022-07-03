import {
    Controller,
    Get,
    NotFoundException,
    Param,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '@tuple/service-modules';
import { map } from 'rxjs';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
    constructor(private readonly service: UserService) {}

    @Get()
    findAll() {
        return this.service.getUsers();
    }

    @Get('/sub/:sub')
    findBySub(@Param('sub') sub: string) {
        return this.service.getUser(sub).pipe(
            map((user) => {
                if (!user)
                    return new NotFoundException(`User with ${sub} not found.`);
                return user;
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
