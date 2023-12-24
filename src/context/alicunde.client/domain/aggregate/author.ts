//crear clase base de entidad para sequelize que extienda de base
import { BaseEntity } from "../../../alicunde.shared/domain/base.entity";
import { Book } from "../entities/book";

export class Author extends BaseEntity {
    public title: string;
    public name: string;
    public surname: string;
    public email: string;
    public books: Array<Book>;

    constructor(
        id: number,
        createdAt: Date,
        updatedAt: Date,
        title: string,
        name: string,
        surname: string,
        email: string,
        books: Array<Book>) {
        super(id, createdAt, updatedAt);
        this.title = title;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.books = books;
    }

}