import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from '@tuple/user-dao';
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        SequelizeModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                dialect: 'postgres',
                host: config.get('USER_DB_SQLIZE_HOST'),
                port: config.get('USER_DB_SQLIZE_PORT'),
                username: config.get('USER_DB_SQLIZE_USERNAME'),
                password: config.get('USER_DB_SQLIZE_PASSWORD'),
                database: config.get('USER_DB_SQLIZE_DATABASE'),
                autoLoadModels: true,
                synchronize: true,
                models: [User],
            }),
        }),
        UserModule,
    ],
    providers: [],
})
export class AppModule {}
