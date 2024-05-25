import { PartialType } from '@nestjs/mapped-types';
import { CreateTasksCategoryDto } from './create-tasks_category.dto';

export class UpdateTasksCategoryDto extends PartialType(CreateTasksCategoryDto) {}
