import { Test, TestingModule } from '@nestjs/testing';
import { TasksCategoriesController } from './tasks_categories.controller';
import { TasksCategoriesService } from './tasks_categories.service';

describe('TasksCategoriesController', () => {
  let controller: TasksCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksCategoriesController],
      providers: [TasksCategoriesService],
    }).compile();

    controller = module.get<TasksCategoriesController>(TasksCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
