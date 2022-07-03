import { Module } from '@nestjs/common';
import { Axios } from 'axios';
import { UserHttpService } from './user.http.service';

export const AXIOS_INSTANCE_TOKEN = 'AXIOS_INSTANCE_TOKEN';

@Module({
    providers: [
        UserHttpService,
        {
            provide: AXIOS_INSTANCE_TOKEN,
            useValue: Axios,
        },
    ],
    exports: [UserHttpService],
})
export class UserHttpModule {}
