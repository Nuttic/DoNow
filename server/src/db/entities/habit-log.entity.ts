import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Habit } from './habit.entity';

export enum LogStatus {
  DONE = 'Выполнено',
  SKIPPED = 'Пропущено',
  PENDING = 'В процессе'
}

@Entity('habit_logs')
export class HabitLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  logDate: Date;

  @Column({ type: 'enum', enum: LogStatus, default: LogStatus.PENDING })
  status: string;

  @Column({ nullable: true })
  executionTime: string;

  @ManyToOne(() => Habit, (habit) => habit.habitLogs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'habit_id' })
  habit: Habit;
}