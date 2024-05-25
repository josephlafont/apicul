import { Injectable } from '@nestjs/common';
import { CreateTasksCategoryDto } from './dto/create-tasks_category.dto';
import { UpdateTasksCategoryDto } from './dto/update-tasks_category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksCategory } from './entities/tasks_category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksCategoriesService {

  constructor(
    @InjectRepository(TasksCategory)
    private TaskCategoryRepository: Repository<TasksCategory>
  ){}

  create(createTaskCategoryDto: CreateTasksCategoryDto) {
    return this.TaskCategoryRepository.save(createTaskCategoryDto);
  }

  findAll() {
    return this.TaskCategoryRepository.find();
  }

  findOne(id: number) {
    return this.TaskCategoryRepository.findOneBy({ id });
  }

  update(id: number, updateTaskCategoryDto: UpdateTasksCategoryDto) {
    return this.TaskCategoryRepository.update({ id }, updateTaskCategoryDto);
  }

  remove(id: number) {
    return this.TaskCategoryRepository.delete({ id });
  }
}
