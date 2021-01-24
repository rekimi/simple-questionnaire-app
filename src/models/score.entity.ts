import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { VenueQuestion } from './venue_question.entity';

@Entity('scores')
export class Score{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column()
  person_id: number;

  @ManyToOne(() => VenueQuestion)
  @JoinColumn()
  venue_question: VenueQuestion;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @DeleteDateColumn()
  deleted_at: string;
}
