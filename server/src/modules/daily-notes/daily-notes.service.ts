import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DailyNote } from '../../db/entities/daily-note.entity';
import { CreateDailyNoteDto } from './dto/create-daily-note.dto';
import { UpdateDailyNoteDto } from './dto/update-daily-note.dto';

@Injectable()
export class DailyNotesService {
  constructor(
    @InjectRepository(DailyNote)
    private readonly dailyNoteRepository: Repository<DailyNote>,
  ) {}

  async create(createDailyNoteDto: CreateDailyNoteDto): Promise<DailyNote> {
    const dailyNote = this.dailyNoteRepository.create(createDailyNoteDto);
    return await this.dailyNoteRepository.save(dailyNote);
  }

  async findAll(): Promise<DailyNote[]> {
    return await this.dailyNoteRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<DailyNote> {
    const dailyNote = await this.dailyNoteRepository.findOne({ where: { id }, relations: ['user'] });
    if (!dailyNote) {
      throw new NotFoundException(`DailyNote with ID ${id} not found`);
    }
    return dailyNote;
  }

  async update(id: number, updateDailyNoteDto: UpdateDailyNoteDto): Promise<DailyNote> {
    const dailyNote = await this.findOne(id);
    Object.assign(dailyNote, updateDailyNoteDto);
    return await this.dailyNoteRepository.save(dailyNote);
  }

  async remove(id: number): Promise<void> {
    const dailyNote = await this.findOne(id);
    await this.dailyNoteRepository.remove(dailyNote);
  }
}
