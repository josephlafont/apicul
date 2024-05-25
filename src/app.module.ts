import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TasksStatusModule } from './tasks_status/tasks_status.module';
import { User } from './user/entities/user.entity';
import { TasksStatus } from './tasks_status/entities/tasks_status.entity';
import { TasksCategoriesModule } from './tasks_categories/tasks_categories.module';
import { TasksCategory } from './tasks_categories/entities/tasks_category.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'apicul',
    entities: [User, TasksStatus, TasksCategory],
    synchronize: true,
  }), UserModule, TasksStatusModule, TasksCategoriesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
