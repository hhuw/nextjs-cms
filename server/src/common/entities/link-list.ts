import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LinkEntity } from './link.entity';

@Entity('linkList')
export class LinkListEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany((type) => LinkEntity, (link) => link.linkList) // note: we will create author property in the Photo class below
  links: LinkEntity[];
}
