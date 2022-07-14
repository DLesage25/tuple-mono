import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthApiHttpService } from './auth_api_http.service';

@Module({
    imports: [
        ConfigModule,
        HttpModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                baseURL: configService.get('TUPLE_API_AUTH0_MGMT_API_AUTH_URL'),
                headers: {
                    Authorization: `Bearer ${configService.get(
                        'TUPLE_API_AUTH0_MGMT_API_TOKEN'
                    )}`,
                },
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [AuthApiHttpService],
    exports: [AuthApiHttpService],
})
export class AuthApiHttpModule {}
