import { Entity,  Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany} from 'typeorm';
import { VenueQuestion } from './venue_question.entity';

@Entity('questions')
export class Question{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question_desc: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @DeleteDateColumn()
  deleted_at: string;
} 


