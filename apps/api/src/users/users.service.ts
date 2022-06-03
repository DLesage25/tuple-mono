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

    findAll(): Promise<User[]> {
        return this.userModel.findAll<User>();
    }

    findBySub(sub: string): Promise<User> {
        return this.userModel.findOne({
            where: {
                sub,
            },
        });
    }

    createUser(createUserDto: CreateUserDto) {
        return this.userModel.create({ ...createUserDto, id: uuidv4() });
    }
}
