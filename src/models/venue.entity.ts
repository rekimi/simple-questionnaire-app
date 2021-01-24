import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany} from "typeorm";
import { VenueQuestion } from './venue_question.entity';

@Entity('venues')
export class Venue{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  venue_name: string;

  @OneToMany(() => VenueQuestion, venue_question => venue_question.venue)
  //the exclamation mark is a non-null assertion operator.
  venue_question_id!: VenueQuestion[];

  @CreateDateColumn()
  created_at: string; 

  @UpdateDateColumn()
  updated_at: string;

  @DeleteDateColumn()
  deleted_at: string;
}
