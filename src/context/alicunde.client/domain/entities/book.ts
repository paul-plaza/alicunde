import { BaseEntity } from "../../../alicunde.shared/domain/base.entity";

export class Book extends BaseEntity {
    public title: string;
    public author: string;
    public description: string;
    public cover: string;
    public price: number;

    constructor(
        id: number,
        createdAt: Date,
        updatedAt: Date,
        title: string,
        author: string,
        description: string,
        cover: string,
        price: number) {
        super(id, createdAt, updatedAt);
        this.title = title;
        this.author = author;
        this.description = description;
        this.cover = cover;
        this.price = price;
    }
}