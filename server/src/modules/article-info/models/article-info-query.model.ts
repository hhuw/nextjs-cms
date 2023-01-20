import { PagedRequestModel } from 'src/common/models/paged-request.model';

export class ArticleInfoQueryModel extends PagedRequestModel {
  author: string;
  content: string;
}
