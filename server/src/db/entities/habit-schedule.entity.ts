import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Habit } from './habit.entity';

export enum Type {
  WEEKLY = 'weekly',
  INTERVAL = 'interval'
}

export enum WeekDays {
  MON = 'Понедельник',
  TUE = 'Вторник',
  WED = 'Среда',
  THU = 'Четверг',
  FRI = 'Пятница',
  SAT = 'Суббота',
  SUN = 'Воскресенье'
}

@Entity('habit_schedules')
export class HabitSchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: Type,
    default: Type.WEEKLY
  })
  type: string;

  @Column({ type: 'simple-array', nullable: true })
  daysOfWeek: WeekDays[];

  @Column({ nullable: true })
  intervalDays: number;

  @Column({ default: 1 })
  repsPerDay: number;

  @ManyToOne(() => Habit, (habit) => habit.habitSchedules, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'habit_id' })
  habit: Habit;

  @CreateDateColumn()
  created_at: Date;
}