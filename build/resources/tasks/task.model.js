var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Board } from '../boards/board.model.js';
import { User } from '../users/user.model.js';
let Task = class Task {
    static toResponse(task) {
        const { id, title, order, description, userId, columnId } = task;
        const board = task.boardId;
        const boardId = (!board) ? null : board.id;
        return { id, title, order, description, userId, boardId, columnId };
    }
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Task.prototype, "order", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    ManyToOne(() => User, {
        nullable: true,
        eager: true,
        onDelete: 'SET NULL',
    }),
    __metadata("design:type", Object)
], Task.prototype, "userId", void 0);
__decorate([
    ManyToOne(() => Board, (board) => board.task, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", Object)
], Task.prototype, "boardId", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], Task.prototype, "columnId", void 0);
Task = __decorate([
    Entity()
], Task);
export { Task };
