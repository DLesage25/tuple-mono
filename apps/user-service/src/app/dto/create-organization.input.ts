import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserInput {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    sub: string;
}
