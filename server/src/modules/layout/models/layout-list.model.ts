import { LinkListListModel } from 'src/modules/link-list/models/link-list-list.model';

export interface LayoutListModel {
  id: number;
  title: string;
  qr_code: string;
  qr_code_image: number;
  copy_right: string;
  site_number: string;
  public_number: string;
  link_lists: LinkListListModel[];
}
