import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LinkListEntity } from './link-list';

@Entity('link')
export class LinkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  link: string;

  @ManyToOne((type) => LinkListEntity, (linkList) => linkList.links)
  linkList: LinkListEntity;
}
