import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) {}

    @Get()
    async getUsers() {
        return this.service.findAll();
    }

    @Post()
    async createUser() {
        return this.service.createUser({
            name: 'dan',
            email: 'dan@partnerhero.com',
        });
    }
}
