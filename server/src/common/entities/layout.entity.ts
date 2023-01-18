import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('layout')
export class LayoutEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  qr_code: string;

  @Column() //照片
  qr_code_image: number;

  @Column()
  copy_right: string;

  @Column()
  site_number: string;

  @Column()
  public_number: string;

  // @Column()一对多
  // link_lists: string;
}
