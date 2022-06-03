import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    findAll() {
        return this.service.findAll();
    }

    @Get('/sub/:sub')
    @UseGuards(AuthGuard('jwt'))
    findBySub(@Param('sub') sub: string) {
        return this.service.findBySub(sub);
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    createUser() {
        return this.service.createUser({
            name: 'dan',
            email: 'dan@partnerhero.com',
        });
    }
}
