import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HabitLog } from '../../db/entities/habit-log.entity';
import { CreateHabitLogDto } from './dto/create-habit-log.dto';
import { UpdateHabitLogDto } from './dto/update-habit-log.dto';

@Injectable()
export class HabitLogsService {
  constructor(
    @InjectRepository(HabitLog)
    private readonly habitLogRepository: Repository<HabitLog>,
  ) {}

  async create(createHabitLogDto: CreateHabitLogDto): Promise<HabitLog> {
    const habitLog = this.habitLogRepository.create(createHabitLogDto);
    return await this.habitLogRepository.save(habitLog);
  }

  async findAll(): Promise<HabitLog[]> {
    return await this.habitLogRepository.find({ relations: ['habit'] });
  }

  async findOne(id: number): Promise<HabitLog> {
    const habitLog = await this.habitLogRepository.findOne({ where: { id }, relations: ['habit'] });
    if (!habitLog) {
      throw new NotFoundException(`HabitLog with ID ${id} not found`);
    }
    return habitLog;
  }

  async update(id: number, updateHabitLogDto: UpdateHabitLogDto): Promise<HabitLog> {
    const habitLog = await this.findOne(id);
    Object.assign(habitLog, updateHabitLogDto);
    return await this.habitLogRepository.save(habitLog);
  }

  async remove(id: number): Promise<void> {
    const habitLog = await this.findOne(id);
    await this.habitLogRepository.remove(habitLog);
  }
}
