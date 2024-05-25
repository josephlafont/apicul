import { Task } from "src/tasks/entities/task.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class TasksCategory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: false })
    Description: string;
    @Column()
    Color: string;
    @OneToMany(() => Task, task => task.taskCategory)
    tasks: Task[];
}
