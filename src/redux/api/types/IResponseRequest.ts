export interface IFilterResponse<T> {
  data: T;
  total: number;
}
export interface IResponse {
  status?: string;
  message?: string;
}
export interface IRequest {
  page?: number;
  page_size?: number;
}
export interface ISimpleElement {
  id: number;
  name: string;
}


export interface IFilterRequest {
  role?: number;
  status?: number;
  activationMode?: boolean;
  search?: string;
  page?: number;
  page_size?: number;
  sortBy?: string;
  sortOrder?: string;
}