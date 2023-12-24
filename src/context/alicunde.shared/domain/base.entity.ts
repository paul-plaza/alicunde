
export class BaseEntity {
    public id: number;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(id: number, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}