import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Question } from 'src/models/question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionRepo: Repository<Question>,
  ){}

  findAll(): Promise<Question[]>{
   return this.questionRepo.find(); 
  }

  findOne(id: string): Promise<Question> {
    return this.questionRepo.findOne(id);
  }

  createOrSave(question: Question): Promise<Question> {
    return this.questionRepo.save(question);
  }

  remove(id: string): Promise<UpdateResult> {
    return this.questionRepo.softDelete(id);
  }


}
