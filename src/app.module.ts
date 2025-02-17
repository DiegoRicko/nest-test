import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { TaskModule } from './tasks/task.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AutoModule } from './auto/auto.module';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule, AutoModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
