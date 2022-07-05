import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthMgmtApiService } from './auth_mgmt_api.service';

@Module({
    imports: [
        HttpModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                baseURL: configService.get('TUPLE_API_AUTH0_MGMT_API_URL'),
                headers: {
                    Authorization: `Bearer ${configService.get(
                        'TUPLE_API_AUTH0_MGMT_API_TOKEN'
                    )}`,
                },
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [AuthMgmtApiService],
    exports: [AuthMgmtApiService],
})
export class AuthMgmtApiModule {}
