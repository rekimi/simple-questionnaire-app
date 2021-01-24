import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { Question } from './question.entity';
import { Venue } from './venue.entity';

@Entity('venues_questions')
export class VenueQuestion{
  @PrimaryGeneratedColumn()
  id : number

  @ManyToOne(() => Question, question => question.id)
  //the exclamation mark is a non-null assertion operator.
  question!: number

  @ManyToOne(() => Venue, venue => venue.id)
  //the exclamation mark is a non-null assertion operator.
  venue!: number
}

