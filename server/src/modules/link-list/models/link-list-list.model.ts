import { LinkListModel } from 'src/modules/link/models/link-list.model';

export interface LinkListListModel {
  id: number;
  title: string;
  links: LinkListModel[];
  layoutId: number;
}
