import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { DailyNote } from '../entities/daily-note.entity';
import { User } from '../entities/user.entity';
import { Role } from '../entities/role.entity';
import { Habit } from '../entities/habit.entity';
import { HabitLog } from '../entities/habit-log.entity';
import { HabitSchedule } from '../entities/habit-schedule.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'do_now_db',
      entities: [
        Category,
        DailyNote,
        User,
        Role,
        Habit,
        HabitLog,
        HabitSchedule,
      ],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}