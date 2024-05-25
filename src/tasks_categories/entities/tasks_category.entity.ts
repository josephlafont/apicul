import { Column, PrimaryGeneratedColumn } from "typeorm";

export class TasksCategory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: false })
    Description: string;
    @Column()
    Color: string;
}
