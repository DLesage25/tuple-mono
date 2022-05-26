import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        SequelizeModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                dialect: 'postgres',
                host: config.get('TUPLE_API_SQLIZE_HOST'),
                port: config.get('TUPLE_API_SQLIZE_PORT'),
                username: config.get('TUPLE_API_SQLIZE_USERNAME'),
                password: config.get('TUPLE_API_SQLIZE_PASSWORD'),
                database: config.get('TUPLE_API_SQLIZE_DATABASE'),
                autoLoadModels: true,
                synchronize: true,
            }),
        }),
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
