import { Module } from '@nestjs/common';
import { TasksCategoriesService } from './tasks_categories.service';
import { TasksCategoriesController } from './tasks_categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksCategory } from './entities/tasks_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TasksCategory])],
  controllers: [TasksCategoriesController],
  providers: [TasksCategoriesService],
})
export class TasksCategoriesModule {}
