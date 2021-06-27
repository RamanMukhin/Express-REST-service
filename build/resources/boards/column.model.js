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
import { Board } from './board.model.js';
let ColumnClass = class ColumnClass {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], ColumnClass.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], ColumnClass.prototype, "title", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], ColumnClass.prototype, "order", void 0);
__decorate([
    ManyToOne(() => Board, (board) => board.columns, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", Object)
], ColumnClass.prototype, "board", void 0);
ColumnClass = __decorate([
    Entity()
], ColumnClass);
export { ColumnClass };
