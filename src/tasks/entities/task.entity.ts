import { TasksCategory } from "src/tasks_categories/entities/tasks_category.entity";
import { TasksStatus } from "src/tasks_status/entities/tasks_status.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false }) 
    taskCategoryId: number;
    @ManyToOne(() => TasksCategory, taskCategory => taskCategory.tasks)
    taskCategory: TasksCategory;

    @Column({ nullable: false }) 
    taskStatusId: number;
    @ManyToOne(() => TasksStatus, taskStatus => taskStatus.tasks)
    taskStatus: TasksStatus;
    
    @Column({ nullable: false }) 
    userId: number;
    @ManyToOne(() => User, user => user.tasks)
    user: User;

    @Column() 
    description: string;
    @Column() 
    color: string;
}

