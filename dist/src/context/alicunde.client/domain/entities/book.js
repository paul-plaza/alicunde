"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const base_entity_1 = require("../../../alicunde.shared/domain/base.entity");
class Book extends base_entity_1.BaseEntity {
    constructor(id, createdAt, updatedAt, title, author, description, cover, price) {
        super(id, createdAt, updatedAt);
        this.title = title;
        this.author = author;
        this.description = description;
        this.cover = cover;
        this.price = price;
    }
}
exports.Book = Book;
