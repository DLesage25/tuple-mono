import {
    Controller,
    Get,
    NotFoundException,
    Param,
    Post,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) {}

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get('/sub/:sub')
    findBySub(@Param('sub') sub: string) {
        return this.service.findBySub(sub).then((user) => {
            if (!user)
                return new NotFoundException(`User with ${sub} not found.`);
            return user;
        });
    }

    @Post()
    createUser() {
        return this.service.createUser({
            name: 'dan',
            email: 'dan@partnerhero.com',
        });
    }
}
