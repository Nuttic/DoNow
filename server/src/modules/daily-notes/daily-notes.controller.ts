import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailyNotesService } from './daily-notes.service';
import { CreateDailyNoteDto } from './dto/create-daily-note.dto';
import { UpdateDailyNoteDto } from './dto/update-daily-note.dto';

@Controller('daily-notes')
export class DailyNotesController {
  constructor(private readonly dailyNotesService: DailyNotesService) {}

  @Post()
  create(@Body() createDailyNoteDto: CreateDailyNoteDto) {
    return this.dailyNotesService.create(createDailyNoteDto);
  }

  @Get()
  findAll() {
    return this.dailyNotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyNotesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailyNoteDto: UpdateDailyNoteDto) {
    return this.dailyNotesService.update(+id, updateDailyNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyNotesService.remove(+id);
  }
}
