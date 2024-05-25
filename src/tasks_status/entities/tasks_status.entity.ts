import { Task } from "src/tasks/entities/task.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class TasksStatus {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    Description: string;
    @OneToMany(() => Task, task => task.taskStatus)
    tasks: Task[];
}
