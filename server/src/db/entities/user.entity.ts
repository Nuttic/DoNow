import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Role } from './role.entity';
import { Habit } from './habit.entity';
import { DailyNote } from './daily-note.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, (role) => role.users, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @OneToMany(() => Habit, (habit) => habit.user)
  habits: Habit[];

  @OneToMany(() => DailyNote, (dailyNote) => dailyNote.user)
  dailyNotes: DailyNote[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}