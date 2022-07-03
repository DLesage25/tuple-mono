import { Controller, Get, Param, Version } from '@nestjs/common';
import { User } from '@tuple/user-dao';
import { Observable } from 'rxjs';
import { Payload, UserService } from './user.service';

@Controller('/')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // @Get()
    // @Version('1')
    // getUsers(): Observable<Payload<User[]>> {
    //     return this.userService.findAll();
    // }

    @Get(':id')
    @Version('1')
    getUser(@Param() { id }: { id: string }): Observable<Payload<User>> {
        return this.userService.findOne(id);
    }
}
