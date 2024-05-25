import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksCategoriesService } from './tasks_categories.service';
import { CreateTasksCategoryDto } from './dto/create-tasks_category.dto';
import { UpdateTasksCategoryDto } from './dto/update-tasks_category.dto';

@Controller('tasks-categories')
export class TasksCategoriesController {
  constructor(private readonly tasksCategoriesService: TasksCategoriesService) {}

  @Post()
  create(@Body() createTasksCategoryDto: CreateTasksCategoryDto) {
    return this.tasksCategoriesService.create(createTasksCategoryDto);
  }

  @Get()
  findAll() {
    return this.tasksCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTasksCategoryDto: UpdateTasksCategoryDto) {
    return this.tasksCategoriesService.update(+id, updateTasksCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksCategoriesService.remove(+id);
  }
}
