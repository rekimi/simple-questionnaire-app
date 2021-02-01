import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from 'src/models/question.entity';

@Controller('questions')
export class QuestionsController {
  constructor(private questionService: QuestionsService){}

  @Post('')
  async create(@Body() question: Question): Promise<Question> {
    return this.questionService.createOrSave(question);
  }

  @Get('')
  async findAll(): Promise<Question[]> {
    return this.questionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Question> {
    return this.questionService.findOne(id);
  }

  @Put('')
  async update(@Body() question: Question): Promise<Question> {
    return this.questionService.createOrSave(question);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Boolean> {
    const deleted = await this.questionService.remove(id);
    return deleted.raw.affected > 0;
  }

}
