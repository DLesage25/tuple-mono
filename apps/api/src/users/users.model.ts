import { Role } from '@tuple/auth';
import { Table, Column, Model, IsUUID } from 'sequelize-typescript';

@Table
export class User extends Model {
    @IsUUID(4)
    @Column({ primaryKey: true })
    id: string;

    @Column
    name: string;

    @Column
    email: string;

    @Column
    sub: string;
}

export interface UserWithRoles extends Partial<User> {
    roles: Role[];
}
