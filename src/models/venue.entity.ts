import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn} from "typeorm";

@Entity('venues')
export class Venue{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  venue_name: string;

  @CreateDateColumn()
  created_at: string; 

  @UpdateDateColumn()
  updated_at: string;

  @DeleteDateColumn()
  deleted_at: string;
}
