import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TasksStatusModule } from './tasks_status/tasks_status.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'apicul',
    entities: [],
    synchronize: true,
  }), UserModule, TasksStatusModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
