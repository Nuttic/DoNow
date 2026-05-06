import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HabitSchedule } from '../../db/entities/habit-schedule.entity';
import { CreateHabitScheduleDto } from './dto/create-habit-schedule.dto';
import { UpdateHabitScheduleDto } from './dto/update-habit-schedule.dto';

@Injectable()
export class HabitSchedulesService {
  constructor(
    @InjectRepository(HabitSchedule)
    private readonly habitScheduleRepository: Repository<HabitSchedule>,
  ) {}

  async create(createHabitScheduleDto: CreateHabitScheduleDto): Promise<HabitSchedule> {
    const habitSchedule = this.habitScheduleRepository.create(createHabitScheduleDto);
    return await this.habitScheduleRepository.save(habitSchedule);
  }

  async findAll(): Promise<HabitSchedule[]> {
    return await this.habitScheduleRepository.find({ relations: ['habit'] });
  }

  async findOne(id: number): Promise<HabitSchedule> {
    const habitSchedule = await this.habitScheduleRepository.findOne({ where: { id }, relations: ['habit'] });
    if (!habitSchedule) {
      throw new NotFoundException(`HabitSchedule with ID ${id} not found`);
    }
    return habitSchedule;
  }

  async update(id: number, updateHabitScheduleDto: UpdateHabitScheduleDto): Promise<HabitSchedule> {
    const habitSchedule = await this.findOne(id);
    Object.assign(habitSchedule, updateHabitScheduleDto);
    return await this.habitScheduleRepository.save(habitSchedule);
  }

  async remove(id: number): Promise<void> {
    const habitSchedule = await this.findOne(id);
    await this.habitScheduleRepository.remove(habitSchedule);
  }
}
