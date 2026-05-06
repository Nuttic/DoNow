import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { RolesModule } from './modules/roles/roles.module';
import { UsersModule } from './modules/users/users.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { HabitsModule } from './modules/habits/habits.module';
import { HabitLogsModule } from './modules/habit-logs/habit-logs.module';
import { HabitSchedulesModule } from './modules/habit-schedules/habit-schedules.module';
import { DailyNotesModule } from './modules/daily-notes/daily-notes.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    RolesModule,
    UsersModule,
    CategoriesModule,
    HabitsModule,
    HabitLogsModule,
    HabitSchedulesModule,
    DailyNotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
