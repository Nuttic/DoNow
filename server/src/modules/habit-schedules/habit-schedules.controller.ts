import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HabitSchedulesService } from './habit-schedules.service';
import { CreateHabitScheduleDto } from './dto/create-habit-schedule.dto';
import { UpdateHabitScheduleDto } from './dto/update-habit-schedule.dto';

@Controller('habit-schedules')
export class HabitSchedulesController {
  constructor(private readonly habitSchedulesService: HabitSchedulesService) {}

  @Post()
  create(@Body() createHabitScheduleDto: CreateHabitScheduleDto) {
    return this.habitSchedulesService.create(createHabitScheduleDto);
  }

  @Get()
  findAll() {
    return this.habitSchedulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitSchedulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabitScheduleDto: UpdateHabitScheduleDto) {
    return this.habitSchedulesService.update(+id, updateHabitScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitSchedulesService.remove(+id);
  }
}
