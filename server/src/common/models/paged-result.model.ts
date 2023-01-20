export declare class PagedResultModel<T> {
  items?: T[];
  totalCount?: number;
  constructor(initialValues?: Partial<PagedResultModel<T>>);
}
