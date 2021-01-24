import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';

@Entity('people')
export class Person{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: string;
}
