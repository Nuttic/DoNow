import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habit } from '../../db/entities/habit.entity';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Injectable()
export class HabitsService {
  constructor(
    @InjectRepository(Habit)
    private readonly habitRepository: Repository<Habit>,
  ) {}

  async create(createHabitDto: CreateHabitDto): Promise<Habit> {
    const habit = this.habitRepository.create(createHabitDto);
    return await this.habitRepository.save(habit);
  }

  async findAll(): Promise<Habit[]> {
    return await this.habitRepository.find({ relations: ['user', 'category', 'habitLogs', 'habitSchedules'] });
  }

  async findOne(id: number): Promise<Habit> {
    const habit = await this.habitRepository.findOne({ where: { id }, relations: ['user', 'category', 'habitLogs', 'habitSchedules'] });
    if (!habit) {
      throw new NotFoundException(`Habit with ID ${id} not found`);
    }
    return habit;
  }

  async update(id: number, updateHabitDto: UpdateHabitDto): Promise<Habit> {
    const habit = await this.findOne(id);
    Object.assign(habit, updateHabitDto);
    return await this.habitRepository.save(habit);
  }

  async remove(id: number): Promise<void> {
    const habit = await this.findOne(id);
    await this.habitRepository.remove(habit);
  }
}
