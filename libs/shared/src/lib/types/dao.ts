import { Observable } from 'rxjs';
import { Repository } from 'sequelize-typescript';

export abstract class Dao<T> {
    public repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    abstract findOne(id: string): Observable<T>;
    // abstract findAll(): Observable<T[]>;
    // abstract create(input: unknown): Observable<T>;
    // abstract update(id: string, input: unknown): Observable<T>;
}
