import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserModule as UserLib } from '@tuple/service-modules';

@Module({
    imports: [UserLib],
    providers: [],
    controllers: [UsersController],
})
export class UsersModule {}
