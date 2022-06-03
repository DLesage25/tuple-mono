import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' }), HttpModule],
    providers: [JwtStrategy, AuthService],
    exports: [PassportModule],
})
export class AuthModule {}
