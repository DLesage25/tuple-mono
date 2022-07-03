import { Module } from '@nestjs/common';
import { UserHttpModule } from './http/user/user.http.module';
import { UserService } from './user.service';

@Module({
    imports: [UserHttpModule],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
