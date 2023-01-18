import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('home')
export class HomeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: number;
}
