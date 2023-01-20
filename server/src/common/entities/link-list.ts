import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LayoutEntity } from './layout.entity';
import { LinkEntity } from './link.entity';

@Entity('linkList')
export class LinkListEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => LinkEntity, (link) => link.linkList)
  links: LinkEntity[];

  @ManyToOne(() => LayoutEntity, (layout) => layout.link_lists)
  layout: LayoutEntity;
}
