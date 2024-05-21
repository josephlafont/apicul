import { Column, PrimaryGeneratedColumn } from "typeorm";

export class TasksStatus {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Description: string;
}
