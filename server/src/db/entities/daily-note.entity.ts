import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('daily_notes')
export class DailyNote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  noteDate: Date;

  @ManyToOne(() => User, (user) => user.dailyNotes)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}