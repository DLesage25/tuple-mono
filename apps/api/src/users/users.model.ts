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
}
