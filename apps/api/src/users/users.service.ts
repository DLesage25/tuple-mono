import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './create-user.dto';
import { User } from './users.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {}

    async findAll(): Promise<User[]> {
        return this.userModel.findAll<User>();
    }

    async createUser(createUserDto: CreateUserDto) {
        console.log(process.env);
        return this.userModel.create({ ...createUserDto, id: uuidv4() });
    }
}
