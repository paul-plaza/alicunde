"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
//crear clase base de entidad para sequelize que extienda de base
const base_entity_1 = require("../../../alicunde.shared/domain/base.entity");
class Author extends base_entity_1.BaseEntity {
    constructor(id, createdAt, updatedAt, title, name, surname, email, books) {
        super(id, createdAt, updatedAt);
        this.title = title;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.books = books;
    }
}
exports.Author = Author;
