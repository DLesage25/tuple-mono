import { Module } from '@nestjs/common';
import { AuthMgmtApiModule as AuthMgmtApiLib } from '@tuple/auth';
import { UserHttpModule } from './http/user/user.http.module';
import { UserService } from './user.service';

@Module({
    imports: [UserHttpModule, AuthMgmtApiLib],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
